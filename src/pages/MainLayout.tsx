import Container from "../components/Container";
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
    </main>
  );
}

export default MainLayout;
