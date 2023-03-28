import SlickSlider from "react-slick";

export default function Slider({
  children,
  className,
  centerMode,
  slidesToShow,
  slidesToScroll,
  infinite,
  centerPadding,
  autoplay,
  dots,
  arrows,
  responsive,
  autoplaySpeed = 3000,
}) {
  return (
    <SlickSlider
      className={className}
      centerMode={centerMode}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      infinite={infinite}
      centerPadding={centerPadding}
      autoplay={autoplay}
      dots={dots}
      arrows={arrows}
      responsive={responsive}
      appendDots={(_dots) => <ul className="slick-dots">{_dots}</ul>}
      autoplaySpeed={autoplaySpeed}
    >
      {children}
    </SlickSlider>
  );
}
