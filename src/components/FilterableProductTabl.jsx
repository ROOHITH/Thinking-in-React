import SearchBar from "./SearchBar";
function FilterableProductTabl() {
  const style = {
    border: "1px solid grey",
  };
  return (
    <>
      <div className="FilterableProductTabl-div" style={style}>
        <h1>List</h1>
        <SearchBar />
      </div>
    </>
  );
}
export default FilterableProductTabl;
