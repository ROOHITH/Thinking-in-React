import SearchBar from "./SearchBar";
import ProductTable from './ProductTable';
function FilterableProductTabl() {
  const style = {
    border: "1px solid grey",
  };
  return (
    <>
      <div className="FilterableProductTabl-div" style={style}>
        <h1>List</h1>
        <SearchBar />
        <ProductTable/>
      </div>
    </>
  );
}
export default FilterableProductTabl;
