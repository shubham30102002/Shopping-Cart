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
  <div>
    <div>
      <div>
        <img src={item.image} alt="Product Image" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div 
          onClick={removeFromCart}>
            <MdDeleteSweep />
          </div>
        </div>
      </div>
    </div>

  </div>
  )
};

export default CartItem;
