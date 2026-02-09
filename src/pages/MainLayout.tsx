import Container from "../components/Container";
import Features from "./Features";
import Hero from "./Hero";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import Devices from "./Devices";
import FAQ from "./FAQ";
import Footer from "./Footer";

function MainLayout() {
  return (
    <main>
      <section className='bg-[url("/public/images/login-background.jpg")] bg-cover min-h-screen'>
        <Container>
          <Navbar />
          <Hero />
        </Container>
      </section>
      <section>
        {/* <Container> */}
        <Features />
        <div className="bg-[linear-gradient(180deg,#222530,#0f1014_10.33%)]">
          <HeroBanner />
          <Devices />
          <FAQ />
        </div>
        <Footer/>
        {/* </Container> */}
      </section>
    </main>
  );
}

export default MainLayout;
