import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const SlickSlider = styled.div`
  padding: 50px;
  .slick-dots {
    margin-top: 25px;
  }
  .slick-prev {
    left: -30px;
    border: 1px solid #ff7707;
  }
  .slick-next {
    right: -30px;
    border: 1px solid #ff7707;
  }
  .slick-arrow {
    top: 45%;
    display: none !important;
  }
  .slick-prev:hover,
  .slick-next:hover {
    box-shadow: 0 0 40px #ff7707;
  }
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 5px;
    img {
        width: 100%;
        height: 100%
    }
    ul {
        padding: 0;
    }
  }
`;
const HorizontalSlideShow = ({ item }) => {
  return (
    <SlickSlider>
      <Slider
        className="slider-home"
        centerMode={false}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        centerPadding={0}
        autoplay={true}
        dots={true}
        arrows={true}
        autoplaySpeed={15000}
      >
        {(item || []).map((value, index) => (
          <>
            <ul>
              <li>
                <img
                  className="fit"
                  key={index}
                  src={value.src}
                  alt={value.alt}
                />
                <div className="mt-30px">{value.description}</div>
              </li>
            </ul>
          </>
        ))}
      </Slider>
    </SlickSlider>
  );
};

export default HorizontalSlideShow;
