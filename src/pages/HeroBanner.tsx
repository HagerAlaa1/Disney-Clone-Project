import { useTranslation } from "react-i18next";
import { BannerCard } from "../components/Cards";


const bannerImages = [
  { image: "/public/images/Stories you'd expect + Stories you wouldn't.avif" },
  {
    items: [
      "/public/images/1.jpeg",
      "/public/images/2.jpeg",
      "/public/images/3.jpeg",
      "/public/images/4.jpeg",
      "/public/images/5.jpeg",
      "/public/images/6.jpeg",
      "/public/images/7.jpeg",
      "/public/images/8.jpeg",
      "/public/images/9.jpeg",
    ],
  },
];

function HeroBanner() {
  const { t } = useTranslation("common");
  const bannerFeatures = t("heroBanner", {returnObjects: true})
  const arrayBanner = Array.isArray(bannerFeatures) ? bannerFeatures : [];
  return (
    <>
      <section>
        {arrayBanner?.map((feature, i) => {
          const currentImage = bannerImages[i];
          return (
            <BannerCard
              key={i}
              title={feature.title}
              description={feature.description}
              image={currentImage.image}
              items={
                currentImage.items?.length
                  ? currentImage.items.map((img, i) => (
                      <div
                        key={i}
                        className={`hover:scale-90 transition-transform duration-300 ${
                          i === currentImage.items.length - 1
                            ? "hidden md:block"
                            : ""
                        }`}
                      >
                        <img
                          height={400}
                          width={400}
                          className="object-cover rounded-xl cursor-pointer"
                          src={img}
                          alt={feature.title}
                        />
                      </div>
                    ))
                  : null
              }
            />
          );
        })}
      </section>
    </>
  );
}

export default HeroBanner;
