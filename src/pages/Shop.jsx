import React from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
const Shop = () => {
  const SHOP_ITEMS = [
    {
      id: "frames",
      title: "Eyeglass Frames",
      desc: "Wide range of stylish and durable frames.",
      price: 300,
    },
    {
      id: "lenses",
      title: "Prescription Lenses",
      desc: "High-quality lenses tailored to your prescription.",
      price: 200,
    },
    {
      id: "contacts",
      title: "Contact Lenses",
      desc: "Comfortable daily and monthly contact lenses.",
      price: 150,
    },
  ];

  return (
    <section className="mt-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Optical Shop</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SHOP_ITEMS.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="mb-2 text-emerald-600" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
            <p className="mt-2 font-bold">GHS {item.price}</p>
            <Link
              to={`/cart?add=${item.id}`}
              className="mt-2 inline-block bg-emerald-600 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
