import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-orange-500">
          🛒 My Cart
        </h1>

        <Link to="/dashboard">
          <button className="bg-orange-500 px-5 py-3 rounded-xl hover:bg-orange-600">
            Back To Menu
          </button>
        </Link>
      </div>

      {/* Cart Items */}
      <div className="p-8">
        {cart.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold">
              Your Cart Is Empty 🍕
            </h2>

            <Link to="/dashboard">
              <button className="mt-6 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600">
                Browse Pizzas
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-orange-500 text-xl mt-2">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-10 bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-3xl font-bold">
                Order Summary
              </h2>

              <p className="text-xl mt-4">
                Items: {cart.length}
              </p>

              <p className="text-3xl font-bold text-orange-500 mt-4">
                Total: ₹{total}
              </p>

              <Link to="/checkout">
                <button className="w-full mt-6 bg-orange-500 py-4 rounded-xl text-lg font-bold hover:bg-orange-600">
                  Proceed To Checkout 🚀
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;