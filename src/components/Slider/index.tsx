import { useState } from "react";
import cn from "classnames";
import { SliderProps } from "./slider.props";
import s from "./slider.module.css";
import { ReactComponent as Arrow } from "./arrow.svg";

const FADE_DURATION = 300;

export const Slider = ({ reviews }: SliderProps) => {
  const [slide, setSlide] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

  const handlerClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((s) => s + move);
      setFadeState("fade-in");
    }, FADE_DURATION);
    clearTimeout(currentTimer);
    setFadeState("fade-out");
    setCurrentTimer(timer);
  };

  return (
    <div className={s.slider}>
      <div
        className={cn(s.slide, s[fadeState])}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
      >
        <div className={s.left}>
          <div className={s.text}>{reviews[slide].text}</div>
          <div className={s.name}>{reviews[slide].name}</div>
          <div className={s.jobPosition}>{reviews[slide].jobPosition}</div>
        </div>
        <div
          className={s.right}
          style={{ backgroundImage: `url(${reviews[slide].image})` }}
        ></div>
      </div>
      {slide > 0 && (
        <button
          className={cn(s.arrow, s.arrowLeft)}
          onClick={() => handlerClick(-1)}
        >
          <Arrow />
        </button>
      )}
      {slide < reviews.length - 1 && (
        <button
          className={cn(s.arrow, s.arrowRight)}
          onClick={() => handlerClick(1)}
        >
          <Arrow />
        </button>
      )}
    </div>
  );
};
