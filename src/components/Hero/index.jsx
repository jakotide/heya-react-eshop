import "./Hero.scss";
import HeroImage from "../../assets/images/heya-hero-image.webp";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <div className="container">
      <section className="hero__container">
        <div className="hero__text__container">
          <h1>WELCOME</h1>
          <p>
            Welcome to our store! Start shopping now and explore our wide range
            of products. From essentials to luxuries, we have everything you
            need. Happy browsing!
          </p>
          <div className="hero__button__container">
            <Button variant="green">
                <Link>Products</Link>
            </Button>
            <Button variant="black">
                <Link>Contact</Link>
            </Button>
          </div>
        </div>
        <img src={HeroImage} alt="Display of products" />
      </section>
    </div>
  );
};
