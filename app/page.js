import Footer from "./components/common/footer";
import Header from "./components/common/header";
import About from "./components/home/about";
import Banner from "./components/home/banner";
import Contact from "./components/home/contact";
import Portfolio from "./components/home/portfolio";
import Services from "./components/home/services";
import Stats from "./components/home/stats";
import Testimonials from "./components/home/testimonials";
import Faq from "./components/home/faq";

export default function Home() {
  return (
    <div >
      <Header />
      <Banner />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
