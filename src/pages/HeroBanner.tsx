import { BannerCard } from "../components/Cards";

const bannerFeatures = [
  {
    title: "Stories you'd expect + Stories you wouldn't",
    description:
      "Discover the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic and entertainment with Star on Disney+.",
    image: "/public/images/Stories you'd expect + Stories you wouldn't.avif",
  },
  {
    title: "Exclusive originals",
    description:
      "Movies, series and documentaries you can't see anywhere else,  from the world’s greatest storytellers.",
    // image: "/public/images/Exclusive originals.avif",
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
  return (
    <>
      <section>
        {bannerFeatures.map((feature) => (
          <BannerCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
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

//bg-[linear-gradient(180deg, #16181f, #0f1014 33.33%)]
