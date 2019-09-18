import React from 'react';
import styled from "styled-components";
import {Icon} from "antd";

const Card = ({card}) => {

    let trimmedDescription = null;

    if (card) {
        trimmedDescription = card.description.split(/( )/).slice(0, 18);

        return (
            <Wrapper>
                <Image src="https://source.unsplash.com/random" alt=""/>

                <Typography>
                    <Description onClick={() => alert("Click on description")}>{trimmedDescription}</Description>
                    <RowWrapper>
                        <UserName onClick={() => alert("Click on User Name")}>{card.userName}</UserName>
                        <Rate>
                            <Icon
                                type="star"
                                theme="filled"
                                style={{color: "gold"}}
                                onClick={() => alert("Click on Rating")}
                            />
                            <span style={{color: "gold"}}>{card.rate}</span>{" "}
                            <span color={{color: "gray"}}>({card.rateCount})</span>
                        </Rate>
                    </RowWrapper>
                    <Delimiter/>
                    <RowWrapper>
                        <Icon
                            type="heart"
                            theme="filled"
                            style={{color: "gray", cursor: "pointer"}}
                            onClick={() => alert("Click on Like")}
                        />
                        <Price>от {card.price} &#8381;</Price>
                    </RowWrapper>
                </Typography>
            </Wrapper>
        );
    } else {
        return null
    }
};

const Wrapper = styled.div`
  width: 200px;
  height: 250px;
  margin-bottom: 20px;
  background-color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 125px;
`;

const Typography = styled.div`
  height: 125px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.p`
  margin-top: 10px;
  color: gray;
  cursor:pointer;
`;

const RowWrapper = styled.p`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

const Delimiter = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #000;
  content: "";
  margin-top: -7px;
  margin-bottom: 7px;
`;

const UserName = styled.p`
  font-weight: bold;
  color: gray;
    margin-bottom: 0;
      cursor:pointer;
`;

const Rate = styled.p`
    margin-bottom: 0;
`;

const Price = styled.p`
  color: green;
  font-weight: bold;
`;


export default Card;
