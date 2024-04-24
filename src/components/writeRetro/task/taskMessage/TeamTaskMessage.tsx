import { ChangeEvent, FC, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Flex, Popover, PopoverContent, PopoverTrigger, Image } from '@chakra-ui/react';
import DeleteData from '../DeleteData';
import ReviseCommentModal from '../ReviseCommentModal';
import { sectionData } from '@/api/@types/Section';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
  commentImage: string;
}

const TeamTaskMessage: FC<Props> = ({ section, setRendering, commentImage }) => {
  const [value, setValue] = useState<string>('');
  const toast = useCustomToast();
  const [image, setImage] = useState<string>('');

  const fetchRetrospectiveImage = async () => {
    if (section) {
      try {
        const data = await postImageToS3({ filename: commentImage, method: 'GET' });
        setImage(data.data.preSignedUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handlePostComment = async () => {
    try {
      await CommentService.post({ sectionId: section.sectionId, commentContent: value });
      setRendering(prev => !prev);
      setValue('');
      toast.success('댓글이 추가되었습니다.');
    } catch {
      toast.error('댓글 추가에 실패했습니다.');
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await CommentService.delete({ commentId: id });
      setRendering(prev => !prev);
      toast.info('해당 댓글이 삭제되었습니다.');
    } catch {
      toast.error('댓글 삭제에 실패하였습니다.');
    }
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  }, []);

  return (
    <>
      {/* TaskMessage */}
      <S.TaskMessageBoxStyle>
        {/* TaskMessageTop */}
        <Flex>
          <S.TaskMessageCount>{section.comments.length}개의 댓글</S.TaskMessageCount>
          <S.TaskMessageLine></S.TaskMessageLine>
        </Flex>

        {/* TaskMessages */}
        <div>
          <S.TaskMessageStyle>
            {section.comments.map(section => (
              <Flex flexDirection="column">
                {/* TaskMessageTop */}
                <Flex>
                  <S.TaskUserProfile>
                    {image ? <Image src={image} sizes="40px" /> : <CgProfile size="40px" color="#DADEE5" />}
                    <S.TaskUserName>{section.username ?? '닉네임 없음'}</S.TaskUserName>
                  </S.TaskUserProfile>
                  {/* <S.MessageTime>1일 전</S.MessageTime> */}
                  <DeleteData
                    value="댓글"
                    handleDeleteValue={() => {
                      handleDeleteComment(section.commentId);
                    }}
                  />
                </Flex>
                <Popover>
                  <PopoverTrigger>
                    <S.TaskText>
                      {section.content}
                      {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
                    </S.TaskText>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ReviseCommentModal comment={section} setRendering={setRendering} />
                    {/* TaskTextModal */}
                  </PopoverContent>
                </Popover>

                {/* TaskMessageMain */}
              </Flex>
            ))}
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <Flex>
          <S.InputMessage value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1} />
          <S.InputButton onClick={handlePostComment}>확인</S.InputButton>
        </Flex>
      </S.TaskMessageBoxStyle>
    </>
  );
};

export default TeamTaskMessage;
