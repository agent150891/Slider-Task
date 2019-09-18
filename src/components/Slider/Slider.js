import React, {useEffect, useRef, useState} from 'react';
import {Carousel, Icon} from "antd";
import Slide from "./Slide/Slide";
import styled from "styled-components";
import {calculateCardsPerSlide} from "../../helpers";


const Slider = ({cards}) => {
    const [cardsPerSlide, setCardsPerSlide] = useState(5);
    const [tempCardsPerSlide, setTempCardsPerSlide] = useState(5);
    const [slide, setSlide] = useState([]);

    const carousel = useRef();

    useEffect(() => {
        window.addEventListener("resize", onResize);

        const cardsPerSlide = calculateCardsPerSlide(window.innerWidth);

        const slicedCards = [];
        for (let i = 0; i < cards.length; i += cardsPerSlide) {
            const tempArr = [];
            for (let j = i; j < i + cardsPerSlide; j++) {
                tempArr.push(cards[j])
            }
            slicedCards.push(tempArr)
        }

        setSlide(slicedCards);
        setCardsPerSlide(tempCardsPerSlide);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, []);


    const onResize = () => {
        const calculatedValue = calculateCardsPerSlide(window.innerWidth);

        if (calculatedValue === 5 && tempCardsPerSlide !== 5) {
            setTempCardsPerSlide(5);
        } else if (calculatedValue !== cardsPerSlide) {
            setTempCardsPerSlide(calculatedValue);
        }
    };


    if (cardsPerSlide !== tempCardsPerSlide) {
        const slicedCards = [];
        for (let i = 0; i < cards.length; i += tempCardsPerSlide) {
            const tempArr = [];
            for (let j = i; j < i + tempCardsPerSlide; j++) {
                tempArr.push(cards[j])
            }
            slicedCards.push(tempArr)
        }

        setSlide(slicedCards);
        setCardsPerSlide(tempCardsPerSlide)
    }


    return (
        <Wrapper>
            <PrevArrow onClick={() => carousel.current.prev()}>
                <Icon type="left" style={{fontSize: "35px"}}/>
            </PrevArrow>
            <Carousel ref={ref => carousel.current = ref}>
                {slide.length ? slide.map((cards, index) => {
                    return <Slide key={index} cards={cards}/>
                }) : null
                }
            </Carousel>

            <NextArrow onClick={() => carousel.current.next()}>
                <Icon type="right" style={{fontSize: "35px"}}/>
            </NextArrow>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  max-width: 1240px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  bottom: 0;
`;

const PrevArrow = styled.div`
  top: calc(50% - 35px);
  position: absolute;
  height: 35px;
  width: 35px;
  z-index: 999;
`;

const NextArrow = styled.div`
  top: calc(50% - 35px);
  right: 0;
  position: absolute;
  height: 35px;
  width: 35px;
    z-index: 999;
`;


export default Slider;
