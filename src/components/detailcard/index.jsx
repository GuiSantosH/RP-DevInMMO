import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody

} from "./detailcard";

export const CardDetail = ({title, releasedate ,thumbnail, description, alt, key }) => {
  return (
    <CardWrapper key={key}>
    <CardTextWrapper key={key}>
      <CardTextTitle key={key}>{title}<br></br>{releasedate}
      </CardTextTitle>
      <CardImage src={thumbnail} alt={alt} key={key} >
      </CardImage>
      <CardTextBody key={key}>
        {description}
      </CardTextBody>
    </CardTextWrapper>
  </CardWrapper>
  );
};
