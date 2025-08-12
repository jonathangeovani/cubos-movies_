import Input from "../Input";
import SecondaryButton from "../SecondaryButton";
import SearchUrl from "../../assets/search.svg";
import filterUrl from "../../assets/filter.svg";
import "./styles.scss";
import { debounce } from "../../utils/debounce";

const SearchBarContainer = () => {
  const onChange = debounce((e) => {
    console.log(e.target.value);
  }, 750);
  return (
    <div className="search-bar-container">
      <Input
        id="search-input"
        name="q"
        placeholder="Pesquise por filmes"
        img={SearchUrl}
        imgAlt="Pesquisar"
        onChange={onChange}
      />
      <SecondaryButton
        content={filterUrl}
        imgAlt="Filtros"
        style={{ padding: 0, minWidth: "55px", height: "56px" }}
      />
    </div>
  );
};

export default SearchBarContainer;
