import "./Home.scss";
import { Hero, ProductCard } from "../../components";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container-flex">
        <section className="product__section">
          <h2>Discover</h2>
          <div className="product__container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
};
