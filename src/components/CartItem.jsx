import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    <div className="h-[35vh]" >
      <div className="flex justify-center items-center border-b-2 border-gray-500  ">
        <div className="w-[20vw] m-3 ">
          <img src={item.image} alt="Product Image" className="" />
        </div>
        <div className=" w-[25vw]  pb-10 px-5 flex flex-col gap-8">
          <div>
            <h1 className="text-gray-700 text-xs font-semibold text-left  mt-4 mb-2">{item.title}</h1>
            <h1 className="text-xs  truncate">{item.description}</h1>

          </div>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div
              onClick={removeFromCart}
              className=" w-[5vw] h-[5vh  ]">  
              <MdDelete  fontSize={"1.25rem"}
               className="rounded-full bg-red-300 cursor-pointer  text-red-900  " />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default CartItem;
