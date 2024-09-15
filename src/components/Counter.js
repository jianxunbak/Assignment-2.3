import { useState } from "react";

const initialProduct = { name: "Fruits", count: 0 };

const Counter = () => {
  const [product, setProduct] = useState(initialProduct);

  const handlerPlus = () => {
    setProduct((prevProduct) => {
      const newCount = prevProduct.count + 1;
      return { ...prevProduct, count: newCount };
    });
  };

  const handlerMinus = () => {
    setProduct((prevProduct) => {
      const newCount = prevProduct.count - 1;
      return { ...prevProduct, count: newCount };
    });
  };

  const reset = () => {
    setProduct(initialProduct);
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <br></br>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Counter;
