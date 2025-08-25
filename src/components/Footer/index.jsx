import logo2 from "../../assets/images/logoPrism.gif";

import "./style.css";

export const Footer = () => {
  return (
    <footer>
      <img src={logo2} alt="logo" />
      <div className="footer-links">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Discord</a>
        <a href="#">Support</a>
        <a href="#">Careersp</a>
      </div>
      <div className="text">
        © 2024 Prism is not endorsed by Riot Games, nor does it reflect the
        views or opinions of Riot Games or anyone officially involved in League
        of Legends’ production and/or management. League of Legends and Riot
        Games are trademarks or registered trademarks of Riot Games, Inc. League
        of Legends © Riot Games, Inc.
      </div>
    </footer>
  );
};
