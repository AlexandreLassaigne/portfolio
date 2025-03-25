import Header from "./Header";
import Contact from "./Contact";
import Apropos from './Apropos'
import Projets from './Projets'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Header />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/background.mp4"/>
      </video >
      <Apropos />
      <Projets/>
      <Contact/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
