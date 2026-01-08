import Container from "../components/Container";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

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
        {/* </Container> */}
      </section>
    </main>
  );
}

export default MainLayout;
