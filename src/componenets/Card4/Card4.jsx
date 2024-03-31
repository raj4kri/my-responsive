import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card3/Card3.css";
import "../Card4/Card4.css";
// import img2 from './Img/img2.png';
const CustomCard = () => {
  return (
    <div className="">
      <div className="heading">
        {" "}
        <h1>
          Your <span className="subhead">Hobby</span>, Your{" "}
          <span className="subhead1">Community...</span>
        </h1>
      </div>
      <button className="btn btn-outline-secondary btn2"> get started</button>
    </div>
  );
};

const App = () => {
  return (
    <section className="sec">
      <div className="container4">
        <div className="row">
          <div className="col-md-10 ">
            <CustomCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
