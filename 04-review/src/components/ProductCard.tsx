interface Prop {
  product: {
    image: {
      thumbnail: string;
      tablet: string;
      mobile: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

export default function ProductCard(prop: Prop) {
  return (
    <div>
      {/* Image Container */}
      <div className="rounded-lg overflow-hidden">
        <img src={prop.product.image.desktop} alt="Product Image" />
      </div>

      <button className="flex border border-rose-400 gap-2 py-2 px-6 rounded-full mx-auto -mt-5 bg-white z-10 relative">
        <img src="/icon-add-to-cart.svg" alt="" />
        <span className="text-sm">Add to Cart</span>
      </button>

      {/* Text Container */}
      <div className="font-medium text-sm mt-2">
        <span className="text-rose-300">{prop.product.category}</span>
        <h3 className="text-rose-900">{prop.product.name}</h3>
        <span className="text-red">${prop.product.price}</span>
      </div>
    </div>
  );
}
