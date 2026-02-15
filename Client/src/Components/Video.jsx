import BackgroundVideo from "../assets/Video/Bg.mp4";

const Video = () => {
  return (
    <div className=" w-full h-[60vh] ">
      <video
        className="w-full h-screen object-cover absolute"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
