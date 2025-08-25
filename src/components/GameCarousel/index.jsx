import "./style.css";
import cubeImg from "@/assets/images/cube.png";
import guardImg from "@/assets/images/guard.png";
import codImg from "@/assets/images/cod.png";
import thumbImg from "@/assets/images/thumb.png";

const games = [
  { id: 1, title: "Cubes", img: cubeImg },
  { id: 2, title: "Guard Invaders", img: guardImg },
  { id: 3, title: "CODOX Cure", img: codImg },
  { id: 4, title: "Code Link", img: thumbImg },
];

export default function GameCarousel() {
  const handlePlayClick = (gameTitle) => {
    console.log(`Playing ${gameTitle}`);
  };

  return (
    <section className="games" aria-label="Game carousel">
      <div className="games__viewport">
        <div className="games__rail" role="list">
          {games.map((g) => (
            <article
              key={g.id}
              className="game-card"
              role="listitem"
              aria-label={g.title}
            >
              <img src={g.img} alt={g.title} className="game-card__img" />
              <div className="game-card__overlay" />
              <button
                className="game-card__btn"
                aria-label={`Play ${g.title}`}
                onClick={() => handlePlayClick(g.title)}
              >
                PLAY
              </button>
            </article>
          ))}
        </div>
        <div className="games__glow" />
      </div>
    </section>
  );
}
