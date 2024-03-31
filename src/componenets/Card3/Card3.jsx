import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card3/Card3.css';
import img2 from './Img/img2.png';
const CustomCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Testimonials</h5>
        <p className="card-text">
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <audio controls className='audio'></audio>

       
        <p className='name'>Shubha Nagarajan<span className='subname'>Classical Dancer</span></p>
        <img className="image" src={img2}/>
        
      </div>
    </div>
  );
};

const App = () => {
  return (
    <section className='sec'>
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
