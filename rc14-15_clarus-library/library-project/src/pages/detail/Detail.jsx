import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImage from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();

  console.log(id);
  console.log(state);

  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg
        src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImage}
        alt={state.volumeInfo.title}
      />
      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        <p>
          {state.volumeInfo.authors?.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {state.volumeInfo.publishedDate} / {state.volumeInfo.publisher}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
