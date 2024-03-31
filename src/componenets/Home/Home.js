import React from 'react'
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Card2 from '../Card2/Card2';
import Card3 from '../Card3/Card3';
import Card4 from '../Card4/Card4';


// import Search from '../Section/Section'
import Section from '../Section/Section';
import Footer from '../Footer';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function home() {
  return (
    <div>


<div className="container">

<Navbar/>

<Section/>
<Card/>
<Card2/>
<Card3/>
<Card4/>
<Footer/>

</div>
    

 

        



      
    </div>
  )
}
