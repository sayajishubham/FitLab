import BackgroundVideo from "../Components/Video";
import Content from "../Components/Content";
import JoinNow from "./JoinNow";
import About from "./About";

const Hero = () => {
  return (
    <section className="w-full h-full relative overflow-y-hidden">
      {/* <NavBar /> */}
      <div className="absolute top-0 left-0 w-full h-full" id="Home">
        <BackgroundVideo />
      </div>
      <div className=" relative ">
        <Content />
      </div>
      <JoinNow />
      <div id="about">
        <About />
      </div>
    </section>
  );
};

export default Hero;
