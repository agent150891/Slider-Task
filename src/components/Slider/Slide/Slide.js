import React from 'react';
import Card from "../../Cards/Card/Card";
import styled from "styled-components";

const Slide = ({cards}) => {
    return (
        <Wrapper>
            {cards.length ? cards.map((card, index) => <Card key={index} card={card}/>)
                : null
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;


export default Slide;
