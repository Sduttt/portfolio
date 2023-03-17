import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import AchivementCard from "./AchievementCard";
import AchievementData from "./AchivementData.json";
import { GrPrevious, GrNext } from "react-icons/gr";

const Achievements = () => {
  return (
    <div className="mt-24" id="achievement">
      <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">
        ACHIVEMENTS:
      </h1>

      <div className="container mx-auto ">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={AchievementData.length}
          visibleSlides={1}
          className="relative">
          {/* TODO: Design the buttons at the disable state  */}

          <ButtonBack className="absolute left-[10px] md:left-[-80px] sm:left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-2 md:p-4 z-30">
            <GrPrevious className="sm:w-6 sm:h-6 md:w-12 md:h-12 font-black" />
          </ButtonBack>
          <Slider className="">
            {AchievementData.map((item) => (
              <Slide index={item.index} key={item.index} className=''>
                <AchivementCard
                  title={item.title}
                  img={item.img}
                  desc={item.desc}
                  date={item.date}
                  org={item.org}
                />
              </Slide>
            ))}
          </Slider>
          <ButtonNext className="absolute right-[10px] sm:right-[-20px] md:right-[-80px] top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-2 md:p-4">
            <GrNext className="sm:w-6 sm:h-6 md:w-12 md:h-12 font-bold dark:text-slate-400 " />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Achievements;
