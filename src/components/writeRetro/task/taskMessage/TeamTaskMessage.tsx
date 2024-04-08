import { ChangeEvent, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import ReviseModal from '../ReviseModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const TeamTaskMessage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      {/* TaskMessage */}
      <S.TaskMessageBoxStyle>
        {/* TaskMessageTop */}
        <div style={{ display: 'flex' }}>
          <S.TaskMessageCount>5개의 댓글</S.TaskMessageCount>
          <S.TaskMessageLine></S.TaskMessageLine>
        </div>

        {/* TaskMessages */}
        <div>
          <S.TaskMessageStyle>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* TaskMessageTop */}
              <S.MessageTopStyle>
                <CgProfile size={40} color="#DADEE5" />
                <S.MessageUserName>김체리</S.MessageUserName>
                <S.MessageTime>1일 전</S.MessageTime>
                <div style={{ margin: 'auto 0' }}>
                  <div style={{ display: 'flex' }}>
                    <S.TaskRevise>삭제</S.TaskRevise>
                  </div>
                </div>
              </S.MessageTopStyle>
              {/* TaskMessageMain */}
              <S.MessageText onClick={onOpen}>
                맥락까지 꼼꼼하게 문서에 기재해주셔서 너무 좋아요!
                <S.ReviseMessageText>(수정됨)</S.ReviseMessageText>
              </S.MessageText>
              {/* MessageModal */}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent sx={{ width: 'auto', height: 'auto', borderRadius: '30px', position: 'relative' }}>
                  <ReviseModal />
                  <ModalCloseButton
                    sx={{
                      width: '30px',
                      height: '30px',
                      fontSize: '18px',
                      color: '#8B8B8B',
                      position: 'absolute',
                      top: '31px',
                      left: '600px',
                    }}
                  />
                </ModalContent>
              </Modal>
            </div>
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <S.InputMessage
            value={value}
            onChange={handleChange}
            placeholder="내용을 입력해주세요"
            rows={1}
          ></S.InputMessage>
          <S.InputButton>확인</S.InputButton>
        </div>
      </S.TaskMessageBoxStyle>
    </>
  );
};

export default TeamTaskMessage;
