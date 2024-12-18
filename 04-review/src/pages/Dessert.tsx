import ProductCard from "../components/ProductCard";
import desserts from "../data/dessert.json";

export default function Dessert() {
  return (
    <>
      <header></header>
      <main>
        <h2 className="text-4xl font-bold text-rose-900 mb-8">Desserts</h2>
        <div className="grid grid-cols-3 gap-y-7 gap-x-5">
          {desserts.map((element) => (
            <ProductCard product={element} />
          ))}
          {/* {[1, 2, 3, 4, 5, 6].map(() => {
              return <ProductCard />;
            })} */}
          {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
        </div>
      </main>
      <footer></footer>
    </>
  );
}
