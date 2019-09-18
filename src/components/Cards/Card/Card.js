import React from 'react';
import styled from "styled-components";
import {Icon} from "antd";

const Card = ({card}) => {

    if (card) {

        return (
            <Wrapper>
                <Image src="https://source.unsplash.com/random" alt=""/>

                <Typography>
                    <Description onClick={() => alert("Click on description")}>{card.description}</Description>
                    <RowWrapper>
                        <Circle/>
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
  padding-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.p`
  margin-top: 7px;
  color: gray;
  cursor:pointer;
  line-height: 17px;
  margin-bottom: 0;
  overflow: hidden;
  position: relative;
  height: 50px;
  
  &::after {
      background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 57%, rgba(255,255,255,1) 68%, rgba(255,255,255,1) 99%);
      background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 57%,rgba(255,255,255,1) 68%,rgba(255,255,255,1) 99%);
      background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 57%,rgba(255,255,255,1) 68%,rgba(255,255,255,1) 99%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 );
      height: 15px;
      width: 60px;
      position: absolute;
      bottom: 0;
      right: 0;
      content: '';
  }
`;

const RowWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:last-child {
    margin-top: -10px;
  }
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: lightgray;
  border-radius: 100px;
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
  margin-left: -20px;
  cursor:pointer;
`;

const Rate = styled.p`
    margin-bottom: 0;
`;

const Price = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 0;
`;


export default Card;
