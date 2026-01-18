import {FeatureCard} from "../components/Cards";

const features = [
  {
    image: "/public/images/usp_entertainment_1.webp",
    title: "Endless entertainment",
    description:
      "Explore thousands of hours of TV series, movies and originals.",
  },
  {
    image: "/public/images/usp_fav_device_1.webp",
    title: "Available on your favourite devices",
    description: "Stream on up to 4 screens at once on compatible devices.",
  },
  {
    image: "/public/images/usp_parental_control_1.webp",
    title: "Easy-to-use parental controls",
    description: "Keep your family safe with our intuitive parental controls.",
  },
];
function Features() {
  return (
    <div>
      <div className="w-full h-px mx-auto p-0.5 bg-[linear-gradient(to_left,#000000,#02132f,#042050,#082e71,#0f3983,#4c83e5,#4c83e5,#0f3983,#082e71,#042050,#02132f,#000000)]"></div>
      <section className="md:grid lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
      <div className="w-full h-px mx-auto p-0.5 bg-[linear-gradient(to_left,#000000,#02132f,#042050,#082e71,#0f3983,#4c83e5,#4c83e5,#0f3983,#082e71,#042050,#02132f,#000000)]"></div>
    </div>
  );
}

export default Features;