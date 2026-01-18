import Container from "./Container";

interface FeaturesProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  items?: React.ReactNode;
}

export function FeatureCard({
  className = " ",
  image,
  title,
  description,
}: FeaturesProps) {
  return (

    <section
      className={`${className} first:pt-10 md:first:pt-0 last:pb-10 md:last:pb-0 bg-[#0F1014]`}
    >
      <Container>
        <div className="flex flex-col justify-center items-center gap-2 py-10 lg:py-25">
          <div className="h-15 md:h-20 w-15 md:w-20 flex justify-center items-center mx-auto">
            <img src={image} alt={title} className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-[#e1e6f0] H2Feature text-center md:mt-5 font-semibold tracking-[-0.2px] leading-8">
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

export function BannerCard({
  className = " ",
  image,
  items,
  title,
  description,
}: FeaturesProps) {
  return (
    <section
      className={`${className} flex justify-center items-center text-center flex-col`}
    >
      <Container>
        <div className="text-center m-auto">
          <div className="H2banner font-semibold leading-7 md:leading-13.5 tracking-[-0.2px] md:tracking-[-0.4px] mt-12">
            <h2>{title}</h2>
          </div>
          <div className="text-[#8f98b2] text-[14px] md:text-xl font-semibold leading-5 md:leading-8 mt-3">
            <h3>{description}</h3>
          </div>
          {image && (
            <div className="mt-10 mx-3 mb-3">
              <img src={image} alt={title} />
            </div>
          )}
          {items && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8 place-items-center">
              {items}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Devices({
  className = " ",
  image,
  title,
  description,
}: FeaturesProps) {
  return (
    <section
      className={`${className} flex justify-center items-center text-center flex-col`}
    >
      <Container>
        <div className="text-center m-auto text-[20px] font-semibold tracking-[-0.2px] leading-7 mt-12">
          <h2 className="text-[#e1e6f0]">Compatible devices</h2>
        </div>
        <div>
          <div></div>
        </div>
      </Container>
    </section>
  );
}

//flex flex-col justify-center items-center gap-2 mx-3 pb-10
//flex flex-col justify-center items-center  first:pt-10 md:pt-0 last:pb-5 md:pb-0 py-20