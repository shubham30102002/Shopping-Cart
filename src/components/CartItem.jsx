import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
  <div className="flex ">
    <div className="flex justify-center items-center border-b-2 border-gray-500">
      <div className="h-[180px]">
        <img src={item.image} alt="Product Image" className="h-full w-full " />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1>{item.description}</h1>
        <div className="flex">
          <p className="text-green-600 font-semibold justify-between">${item.price}</p>
          <div 
          onClick={removeFromCart}>
            <MdDeleteSweep className="rounded-full bg-red-200 cursor-pointer " />
          </div>
        </div>
      </div>
    </div>

  </div>
  )
};

export default CartItem;
