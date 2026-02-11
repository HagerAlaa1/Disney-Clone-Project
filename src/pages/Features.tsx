import { FeatureCard } from "../components/Cards";
import { useTranslation } from "react-i18next";

const featuresImages = [
  "/public/images/usp_entertainment_1.webp",
  "/public/images/usp_fav_device_1.webp",
  "/public/images/usp_parental_control_1.webp",
];
function Features() {
  const { t, i18n } = useTranslation("common");
  const features = t("features", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const featuresWithImages = features.map((f, i) => ({
    image: featuresImages[i],
    title: f.title,
    description: f.description,
  }));

  return (
    <div>
      <div className="w-full h-px mx-auto p-0.5 bg-[linear-gradient(to_left,#000000,#02132f,#042050,#082e71,#0f3983,#4c83e5,#4c83e5,#0f3983,#082e71,#042050,#02132f,#000000)]"></div>
      <section className="md:grid lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            image={featuresImages[i]}
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
