import styled from "styled-components";
import ProductItems from "./ProductItems";
// import { popularProducts } from "../../src/data";
import { useState, useEffect } from "react";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 110vh;
  width: 100%;
  ${mobile({ height: "438vh" })}
`;

function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecommerce-app-f1ic.onrender.com/api/product/find?category=${cat}`
            : "https://ecommerce-app-f1ic.onrender.com/api/product/find"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  // console.log(products);
  console.log(filteredProducts);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <ProductItems item={item} key={item.id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductItems item={item} key={item.id} />)}
    </Container>
  );
}

export default Products;
