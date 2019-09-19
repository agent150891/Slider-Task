import React, {useState} from 'react';
import Slider from "./components/Slider/Slider";
import Cards from "./components/Cards/Cards";
import styled from "styled-components";

const dummyCard = {
    description: "Lorem ipsum dolor sit amet, consectetur iusto adipisicing elit. Aliquamam atque consequuntur delectus dolor esse, ipsam iusto officiis possimus ut.",
    userName: "userName",
    rate: "5.0",
    rateCount: "260",
    isLiked: true,
    price: "500"
};

const dummyCards = [];

for (let i = 0; i < 10; i++) {
    dummyCards.push(dummyCard)
}

function App() {
    const [cards] = useState(dummyCards);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div style={{height: "100vh", paddingTop: "25px", backgroundColor: "lightgray"}}>
            <CardsWrapper>
                <Cards cards={cards} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
            </CardsWrapper>

            <SliderWrapper>
                <Slider cards={cards}/>
            </SliderWrapper>
        </div>
    );
}


const CardsWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  
  @media (max-width: 576px) {
    height: 100vh;
  }
`;

const SliderWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default App;
