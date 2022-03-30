import { FC, useState, useRef, MouseEventHandler} from "react";
import "./slider.scss";
import { toLeft, toRight } from "..";
import { bloggersList } from "..";
import BloggerCard from "../BloggerCard";
import {IBlogger} from '../../types/types'

interface SliderProps {
  bloggers: IBlogger[];
  activeBlogger: number;
  onActivateBlogger: (id: number) => void
}

const Slider:FC<SliderProps> = ({bloggers, activeBlogger, onActivateBlogger}) => {

    let position = 0;
    const slider = useRef<HTMLDivElement>(null)
    const prevHandler = () => {
          if (slider && slider.current) {
            if (position < 0) {
              position += 330;
              const sliderItems = document.querySelectorAll<HTMLDivElement>('.slider__item')
              sliderItems.forEach((item) => {
                item.setAttribute('style', `transform: translateX(${position}px)`)
            })
            }
          }
    }
    const nextHandler = () => {
      if (slider && slider.current) {
        if (position > -1660) {
          position -= 330;
              const sliderItems = document.querySelectorAll<HTMLDivElement>('.slider__item')
              sliderItems.forEach((item) => {
                item.setAttribute('style', `transform: translateX(${position}px)`)
            })
          }
        }
      }
  return (
    <>
      <div className="btn-group">
        <img onClick={prevHandler} src={toLeft} alt="to previous blogger" />
        <img onClick={nextHandler}src={toRight} alt="to next blogger" />
        
      </div>
      <div className="container">
        <div className="slider">
            <div className="slider__track" 
              ref={slider}
              >
                {bloggers.map((item: IBlogger, index: number) => {
                    return (
                        <div className="slider__item" key={index}>
                            <BloggerCard
                            activeBlogger={activeBlogger}
                            blogger={item}
                            onActivateBlogger={onActivateBlogger} />
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
