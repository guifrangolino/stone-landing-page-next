'use client'

import { MouseEvent, useState } from 'react'
import { ArrowLeft } from './Icons/ArrowLeft'
import { ArrowRight2 } from './Icons/ArrowRight2'
import { ThumbsUp } from './Icons/ThumbsUp'
import { TestimonialMaquinaDeCartaoSlider } from './TestimonialMaquinaDeCartaoSlider'
import { useKeenSlider } from 'keen-slider/react'

const slidesOptionsFullWidth = [
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
  },
  {
    spacing: 0.04,
    size: 0.85,
    origin: 0.15,
  },
]

export function TestimonialMaquinaDeCartao() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [maxSlideLength, setMaxSlideLength] = useState(6)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: () => slidesOptionsFullWidth,
    slideChanged(slider) {
      maxSlideLength !== slider.track.details.maxIdx &&
        setMaxSlideLength(slider.track.details.maxIdx)
      setCurrentSlide(slider.track.details.rel)
    },
    created: () => {
      console.log('created')
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 768px)': {
        slides: () => slidesOptionsFullWidth,
      },
      '(min-width: 1025px)': {
        slides: {
          perView: 2,
          spacing: 40,
        },
      },
    },
  })

  function handlePrevButtonClick(e: MouseEvent<HTMLButtonElement>) {
    // @ts-ignore
    e.stopPropagation() || instanceRef.current?.prev()
  }

  function handleNextButtonClick(e: MouseEvent<HTMLButtonElement>) {
    // @ts-ignore
    e.stopPropagation() || instanceRef.current?.next()
  }

  return (
    <div className="p-4 py-10 md:pl-6 md:pr-0 lg:py-20">
      <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[1060px] md:flex-row md:gap-6 lg:gap-10">
        <div className="flex w-full flex-col justify-center gap-4 md:min-w-[290px] md:max-w-[290px] md:gap-6">
          <div className="px-4 md:px-0 ">
            <ThumbsUp />
            <h4 className="mt-4 font-sharon-display text-2xl font-bold leading-8 text-color-dark-gray md:max-w-[286px] lg:text-[1.75rem] lg:leading-9">
              O cliente tem sempre razão, né? Olha o que os nossos dizem:
            </h4>
          </div>
          <div className="ml-auto hidden gap-3 md:flex">
            <button
              className={`flex h-10 w-10 ${
                currentSlide === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
              } items-center`}
              onClick={(e) => handlePrevButtonClick(e)}
            >
              <ArrowLeft disabled={currentSlide === 0} />
            </button>
            <button
              className={`flex h-10 w-10 ${
                currentSlide === maxSlideLength
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              } items-center`}
              onClick={(e) => handleNextButtonClick(e)}
            >
              <ArrowRight2 disabled={currentSlide === maxSlideLength} />
            </button>
          </div>
        </div>
        <TestimonialMaquinaDeCartaoSlider sliderRef={sliderRef} />
        <div className="flex justify-center gap-3 md:hidden">
          <button
            className={`flex h-10 w-10 ${
              currentSlide === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
            } items-center`}
            onClick={(e) => handlePrevButtonClick(e)}
          >
            <ArrowLeft disabled={currentSlide === 0} />
          </button>
          <button
            className={`flex h-10 w-10 ${
              currentSlide === maxSlideLength
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            } items-center`}
            onClick={(e) => handleNextButtonClick(e)}
          >
            <ArrowRight2 disabled={currentSlide === maxSlideLength} />
          </button>
        </div>
      </div>
    </div>
  )
}
