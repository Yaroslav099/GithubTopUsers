import React from 'react';
import styled, {css} from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 500px;
  height: 125px;
  ${props => props.marginTop && css`
    margin-top: ${props.marginTop}px;
  `}
  box-shadow: 1px 5px 15px 5px rgba(0,0,0,0.3);
  border-radius: 5px;
`;

const UserImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 80px;
  
`;

const UserImg = styled.img`
  margin-top: 10px;
  width: 60px;
  height: 60px;
  border-radius: 3px;
`;

const InfoWrap = styled.div`
   height: 60px;
   display: flex;
   flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
`;

const UserName = styled.p`
  color: blue;
  cursor: pointer;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

const UserEmail = styled.p`
  margin-left: 20px
`;

const UserLocation = styled.p`

`;

const UserStars = styled.p`
   margin: 0;
`;



export default ({avatarUrl, name, email, location, marginTop, url, stars }) => (
   <Card marginTop={marginTop}>
     <UserImgWrap>
       <UserImg src={avatarUrl} alt="Фото"/>
     </UserImgWrap>
     <InfoWrap>
       <UserName onClick={()=>window.open(url)}>{name}</UserName>
       <Wrap>
        <UserLocation>{location}</UserLocation>
        <UserEmail>{email}</UserEmail>
       </Wrap>
       <UserStars>{`stars: ${stars}`}</UserStars>
     </InfoWrap>
   </Card>
);