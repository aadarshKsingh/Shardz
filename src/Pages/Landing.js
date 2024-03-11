import { React, useRef, useState } from "react";
import { Navbar, Button, Footer } from "flowbite-react";
import logo from "../Assets/logo.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
export const Landing = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://github.com/aadarshKsingh/shardz">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Shardz" />
        </Navbar.Brand>
        <div className="flex md:order-2 align-middle flex-row space-x-6">
          <p className="pt-2" onClick={() => navigate("/about")}>
            About
          </p>
          <Button
            color="blue"
            onClick={() => navigate("/login")}
            className="bg-[#5793FB]"
          >
            Login
          </Button>
          <Button
            color="blue"
            onClick={() => navigate("/register")}
            className="bg-[#5793FB]"
          >
            Getting Started
          </Button>
        </div>
      </Navbar>

      <div className="flex lg:flex-row flex-col lg:text-6xl text-3xl lg:px-24 px-6 lg:pt-40 lg:pb-52 pt-10 pb-36 lg:space-x-10 space-x-1">
        <div className="flex flex-col leading-snug">
          <span className="font-thin">Escape the Cloud Maze</span>
          <strong>
            <span className="text-[#5793FB]">Shardz</span> - Your Unified
            Storage
            <br /> Command Center
          </strong>
          <div className="font-thin lg:pr-0 pr-10 lg:text-3xl text-xl pt-5 pb-4 leading-normal whitespace-pre-line">
            Stop worrying about storage! Shardz brings you the unified cloud
            storage solution to store your files seamlessly.
          </div>
          <div>
            <Button
              className="inline-block mx-2 bg-[#5793FB]  lg:m-0 mb-10"
              onClick={() => navigate("/register")}
            >
              <span className="lg:text-2xl text-sm">Getting Started</span>
              <FaArrowCircleRight className="lg:text-4xl text-md lg:h-10 h-3 w-10 pl-4" />
            </Button>
          </div>
        </div>
        <div
          className="border rounded-lg overflow-hidden relative lg:w-2/3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            width="800"
            height="600"
            poster="https://i.ibb.co/NF8Sf7m/poster.jpg"
            ref={videoRef}
          >
            <source
              src="https://github.com/aadarshKsingh/Shardz/assets/47781114/01bcc80e-ed58-48f6-9f6a-31d5b0e962ac"
              type="video/mp4"
            />
          </video>
          {showControls && (
            <button
              className="absolute text-2xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-4 py-2 rounded-md"
              onClick={handlePlay}
            >
              {isPlaying ? <CiPause1 /> : <CiPlay1 />}
            </button>
          )}
        </div>
      </div>
      <footer>
        <Footer container className="shadow-none">
          <Footer.LinkGroup>
            <Footer.Link><p onClick={()=>navigate("/privacy-policy")}>Privacy Policy</p></Footer.Link>
            <Footer.Link><p onClick={()=>navigate("/terms-of-service")}>Terms of Service</p></Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </footer>
    </>
  );
};
