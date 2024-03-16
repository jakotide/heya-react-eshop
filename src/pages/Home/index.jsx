import "./Home.scss";
import { Hero, ProductCard } from "../../components";
import { useApi } from "../../hooks/useFecth";

export const Home = () => {
    const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

    let content;
    if (isError) {
        content = <div className="error">There was an error loading the data.</div>;
    } else if (isLoading) {
     console.log(isLoading);
    } else {
        content = data.map((item) => <ProductCard data={item} key={item.id} />);
    }
  return (
    <>
      <Hero />
      <div className="container-flex">
        <section className="product__section">
          <h2>Discover</h2>
          <div className="product__container">
            {content}
          </div>
        </section>
      </div>
    </>
  );
};
