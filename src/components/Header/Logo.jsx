import logo from "../../assets/images/logoPrism.gif";

export default function Logo({ onClick }) {
  return <img src={logo} alt="Prism" onClick={onClick} />;
}
