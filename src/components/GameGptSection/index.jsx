import gameGptLogo from "@/assets/images/gameLogo.png";

import "./style.css";

export const GameGptSection = () => {
  return (
    <div className="gameGptSection-wrapper">
      <div className="gameGptSection-logo">
        <img src={gameGptLogo} />
        <h2>Gamegpt</h2>
      </div>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: 20,
          height: 100,
        }}
      />
      <div className="gameBuilder-section">
        <h3>AI-Driven Game Builder</h3>
        <p>Create your game with the input of a few simple prompts</p>
        <div className="gameCard-wrapper">
          <div>
            🎮 Powering the next 10,000 Blockchain Games with one token $DUEL
          </div>
          <div>🧠 Game AI Engine that will change Gamefi as we know it</div>
          <div>
            🚀 Use AI to generate game assets and synthesize into Unity / Unreal
            Engine
          </div>
        </div>
        <button>Discover the power of $DUEL token</button>
      </div>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: -30,
          height: 40,
        }}
      />
    </div>
  );
};
