import "./style.css";

export const SocialLinks = ({ links, style, styleImg }) => {
  return (
    <ul className="social-links" style={style}>
      {links.map(({ icon, alt, href }) => (
        <li key={alt}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={alt} style={styleImg} />
          </a>
        </li>
      ))}
    </ul>
  );
};
