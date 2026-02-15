import React from "react";
import Slider from "./Slider";

const About = () => {
  return (
    <div className=" h-screen  flex items-center  ">
      <div className="w-full flex justify-around ">
        <div className="w-[30%]   ">
          <div className="w-[20%] h-32   ">
            <h1 className="text-5xl uppercase text-yellow-400">About Fitlab</h1>
          </div>
          <p className="text-2xl text-gray-300  ">
            “FitLab is an all-in-one fitness platform designed to help you
            achieve your health goals effortlessly
          </p>
          <p className="text-2xl text-gray-300">
            {" "}
            From personalized workout plans to customizable diet sections{" "}
          </p>
          <p className="text-2xl text-gray-300">
            {" "}
            FitLab gives you the tools to track your progress and stay
            consistent{" "}
          </p>
          <p className="text-2xl text-gray-300">
            {" "}
            Whether you are a beginner or an experienced fitness enthusiast, our
            intuitive dashboard makes managing your workouts, meals, and overall
            progress simple and engaging. Join thousands of users transforming
            their lives, one workout and meal at a time.{" "}
          </p>
        </div>
        <div className="w-1/4  ">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default About;
