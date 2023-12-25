import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    console.log("printing cart");
    console.log(cart);
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  const isItemInCart = cart && cart.some((p) => p.id === post.id);

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`} alt={post.title} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>

      {isItemInCart ? (
        <button onClick={removeFromCart}>
          Remove Item
        </button>
      ) : (
        <button onClick={addToCart}>
          Add to Cart
        </button>
      )}

    </div>
  )
};

export default Product;
