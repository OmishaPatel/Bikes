import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartRedux";
const Success = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Successfull. Your order is being prepared...</p>
      <Link to="/" className="link">
        <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Success;
