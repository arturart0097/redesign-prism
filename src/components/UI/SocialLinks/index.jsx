import "./style.css";

export const SocialLinks = ({ links, style }) => (
  <ul className="social-links" style={style}>
    {links.map(({ icon, alt, href }, idx) => (
      <li key={idx}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} />
        </a>
      </li>
    ))}
  </ul>
);
