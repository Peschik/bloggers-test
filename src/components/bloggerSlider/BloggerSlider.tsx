import { FC, useState, useEffect } from "react";
import { IBlogger } from "../../types/types";
import Slider from "react-slick";
import BloggerCard from "../bloggerCard/BloggerCard";
import "./bloggerSlider.scss";
interface SliderProps {
  bloggers: IBlogger[];
  indexActiveSlide: number;
  onActivateBlogger: (id: number) => void;
}

export const BloggerSlider: FC<SliderProps> = ({
  bloggers,
  onActivateBlogger,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    onActivateBlogger(slideIndex);
  }, [slideIndex]);

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return <div className="slider__button next" onClick={onClick} />;
  }
  function SamplePrevArrow(props: any) {
    const { onClick } = props;

    return <div className="slider__button prev" onClick={onClick} />;
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
        <Slider {...settings}>
          {bloggers.map((item: IBlogger, index: number) => {
            return (
              <div className="slider__item" key={index}>
                <BloggerCard indexActiveSlide={slideIndex + 1} blogger={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
