import { FC, useState, useEffect } from 'react';
import {IBlogger} from '../../types/types'
import Slider from "react-slick";
import BloggerCard from '../BloggerCard';
import './bloggerSlider.scss'

interface SliderProps {
    bloggers: IBlogger[];
    activeId: number;
    onActivateBlogger: (id: number) => void
    onChangeSlide: (moveBy: number) => void
}



export const BloggerSlider:FC<SliderProps> = ({bloggers, onActivateBlogger}) => {
    useEffect(() => {
        onActivateBlogger(slideIndex)
    })
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className='slider__button__next'
            onClick={onClick}
          />
        );
      }
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return ( 
           <div
            className='slider__button__prev'
            onClick={onClick}/>
        );
      }
      const [updateCount, setUpdateCount] = useState(0)
      const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      focusOnSelect: true,
      swipeToSlide:true,
      afterChange: () => setUpdateCount(updateCount + 1),
      beforeChange: (current, next) => setSlideIndex(next)
    };
    return (
      <div className="slider__wrapper">
        <div className="slider__inner">
            <Slider
                {...settings}
            >
                {bloggers.map((item: IBlogger, index: number) => {
                    return (
                        <div className="slider__item" key={index}>
                            <BloggerCard
                            activeId={slideIndex + 1}
                            blogger={item}
                             />
                        </div>
                    )
                })}
                </Slider>
                </div>
            </div>
    );
  }
