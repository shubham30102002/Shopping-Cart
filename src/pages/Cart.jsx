import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart = [] } = useSelector((state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      return acc + parseFloat(curr.price);
    }, 0);
    setTotalAmount(totalPrice);
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-center items-center gap-x-4 ">
          <div className="flex flex-col w-[35vw]">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className=" flex flex-col justify-between w-[25vw] h-[70vh] ">
            <div className="flex flex-col">
              <div className="text-green-700  uppercase font-semibold">Your Cart </div>
              <div className="text-green-700 text-4xl uppercase font-semibold mb-2">Summary</div>
              <p>
                <span className="font-semibold ">Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-3">
                Total Amount:
                <span className="font-bold">${totalAmount}</span>
              </p>
              <button className="bg-green-700 text-white w-[100%] py-2 font-semibold rounded-md
               hover:bg-white hover:text-green-700 transition duration-300 ">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[88vh] justify-center items-center">
          <div>
            <h1 className="font-semibold mb-5" >Your cart is Empty!</h1>
            <Link to={"/"}>
              <button className="text-white bg-green-700 px-7 py-2
             rounded-md cursor-pointer
              hover:bg-white hover:text-green-700
              transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
