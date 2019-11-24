import React from 'react';
import styled from 'styled-components';

const CardWithBg: any = styled.div`
  background-image: url("${(props: any) => props.src}");
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  .title, .price, .date {
    padding: 0.5rem;
  };
  .price {
    position: absolute;
    top: 70%;
  }
  .date {
    padding: 0.5rem;
    position: absolute;
    top: 80%;
  }
`;

interface EventCardProps {
  title: string;
  price: string;
  date: Date;
  imgSrc: string;
}

export const EventCard: any = (props: EventCardProps) => {
  const { title, price, date, imgSrc } = props;

  return (
    <CardWithBg src={imgSrc}>
      <h4 className="title">{title}</h4>
      <h5 className="price">{price}</h5>
      <h5 className="date">{date}</h5>
    </CardWithBg>
  );
};
