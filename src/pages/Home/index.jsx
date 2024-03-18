import "./Home.scss";
import { Hero, ProductCard } from "../../components";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";

export const Home = () => {
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const search = (data, query) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  let content;
  if (isError) {
    content = <div className="error">There was an error loading the data.</div>;
  } else if (isLoading) {
    console.log(isLoading);
  } else {
    const filteredData = search(data, searchQuery);
    content = filteredData.map((item) => (
      <ProductCard data={item} key={item.id} />
    ));
  }
  return (
    <>
      <Hero />
      <div className="container-flex">
        <section className="product__section">
          <div className="input__container">
            <h2>Discover</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchQuery}
            />
          </div>

          <div className="product__container">{content}</div>
        </section>
      </div>
    </>
  );
};
