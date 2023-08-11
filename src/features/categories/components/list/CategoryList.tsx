import { HTMLProps } from "react";
import "./styles.scss";
import classNames from "classnames";

export const CategoryList: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <section className={classNames("category-list", className)} {...restProps}>
      <h2 className="heading-primary">Browse The Range</h2>
      <p className="heading-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  );
};
