import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-orange-500">
          🍕 Slice
        </h1>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="border border-gray-700 px-5 py-2 rounded-xl">
              Sign In
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-orange-500 px-5 py-2 rounded-xl">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
        <div>
          <span className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full text-sm">
            🔥 FRESH FROM THE OVEN
          </span>

          <h1 className="text-7xl font-bold mt-6 leading-tight">
            Pizza,
            <span className="text-orange-500">
              {" "}obsessively
            </span>
            {" "}crafted.
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-xl">
            Order from a kitchen-curated menu or design your own
            pizza ingredient by ingredient.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 px-8 py-4 rounded-xl font-bold">
              Start Your Order →
            </button>

            <button className="border border-gray-700 px-8 py-4 rounded-xl">
              Build Your Own
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza"
            className="rounded-3xl shadow-2xl max-w-full"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 px-10 py-20">
        <div className="bg-[#111827] p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            🍕 Curated Menu
          </h2>

          <p className="text-gray-400 mt-4">
            Hand-picked recipes crafted weekly.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            🔥 Custom Builder
          </h2>

          <p className="text-gray-400 mt-4">
            5 bases, 5 sauces, premium toppings.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            🚚 Live Tracking
          </h2>

          <p className="text-gray-400 mt-4">
            Watch your order from oven to door.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 text-center border-t border-gray-800 py-16">
        <div>
          <h2 className="text-5xl font-bold text-orange-500">
            24min
          </h2>
          <p className="text-gray-400 mt-2">
            Average Delivery
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-orange-500">
            485°C
          </h2>
          <p className="text-gray-400 mt-2">
            Wood Fired Oven
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-orange-500">
            12k+
          </h2>
          <p className="text-gray-400 mt-2">
            Pizzas Served
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-orange-500">
            4.9★
          </h2>
          <p className="text-gray-400 mt-2">
            Customer Rating
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;