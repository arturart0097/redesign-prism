export default function Burger({ open, onClick }) {
  return (
    <button
      className="header__burger"
      aria-label="Toggle menu"
      aria-expanded={open}
      aria-controls="primary-nav"
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
} 