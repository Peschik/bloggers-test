import { FC, useState, useEffect, useRef } from "react";
import { IBlogger } from "../../types/types";
import Slider from "react-slick";
import BloggerCard from "../bloggerCard/BloggerCard";
import "./bloggerSlider.scss";

interface SliderProps {
  bloggers: IBlogger[];
  activeId: number;
  onActivateBlogger: (id: number) => void;
}

export const BloggerSlider: FC<SliderProps> = ({
  bloggers,
  onActivateBlogger,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<any>();

  useEffect(() => {
    onActivateBlogger(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      if (sliderRef.current.state.breakpoint === 576) {
        sliderRef.current.slickGoTo(-1);
      }
    }
  }, [bloggers]);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return <div className="slider__button__next" onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div className="slider__button__prev" onClick={onClick} />;
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      setSlideIndex(next);
    },
  };
  return (
    <div className="slider__wrapper">
      <div className="slider__inner">
        <Slider ref={sliderRef} {...settings}>
          {bloggers.map((item: IBlogger, index: number) => {
            return (
              <div className="slider__item" key={index}>
                <BloggerCard activeId={slideIndex + 1} blogger={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
