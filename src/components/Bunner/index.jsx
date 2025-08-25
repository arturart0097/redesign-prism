import video from "@/assets/videos/anim.mp4";
import integrate1 from "@/assets/icons/integrate1.svg";
import integrate2 from "@/assets/icons/integrate2.svg";
import integrate3 from "@/assets/icons/integrate3.svg";

import "./style.css";

export const Bunner = () => {
  return (
    <div className="bunner_wrapper">
      <h1>
        AI x GAMING <br /> IS THE FUTURE
      </h1>

      <div className="video-wrapper">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{ borderRadius: "12px" }}
          className="bunner-video"
        />

        <h2>WELCOME TO THE EVOLUTION</h2>
        <p>
          PRISM is the next evolution in blockchain gaming platforms. With{" "}
          <br /> our suite of on-chain gaming tools & experiences, being a gamer{" "}
          <br /> or game developer has never been easier.
        </p>
      </div>
      <div className="integrates">
        <img src={integrate1} alt="" />
        <img src={integrate2} alt="" />
        <img src={integrate3} alt="" />
      </div>
    </div>
  );
};
