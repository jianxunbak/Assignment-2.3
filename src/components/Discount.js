import { useState } from "react";

const initialValue = {
  name: "Fruits",
  count: 0,
  price: 2.99,
  discount: 0,
};

function Discount() {
  const [product, setProduct] = useState(initialValue);

  //   if (product.count >= 5) {
  //     const [discount, setDiscount] = useState(20);
  //   }

  const handlerPlus = () => {
    setProduct((prevProduct) => {
      const newCount = product.count + 1;
      const newDiscount = discount(newCount);
      return { ...prevProduct, count: newCount, discount: newDiscount };
    });
  };

  const handlerMinus = () => {
    setProduct((prevProduct) => {
      const newCount = prevProduct.count - 1;
      const newDiscount = discount(newCount);
      return { ...prevProduct, count: newCount, discount: newDiscount };
    });
  };

  const handlerReset = () => {
    setProduct(initialValue);
  };

  const discount = (count) => {
    if (count >= 5) {
      return 20;
    }
    return 0;
  };

  const Price = (price, discount) => {
    if (discount > 1) {
      const distPrice = (price - price * (discount / 100)).toFixed(2);
      return distPrice;
    }
    return price;
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus} disabled={product.count <= 0}>
        -
      </button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <br />
      <button onClick={handlerReset}>Reset</button>
      <h2>{`$ ${Price(product.price, product.discount)}`}</h2>
      <h3>{`Discount: ${product.discount}%`}</h3>
    </>
  );
}
export default Discount;
