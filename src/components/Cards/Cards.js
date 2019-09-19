import React from 'react';
import styled from "styled-components";
import Card from "./Card/Card";

const Cards = ({cards, selectedCard, setSelectedCard}) => {
    return (
        <Wrapper>
            {cards.length ? cards.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    card={card}
                />
            )) : null
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
  padding-left: 43px;
  padding-right: 27px;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center; 
  overflow-y: auto;
  
    @media (max-width: 576px) {
    height: 100vh;
    flex-direction: column;
    justify-content: start;
    flex-wrap: nowrap;
  }
`;


export default Cards;
