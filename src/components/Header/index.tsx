import logoUrl from "../../assets/logo.svg";
import sunUrl from "../../assets/Sun.svg";
import "../base.scss";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logoUrl} alt="Cubos" width={160} />
      </h1>
      <button className="soft-button">
        <img src={sunUrl} alt="Dark/Light mode" />
      </button>
    </header>
  );
};

export default Header;
