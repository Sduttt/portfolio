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


const Achievements = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">
        ACHIVEMENTS:
      </h1>

      <div className="container mx-auto">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}>
          <Slider>
            {AchievementData.map((item) => 
              <Slide index={item.index}>
                <AchivementCard title={item.title} img={item.img} desc={item.desc} />
              </Slide>
            )}
            {/* <Slide index={0}><AchivementCard /> </Slide>
            <Slide index={1}><AchivementCard /></Slide>
            <Slide index={2}><AchivementCard /></Slide> */}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </ div>
  );
};

export default Achievements;
