import styled from 'styled-components';

export const ProfileStyled = styled.div`
  padding: 5rem;
  width: 60rem;
  margin: 10% auto;
  background-color: #fff;
  position: relative;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
`;

export const UserImageWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--secondary-color);
  box-shadow: 0 0 10px rgba(234, 77, 136, 0.9);
`;

export const UserImage = styled.img`
  color: #777;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--color-secondary);

  text-align: center;
`;

export const UserName = styled.span`
  font-weight: 800;
  font-size: 2.2rem;
  color: var(--secondary-color);
`;

export const UserEmail = styled.span`
  color: #555;
`;

export const UserLocation = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: #212529;

  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 2rem;
  }
`;

export const Main = styled.main`
  padding: 0 0 0 6rem;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.p`
  margin-bottom: 0.5rem;
  color: #444;
`;

export const InfoValue = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
`;

export const InfoLabel = styled.p`
  font-weight: 400;
  font-size: 1 0.6;
  margin: 0;
`;
