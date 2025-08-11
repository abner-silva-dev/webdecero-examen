import { useEffect } from 'react';
import { useUserStore } from '../../store/auth';
import {
  Header,
  InfoItem,
  InfoLabel,
  InfoValue,
  Main,
  ProfileStyled,
  UserEmail,
  UserImage,
  UserImageWrapper,
  UserLocation,
  UserName,
} from './styles';
import { HiOutlineMapPin } from 'react-icons/hi2';

import Row from '../../ui/Row';

const Profile = () => {
  const { user, getMe } = useUserStore((state) => state);

  // Get user data
  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <ProfileStyled>
      <Header>
        <UserImageWrapper>
          <UserImage src={user?.image} />
        </UserImageWrapper>

        <Row direction="column" gap="0.4rem" justify="center" align="center">
          <UserName>
            {user?.firstName} {user?.lastName} {user?.maidenName}
          </UserName>
          <UserEmail>{user?.email}</UserEmail>
          <UserLocation>
            <HiOutlineMapPin />
            {user?.address?.country} - {user?.address?.city}
          </UserLocation>
        </Row>

        <Row direction="row" gap="0.3rem" justify="space-between">
          <Row direction="column" gap=".1rem" align="center">
            <InfoValue>{user?.birthDate}</InfoValue>
            <InfoLabel>cumpleaños</InfoLabel>
          </Row>
          <Row direction="column" gap=".1rem" align="center">
            <InfoValue>{user?.age}</InfoValue>
            <InfoLabel>Edad</InfoLabel>
          </Row>
          <Row direction="column" gap=".1rem" align="center">
            <InfoValue>{user?.phone}</InfoValue>
            <InfoLabel>Telefono</InfoLabel>
          </Row>
        </Row>
      </Header>

      <Main>
        <Row direction="column" gap="0px">
          <InfoItem>Universidad: {user?.university}</InfoItem>
          <InfoItem>compañia: {user?.company?.name}</InfoItem>
          <InfoItem>Puesto: {user?.company?.title}</InfoItem>
        </Row>
      </Main>
    </ProfileStyled>
  );
};

export default Profile;
