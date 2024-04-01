import "./App.css";

import Navbar from "./componenets/Navbar/Navbar";
import Card from "./componenets/Card/Card";
import Card2 from "./componenets/Card2/Card2";
import Card3 from "./componenets/Card3/Card3";
import Card4 from "./componenets/Card4/Card4";

// import Search from '../Section/Section'
import Section from "./componenets/Section/Section";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Section />
      <Card />
      <Card2 />
      <Card3 />
      <Card4 />
      <Footer />
    </div>
  );
}

export default App;
