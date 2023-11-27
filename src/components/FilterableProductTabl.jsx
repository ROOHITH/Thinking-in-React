import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from './ProductTable';


function FilterableProductTabl(product) {

const [inStock,setStock]=useState(false);
const [searchValue,setSearchValue]=useState('');
  const style = {
    border: "1px solid grey",
  };
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
 

 // console.log(groupedProducts);
  return (
    <>
      <div className="FilterableProductTabl-div" style={style}>
        <h1>List</h1>
        <SearchBar setStock={setStock} inStock={inStock} searchValue={searchValue}setSearchValue={setSearchValue}/>
        <ProductTable productArray={PRODUCTS} setStock={setStock} inStock={inStock}searchValue={searchValue}setSearchValue={setSearchValue}/>
      </div>
    </>
  );
}
export default FilterableProductTabl;
