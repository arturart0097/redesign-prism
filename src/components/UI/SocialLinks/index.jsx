import "./style.css";

export const SocialLinks = ({ links }) => (
  <ul className="social-links">
    {links.map(({ icon, alt, href }, idx) => (
      <li key={idx}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} />
        </a>
      </li>
    ))}
  </ul>
); 