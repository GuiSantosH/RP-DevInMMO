import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
} from "./detailnews";

export const CardNews = ({ title, description, imgUrl, alt, key }) => {
  return (
    <CardWrapper key={key}>
      <CardImage background={imgUrl} alt={alt} key={key} />
      <CardTextWrapper key={key}>
        <CardTextTitle key={key}>{title}</CardTextTitle>
        <CardTextBody key={key}>
          {description}
        </CardTextBody>
      </CardTextWrapper>
    </CardWrapper>
  );
};
