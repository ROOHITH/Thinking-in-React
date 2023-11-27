import { useState } from "react";
import "./ProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ productArray, setStock, inStock, searchValue, setSearchValue }) {
  const style = {
    border: " 1px solid lavender",
  };
  const instockStyle = {
    color: "red",
    textAlign: "center",
  };

  // Group objects by category
  const groupedProducts = productArray.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <div style={style} className="ProductTable-div">
        <h3>
          <span className="span1">Name</span> <span>Price</span>
        </h3>
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category}>
            <ProductCategoryRow category={category} />

            <table>
              <tbody>
                {products.map((product, index) => {
                  const isInSearch = product.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                  const isStocked = product.stocked;

                  if ((!inStock || (inStock && isStocked)) && isInSearch) {
                    return (
                      <tr key={index}>
                        <td
                          style={
                            isStocked === false
                              ? instockStyle
                              : { textAlign: "center" }
                          }
                        >
                          {product.name}
                        </td>
                        <td
                          style={
                            isStocked === false
                              ? instockStyle
                              : { textAlign: "center" }
                          }
                        >
                          {product.price}
                        </td>
                      </tr>
                    );
                  }

                  // Return null if the conditions are not met to skip rendering
                  return null;
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductTable;
