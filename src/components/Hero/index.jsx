import "./Hero.scss";
import HeroImage from "../../assets/images/heya-hero-image.webp";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const Hero = ({ scrollToAction }) => {
  return (
    <div className="container">
      <section className="hero__container">
        <div className="hero__text__container">
          <h1>WELCOME</h1>
          <p>
            Start shopping now and explore our wide range of products. From
            essentials to luxuries, we have everything you need. Happy browsing!
          </p>
          <div className="hero__button__container">
            <Button variant="green" onClick={scrollToAction}>
              Products
            </Button>
            <Button variant="black" to="/contact">
              Contact
            </Button>
          </div>
        </div>
        <img src={HeroImage} alt="Display of products" />
      </section>
    </div>
  );
};
