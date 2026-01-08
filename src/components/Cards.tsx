import Container from "./Container";

interface FeaturesProps {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

function Cards({ className = " ", image, title, description }: FeaturesProps) {
  return (
    <section
      className={`${className} flex flex-col justify-center items-center  first:pt-10 md:pt-20 last:pb-5 md:pb-20 bg-[#0F1014]`}
    >
      <Container>
        <div className="flex flex-col justify-center items-center gap-2 mx-3 pb-10 ">
          <div className="h-15 w-15 flex justify-center items-center mx-auto">
            <img src={image} alt={title} className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-[#e1e6f0] text-[24px] text-center font-semibold tracking-[-0.2px] leading-8">
              {title}
            </h2>
          </div>
          <div>
            <h3 className="text-[#8f98b2] font-medium leading-5 md:leading-8 text-center">
              {description}
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cards;
