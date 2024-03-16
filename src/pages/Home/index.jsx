import "./Home.scss";
import { Hero } from "../../components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container-flex">
        <section className="product__section">
          <div>Discover</div>
          <div className="product__container"></div>
        </section>
      </div>
    </>
  );
};
