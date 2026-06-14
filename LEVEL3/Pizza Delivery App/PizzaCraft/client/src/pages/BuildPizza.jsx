import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuildPizza() {
const navigate = useNavigate();

const [selectedBase, setSelectedBase] =
useState("");

const [selectedSauce, setSelectedSauce] =
useState("");

const [selectedCheese, setSelectedCheese] =
useState("");

const [selectedVeggies, setSelectedVeggies] =
useState([]);

const bases = [
{ name: "Cheese Burst", price: 180 },
{ name: "Classic Hand-Tossed", price: 120 },
{ name: "Thin Crust", price: 130 },
{ name: "Whole Wheat", price: 140 },
{ name: "Gluten-Free", price: 200 },
];

const sauces = [
{ name: "Classic Tomato", price: 40 },
{ name: "BBQ Sauce", price: 60 },
{ name: "Pesto Sauce", price: 80 },
];

const cheeses = [
{ name: "Mozzarella", price: 50 },
{ name: "Cheddar", price: 60 },
{ name: "Parmesan", price: 80 },
];

const veggies = [
{ name: "Corn", price: 20 },
{ name: "Onion", price: 20 },
{ name: "Capsicum", price: 30 },
{ name: "Mushroom", price: 40 },
];

const handleVeggieSelect = (
veggie
) => {
if (
selectedVeggies.includes(
veggie
)
) {
setSelectedVeggies(
selectedVeggies.filter(
(v) => v !== veggie
)
);
} else {
setSelectedVeggies([
...selectedVeggies,
veggie,
]);
}
};

const basePrice = selectedBase
? bases.find(
(b) => b.name === selectedBase
)?.price || 0
: 0;

const saucePrice = selectedSauce
? sauces.find(
(s) => s.name === selectedSauce
)?.price || 0
: 0;

const cheesePrice = selectedCheese
? cheeses.find(
(c) => c.name === selectedCheese
)?.price || 0
: 0;

const veggiePrice =
selectedVeggies.reduce(
(sum, veggie) => {
const item =
veggies.find(
(v) =>
v.name === veggie
);


    return (
      sum +
      (item?.price || 0)
    );
  },
  0
);


const total =
basePrice +
saucePrice +
cheesePrice +
veggiePrice;

const addCustomPizza = () => {
if (
!selectedBase ||
!selectedSauce ||
!selectedCheese
) {
alert(
"Please complete all selections"
);
return;
}


const customPizza = {
  name: "Custom Pizza",
  base: selectedBase,
  sauce: selectedSauce,
  cheese: selectedCheese,
  veggies: selectedVeggies,
  price: total,
};

const cart =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

cart.push(customPizza);

localStorage.setItem(
  "cart",
  JSON.stringify(cart)
);

alert(
  "Custom Pizza Added To Cart 🍕"
);

navigate("/cart");


};

return ( <div className="min-h-screen bg-[#020817] text-white">


  <div className="border-b border-gray-800 px-8 py-5 flex justify-between items-center">

    <div>
      <h1 className="text-3xl font-bold text-orange-500">
        🍕 Craft Your Pizza
      </h1>

      <p className="text-gray-400">
        Step 1 - 4 of 6
      </p>
    </div>

    <button
      onClick={() =>
        navigate("/dashboard")
      }
      className="bg-gray-800 px-4 py-2 rounded-lg"
    >
      Back
    </button>

  </div>

  <div className="grid md:grid-cols-3 gap-8 p-8">

    <div className="md:col-span-2 bg-[#0f172a] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Choose Your Base
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10">

        {bases.map((base) => (
          <div
            key={base.name}
            onClick={() =>
              setSelectedBase(
                base.name
              )
            }
            className={`cursor-pointer border rounded-xl p-5 ${
              selectedBase ===
              base.name
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-700"
            }`}
          >
            <h3 className="font-bold">
              {base.name}
            </h3>

            <p className="text-orange-500">
              +₹{base.price}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Choose Your Sauce
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10">

        {sauces.map((sauce) => (
          <div
            key={sauce.name}
            onClick={() =>
              setSelectedSauce(
                sauce.name
              )
            }
            className={`cursor-pointer border rounded-xl p-5 ${
              selectedSauce ===
              sauce.name
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-700"
            }`}
          >
            <h3 className="font-bold">
              {sauce.name}
            </h3>

            <p className="text-orange-500">
              +₹{sauce.price}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Choose Your Cheese
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10">

        {cheeses.map((cheese) => (
          <div
            key={cheese.name}
            onClick={() =>
              setSelectedCheese(
                cheese.name
              )
            }
            className={`cursor-pointer border rounded-xl p-5 ${
              selectedCheese ===
              cheese.name
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-700"
            }`}
          >
            <h3 className="font-bold">
              {cheese.name}
            </h3>

            <p className="text-orange-500">
              +₹{cheese.price}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Choose Veggies
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {veggies.map((veggie) => (
          <div
            key={veggie.name}
            onClick={() =>
              handleVeggieSelect(
                veggie.name
              )
            }
            className={`cursor-pointer border rounded-xl p-5 ${
              selectedVeggies.includes(
                veggie.name
              )
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-700"
            }`}
          >
            <h3 className="font-bold">
              {veggie.name}
            </h3>

            <p className="text-orange-500">
              +₹{veggie.price}
            </p>
          </div>
        ))}
      </div>

    </div>

    <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Your Pizza
      </h2>

      <div className="space-y-4">

        <p>
          Base:
          <span className="text-orange-500 ml-2">
            {selectedBase || "—"}
          </span>
        </p>

        <p>
          Sauce:
          <span className="text-orange-500 ml-2">
            {selectedSauce || "—"}
          </span>
        </p>

        <p>
          Cheese:
          <span className="text-orange-500 ml-2">
            {selectedCheese || "—"}
          </span>
        </p>

        <p>
          Veggies:
          <span className="text-orange-500 ml-2">
            {selectedVeggies.length
              ? selectedVeggies.join(", ")
              : "—"}
          </span>
        </p>

      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex justify-between text-2xl font-bold">

        <span>Total</span>

        <span className="text-orange-500">
          ₹{total}
        </span>

      </div>

      <button
        onClick={addCustomPizza}
        className="w-full mt-6 bg-orange-500 py-3 rounded-xl hover:bg-orange-600"
      >
        Add To Cart 🍕
      </button>

    </div>

  </div>
</div>


);
}

export default BuildPizza;
