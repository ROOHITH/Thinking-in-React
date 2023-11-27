function SearchBar(props) {
  const style = {
    border: " 1px solid lavender",
  };

  return (
    <>
      <div style={style} className="SearchBar-div">
        <div className="conatiner">
          <input
            type="text"
            name="SearchBar-input"
            id="SearchBar-input"
            className="SearchBar-input"
            onChange={(e)=>{
             props.setSearchValue(e.target.value);
             
            }}
          />
          <br></br>
          <input
            onClick={() => {
              if (props.inStock) {
                props.setStock(false);
                alert("Product is now out of stock");
              } else {
                props.setStock(true);
                alert("Product is now in stock");
              }
            }}
            type="checkbox"
            name="SearchBar-check"
            id="SearchBar-check"
            className="SearchBar-check"
          ></input>
          <span
            name="SearchBar-text1"
            id="SearchBar-text1"
            className="SearchBar-text1"
          >
            Only show products in stock
          </span>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
