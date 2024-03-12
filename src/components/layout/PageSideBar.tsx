import { CaretRightFill, PeopleFill, Person, PersonCircle, PersonFill } from 'react-bootstrap-icons';
import * as S from '@/styles/layout/layout.style';
import { useNavigate } from 'react-router-dom';

const PageSideBar = () => {
  const navigate = useNavigate();
  const moveOnHome = () => {
    navigate('/');
  };
  return (
    <S.SideBarBGContainer>
      <S.LogoBox>
        <S.LogoText onClick={() => moveOnHome()}>Past Forward</S.LogoText>
      </S.LogoBox>
      <S.ProfileBox>
        <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        <S.MainName>Clayton Santos</S.MainName>
        <S.MailName>Clayton@gmail.com</S.MailName>
      </S.ProfileBox>
      <S.MiniBox>
        <div style={{ padding: '2px 0' }}>
          <CaretRightFill /> <Person style={{ marginRight: '5px' }} />
          <a href="/WriteRetroTeamPage" style={{ color: '#111b47', textDecoration: 'none' }}>
            Personal Retro
          </a>
        </div>
        <S.DivingLine />
      </S.MiniBox>
      <S.MiniBox>
        <div style={{ padding: '2px 0' }}>
          <CaretRightFill /> <PeopleFill style={{ marginRight: '5px' }} />
          <a href="/create" style={{ color: '#111b47', textDecoration: 'none' }}>
            Team Retro
          </a>
        </div>
        <S.DivingLine />
      </S.MiniBox>
    </S.SideBarBGContainer>
  );
};

export default PageSideBar;