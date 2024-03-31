import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card2/Card2.css';

const CustomCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add Your Own</h5>
        <p className="card-text">
        Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
        </p>
        <button className="btn btn-outline-primary border border-purple text-purple">Add New</button>
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
