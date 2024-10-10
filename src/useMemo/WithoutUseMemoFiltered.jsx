import { useEffect, useState } from "react";
import axios from "axios";

const WithoutUseMemo = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(10);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("@AJ Response: ", response);
        setProducts(response.data);

        const afterFilters = response.data.filter(
          (product) => product.price < selectedPrice
        );

        setFilteredProducts(afterFilters);
      } catch (err) {
        console.log("Err: ", err);
      }
    })();
  }, []);

  useEffect(() => {
    const afterFilters = products?.filter(
      (product) => product.price < selectedPrice
    );
    setFilteredProducts(afterFilters);
  }, [selectedPrice]);

  console.log("@AJ Re-Render: ", products, filteredProducts);

  return (
    <div>
      <h1>My Products : {filteredProducts?.length}</h1>
      <div>
        <button onClick={() => setSelectedPrice(10)}>Below 10</button>
        <button onClick={() => setSelectedPrice(20)}>Below 20</button>
        <button onClick={() => setSelectedPrice(30)}>Below 30</button>
      </div>
      <div>
        <ul>
          {filteredProducts?.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WithoutUseMemo;
