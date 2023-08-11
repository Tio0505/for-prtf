import React from "react";
import "./styles.scss";
import { Button } from "../../../../components";
import { Link } from "react-router-dom";
import { SHOP } from "../../../../data/routes";

export const HeroCard: React.FC = () => {
  return (
    <div className="hero-card">
      <h5>New arrival</h5>
      <h1>Discover Our New Collection</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        placeat enim voluptate eos et esse at iure pariatur ad labore!
      </p>

      <Link to={SHOP}>
        <Button size="large">Buy now</Button>
      </Link>
    </div>
  );
};
