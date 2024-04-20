import { PersonCircle } from 'react-bootstrap-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import PageSideBar from './PageSideBar';
import UserNickname from '@/components/user/UserNickname';
import { useAuth } from '@/hooks/useAuth';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
  const { isLoggedIn, handleLoginOrLogout } = useAuth();
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const navigateToMyPage = () => {
    navigate('/my');
  };

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <>
      <div style={{ backgroundColor: 'white', zIndex: 1, borderBottom: '1px solid rgba(184, 184, 184, 0.5)' }}>
        <S.Container>
          <Button colorScheme="brand" onClick={onOpen} margin="0 10px">
            <GiHamburgerMenu />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <PageSideBar />
            </DrawerContent>
          </Drawer>
          <MenuBar />
          <LogoBox />

          <S.RightBox>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <S.IconStyle border-radius="10px">
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignContent: 'center',
                    margin: '2px',
                    cursor: 'pointer',
                  }}
                  onClick={navigateToMyPage}
                >
                  <PersonCircle style={{ width: '30px', margin: 'auto 3px' }} />

                  <p style={{ margin: 'auto 10px' }}>
                    <UserNickname setUserNickname={setUserNickname} />
                    {userNickname}
                  </p>
                </div>
              </S.IconStyle>

              <Button style={{ marginRight: '0.3rem' }} variant="ghost" onClick={handleLoginOrLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
              <S.GetStaredButton onClick={navigateToCreate}>Get Started for Free</S.GetStaredButton>
            </div>
          </S.RightBox>
        </S.Container>
      </div>
    </>
  );
};

export default MainNavBar;
