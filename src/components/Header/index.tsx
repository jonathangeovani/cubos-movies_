import logoUrl from "../../assets/logo.svg";
import sunUrl from "../../assets/Sun.svg";
import "../base.scss";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <h1>
          <img src={logoUrl} alt="Cubos" width={160} /> Movies
        </h1>
        <button className="soft-button">
          <img src={sunUrl} alt="Dark/Light mode" />
        </button>
      </div>
    </header>
  );
};

export default Header;
