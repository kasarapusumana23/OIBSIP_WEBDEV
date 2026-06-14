import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("userInfo")) || {};

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("userInfo")
    );

    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const pizzas = [
    {
      name: "Margherita",
      price: 299,
      description:
        "Classic tomato, fresh mozzarella, basil",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Veggie Delight",
      price: 379,
      description:
        "Bell peppers, onions, mushrooms, olives",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pepperoni Supreme",
      price: 449,
      description:
        "Loaded with pepperoni and extra cheese",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "BBQ Chicken",
      price: 499,
      description:
        "Smoky BBQ sauce, grilled chicken, onions",
      image:
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const addToCart = (pizza) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(pizza);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${pizza.name} added to cart 🍕`);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const cartCount =
    JSON.parse(localStorage.getItem("cart"))?.length ||
    0;

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-3xl font-bold text-orange-500">
            🍕 Slice
          </h1>

          <div className="flex gap-4 items-center">
            <Link to="/cart">
              <button className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600">
                🛒 Cart ({cartCount})
              </button>
            </Link>

            <button
              onClick={logoutHandler}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 mt-10">
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-12 flex justify-between items-center">
          <div>
            <h1 className="text-6xl font-bold">
              Hungry?
            </h1>

            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              Pick from our menu or build your
              own pizza from scratch with premium
              ingredients.
            </p>

            <p className="text-orange-500 mt-4">
              Welcome, {user?.name} 👋
            </p>
          </div>

          <button
            onClick={() => navigate("/build")}
            className="bg-orange-500 px-8 py-4 rounded-xl hover:bg-orange-600 font-semibold"
          >
            Build Your Own
          </button>
        </div>

        {/* Menu */}
        <h2 className="text-4xl font-bold mt-12 mb-8">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">
                    {pizza.name}
                  </h3>

                  <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                    ₹{pizza.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-3 text-sm">
                  {pizza.description}
                </p>

                <button
                  onClick={() =>
                    addToCart(pizza)
                  }
                  className="w-full mt-5 bg-orange-500 py-3 rounded-xl hover:bg-orange-600"
                >
                  Add To Cart 🍕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;