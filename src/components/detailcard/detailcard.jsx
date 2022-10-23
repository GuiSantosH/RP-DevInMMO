
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  background: #CCC;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 5px 395px;
  max-width: 800px;
`;

export const CardImage = styled.img`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 500px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 2px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 300px;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const TitleDesc = styled.div`
  margin: 4px 0px 0px;
  font-size: large;
  color: black;
  font-weight: bold;
`