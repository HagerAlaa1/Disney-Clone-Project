import React from "react";
interface FeaturesProps {
  children?: React.ReactNode;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

function Cards({ className = " ", image, title, description }: FeaturesProps) {
  return (
    <section className={`${className} flex justify-center items-center gap-3 `}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h3>{description}</h3>
      </div>
    </section>
  );
}

export default Cards;
