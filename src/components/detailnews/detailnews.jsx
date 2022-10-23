
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flexbox;
  background: #CCC;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 10px 270px;
`;

export const CardImage = styled.div`
  grid-area: image;
  height: 200px;
  width: 300px;
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.0;
  margin: 0px;
  font-size: 20px;
  width: 600px;
  height: 50px;
  color: black;
`;

export const CardTextBody = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 300px;
  /* border: 2px solid black; */
  width: 600px;
`;

