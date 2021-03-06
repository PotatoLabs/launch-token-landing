import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Text from "views/shared/text";

const Wrapper = styled.div`
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2px;
  margin: 0 10px 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const Name = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: black;
`;

const Position = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: grey;
`;

const Graphic = styled.img.attrs({
  src: props => props.src
})`
  width: 600px;
  height: 380px;
`;

const LinkedInBadge = styled.img.attrs({
  src: IMAGES.TEAM_LINKEDIN
})`
  width: 23px;
  height: 23px;
`;

const ProfilePicture = styled.img.attrs({
  src: props => props.src
})`
  width: 180px;
  height: 220px;
  object-fit: cover;
`;

const LinkedIn = ({ href }) => (
  <a href={href} target="_blank">
    <LinkedInBadge />
  </a>
);

const MemberCard = ({ picture, name, position, linkedIn }) => (
  <Member>
    <ProfilePicture src={picture} />
    <Info>
      <Description>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Description>
      <LinkedIn href={linkedIn} />
    </Info>
  </Member>
);

const Team = () => (
  <Wrapper>
    <Title>Meet Our Team</Title>
    <Row>
      <MemberCard
        picture={IMAGES.TEAM_EDMUND}
        name={"EDMUND MAI"}
        position={"CO-FOUNDER"}
        linkedIn={"https://www.linkedin.com/in/edmundmai"}
      />
      <MemberCard
        picture={IMAGES.TEAM_AARON}
        name={"AARON VASQUEZ"}
        position={"CO-FOUNDER"}
        linkedIn={"https://www.linkedin.com/in/aaronvasquezadilla"}
      />
      <MemberCard
        picture={IMAGES.TEAM_JONATHAN}
        name={"JONATHAN TOW"}
        position={"SENIOR DEVELOPER"}
        linkedIn={"https://www.linkedin.com/in/jonathan-tow-6399691a/"}
      />
    </Row>
  </Wrapper>
);

export default Team;
