import styled from "styled-components";
import IMAGES from "assets/images";

const Slanted = styled.div`
  height: ${props =>
    props.long ? "1000px" : props.medium ? "800px" : "600px"};
  margin-top: ${props =>
    props.long ? "-100px" : props.medium ? "-81px" : "-50px"};
  background: ${props => (props.colored ? "#EFF5F8" : "white")};
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  display: flex;
  align-items: center;
`;

export default Slanted;
