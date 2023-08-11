import React from "react";
import { Hero } from "../../features/hero";
import { CategoryList } from "../../features/categories";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <section className="container">
        <CategoryList />
      </section>
    </div>
  );
};
export default Home;
