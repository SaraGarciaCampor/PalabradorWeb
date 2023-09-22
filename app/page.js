import Footer from "./components/common/footer";
import Header from "./components/common/header";
import About from "./components/home/about";
import Banner from "./components/home/banner";
import Contact from "./components/home/contact";
import Portfolio from "./components/home/portfolio";
import Services from "./components/home/services";
import Stats from "./components/home/stats";
import Testimonials from "./components/home/testimonials";

export default function Home() {
  return (
    <div >
      <Header />
      <Banner />
      <Services />
      <Stats />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
