import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
} from "./card";

export const Card = ({ title, description, imgUrl, alt, key, details }) => {
  return (
    <CardWrapper key={key}>
      <CardImage background={imgUrl} alt={alt} key={key} />
      <CardTextWrapper key={key}>
        <CardTextTitle key={key}>{title}</CardTextTitle>
        <CardTextBody key={key}>
          {description}{details}
        </CardTextBody>
      </CardTextWrapper>
    </CardWrapper>
  );
};
