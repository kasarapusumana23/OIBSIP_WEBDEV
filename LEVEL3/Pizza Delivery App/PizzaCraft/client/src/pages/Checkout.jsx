import { useState } from "react";

function Checkout() {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      address: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert(
        "Please fill all delivery details"
      );
      return;
    }

    alert(
      "🎉 Order Placed Successfully!"
    );

    localStorage.removeItem("cart");

    window.location.href =
      "/dashboard";
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-8 py-6">
        <h1 className="text-4xl font-bold text-orange-500">
          💳 Checkout
        </h1>

        <p className="text-gray-400 mt-2">
          Complete your order
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Delivery Details */}
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">
            Delivery Details
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1e293b] mb-4 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#1e293b] mb-4 outline-none"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="w-full p-4 rounded-xl bg-[#1e293b] outline-none"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map(
            (item, index) => (
              <div
                key={index}
                className="flex justify-between mb-4"
              >
                <span>
                  {item.name}
                </span>

                <span>
                  ₹{item.price}
                </span>
              </div>
            )
          )}

          <hr className="border-gray-700 my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>

            <span className="text-orange-500">
              ₹{total}
            </span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-orange-500 py-4 rounded-xl text-lg font-bold hover:bg-orange-600"
          >
            Place Order 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;