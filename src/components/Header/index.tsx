import logoUrl from "../../assets/logo.svg";
import sunUrl from "../../assets/Sun.svg";
import SecondaryButton from "../SecondaryButton";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <h1>
          <img src={logoUrl} alt="Cubos" width={160} /> Movies
        </h1>
        <SecondaryButton
          content={sunUrl}
          imgAlt="Dark/Light mode"
          style={{ width: 64, height: 48 }}
        />
      </div>
    </header>
  );
};

export default Header;
