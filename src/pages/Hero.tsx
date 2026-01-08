
import Button from "../components/Button";
import { ChevronRight } from "lucide-react";

function Hero() {
  return (
    <main>
      <section className="flex justify-center items-center flex-col h-screen">
        <div className="w-30 md:w-55 cursor-pointer">
          <img
            src="/public/images/disney-plus-logo.webp"
            alt="disney-plus-logo"
          />
        </div>
        <div className="flex justify-center items-center text-center w-50 md:w-130 mt-6 ">
          <h1 className="text-[20px] md:text-[28px] font-semibold leading-7 md:leading-9 tracking-[-0.2px] md:tracking-[-0.4px]">
            New Originals, blockbusters and series
          </h1>
        </div>
        <div className="w-full sm:w-60 mt-6 hover:scale-110 transition-transform delay-100 duration-300">
          <Button className="w-full h-12 font-semibold leading-5 flex justify-center gap-2">
            <span>Get Started</span>
            <ChevronRight />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Hero;
