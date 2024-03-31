import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Section/Section.css'
import '../Card4/Card4.css';



const Section = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (

    <section className=''>
    <section className="container2">
      <div className="row">
        <div className="col-md-6">
          <div className='heading'>    <h1>Explore Your <span className="subhead">Hobby</span>, or <span className="subhead1">passion</span></h1>
</div>
          <p>
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <p>
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <button type="button" className="btn  me-2 " onClick={toggleForm}>
              <u className='signlogin'>{isSignIn ? 'Sign In' : 'Join In'}</u>
                
              </button>
              <button type="button" className="btn " onClick={toggleForm}>
                {isSignIn ? 'Join In' : 'Sign In'}
              </button>
            </div>
            {isSignIn ? (
              <>
                <div className="mb-3">
                  <button className="btn btn-outline-secondary w-100 mb-3">
                    <FontAwesomeIcon icon={faGoogle} className="me-2 " />
                    
                    Sign in with Google
                  </button>
                  <button className="btn btn-outline-secondary w-100">
                    <FontAwesomeIcon icon={faFacebook} className="me-2" />
                    Sign in with Facebook
                  </button>
                </div>
                <div className="mb-3">
                  <hr />
                  
                  <div className="input-group">
                    
                    <input type="email" className="form-control" id="email"  placeholder='Email'/>
                  </div>
                </div>
                <div className="mb-3">
                
                  <div className="input-group">
                    
                    <input type="password" className="form-control" id="password"  placeholder='Password'/>
                  </div>
                </div>
                <div className="mb-3 d-flex ">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <div className='forg1'>
                  <a href="/" className="forg">Forgot password?</a>
                  </div>
                  
                </div>
                <button type="submit" className="btn btn-outline-dark  bg-purple w-100">
                  Continue
                </button>
              </>
            ) : (
              <p>Join form content goes here...</p>
            )}
          </form>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Section;
