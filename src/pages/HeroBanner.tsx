import { useTranslation } from "react-i18next";
import { BannerCard } from "../components/Cards";

const bannerFeatures = [
  {
    title: "Stories you'd expect + Stories you wouldn't",
    description:
      "Discover the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic and entertainment with Star on Disney+.",
    image: "/public/images/Stories you'd expect + Stories you wouldn't.avif",
  },
  {
    titleKey: "heroBanner.title",
    descriptionKey: "heroBanner.description",
    childs: [
      {
        image: "/public/images/1.jpeg",
      },
      {
        image: "/public/images/2.jpeg",
      },
      {
        image: "/public/images/3.jpeg",
      },
      {
        image: "/public/images/4.jpeg",
      },
      {
        image: "/public/images/5.jpeg",
      },
      {
        image: "/public/images/6.jpeg",
      },
      {
        image: "/public/images/7.jpeg",
      },
      {
        image: "/public/images/8.jpeg",
      },
      {
        image: "/public/images/9.jpeg",
      },
    ],
  },
];

function HeroBanner() {
  const { t } = useTranslation("common");
  return (
    <>
      <section>
        {bannerFeatures.map((feature, i) => (
          <BannerCard
            key={i}
            title={feature.titleKey ? t(feature.titleKey) : feature.title}
            description={feature.descriptionKey ? t(feature.descriptionKey) : feature.description}
            image={feature.image}
            items={
              feature?.childs?.length
                ? feature?.childs?.map((child, index) => (
                    <div
                      key={index}
                      className={`hover:scale-90 transition-transform duration-300 ${
                        index === feature.childs.length - 1
                          ? "hidden md:block"
                          : ""
                      }`}
                    >
                      <img
                        height={400}
                        width={400}
                        className="object-cover rounded-xl cursor-pointer"
                        src={child.image}
                        alt={feature.title}
                      />
                    </div>
                  ))
                : null
            }
          />
        ))}
      </section>
    </>
  );
}

export default HeroBanner;
