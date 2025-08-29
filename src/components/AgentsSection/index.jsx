import active from "@/assets/icons/active.svg";
import talk from "@/assets/icons/talk.svg";
import create from "@/assets/icons/create.svg";
import agentsSection from "@/assets/images/bg55.png";

import "./style.css";
import { useMobile } from "@/hooks/useMobile";

export const AgentsSection = () => {
  const { isMobile } = useMobile();

  return (
    <>
      <div className="agent_wrapper">
        {isMobile && (
          <div className="agent-image">
            <img src={agentsSection} alt="" />
            <div
              className="blur-row"
              style={{
                position: "relative",
                top: -30,
                height: 60,
              }}
            />
          </div>
        )}
        <div className="agent-text">
          <div>
            <img src={active} alt="" />
            <p>
              <span> Activate & Train </span> — Turn your NFT into an
              <span> Agent</span> and teach it in the <span> Arcade</span>.
            </p>
          </div>
          <div>
            <img src={talk} alt="" />
            <p>
              <span>Talk & Assist</span> — Chat by text or voice; ask about
              news, token prices, and game updates.
            </p>
          </div>
          <div>
            <img src={create} alt="" />
            <p>
              <span>Create & Integrate</span> — Generate images directly inside
              your Discord.
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className="agent-image">
            <img src={agentsSection} alt="" />
            <div
              className="blur-row"
              style={{
                position: "relative",
                top: -30,
                height: 60,
              }}
            />
          </div>
        )}
      </div>
      <hr />
    </>
  );
};
