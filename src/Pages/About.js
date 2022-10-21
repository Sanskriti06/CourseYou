import React from "react";
import cupcake4 from "../Assets/cupcake4.jpg";
import cupcake2 from "../Assets/cupcake2.jpg";
import "./About.css";
function About() {
  return (
    <div>
    <div className="about">
      <div
        className="aboutTop"
        // style={{ backgroundImage: `url(${cupcake4})` }}
      ></div>
      <div className="aboutBottom">
        <hr></hr>
        <h1> ABOUT US</h1>
        <hr></hr>
        <p>
          Due to ongoing circumstances of Covid-19, we have transitioned our
          bakery to an online-only model and have partnered with Goldbelly. All
          Goldbelly orders will be shipped and can be shipped nationwide! Due to
          limited staff and packaging restrictions, we are unable to produce or
          ship Kupcakes at this time. We are exclusively producing Whoopie Pies
          and Cookies for now. We understand that many of you miss our signature
          Kupcakes, and we do too! However, we think you should give our Whoopie
          Pies a try as they are essentially Kupcake Sandwiches using the same
          delicious moist Kupcake batter and the sweet creamy Buttercream you
          already know and love!
        </p>
        <p>
        Since 1996, SugarDust Bakery has been one of India's most-cherished
        bakeshops and set the standard for tried-and-true desserts and baked
        goods. Learn more about our journey from neighborhood gem to sweet
        success.Hospitality is at the heart of the SugarDust Bakery experience.
        We believe a respectful, empathetic working environment is crucial to
        creating a positive team experience and keeping our guests happy.
        Interested in one of the sweetest gigs around? Visit our careers page to
        see openings at all of our India locations.Even though we're famous
        worldwide, SugarDust Bakery remains a neighborhood bakery at heart.
        We're committed to serving our local communities by supporting small
        businesses, charities, schools, and bake sales. If you're seeking a
        product donation for your cause, reach out to Hello@SugarDustbakery.com
        or use the link below to tell us more!
        </p>
      </div>
    </div>
    
    <div className="bg-light mt-5" id="tourist">    
    <div className="container">
     <div className="row text-center">
       <div className="col-sm-12 col-md-12 mb-4">
           <h3 className="text-center mt-4 text-secondary">Our Instructors</h3>
        </div>
       <div className="col-md-4">
         <div className="testimonial mb-5">
          <div className="avatar mx-auto">
           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
         </div>
         <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
         <h6 className="font-weight-bold blue-text my-3">C++ Instructor</h6>
         <p className="font-weight-normal dark-grey-text">
         Proficient instructor with many years experience.
         Professional who brings fun and enthusiasm to the table and can get any classroom in order</p>
       </div>
     </div>

     <div className="col-md-4">
       <div className="testimonial mb-5">
         <div className="avatar mx-auto">
           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
         </div>
         <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
         <h6 className="font-weight-bold blue-text my-3">Maths Instructor</h6>
         <p className="font-weight-normal dark-grey-text">Compassionate and results-oriented elementary school teacher with more than 4 years of experience managing medium- and large-sized classrooms</p>
       </div>

     </div>
     <div className="col-md-4">
       <div className="testimonial mb-5">
         <div className="avatar mx-auto">
           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
         </div>
         <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
         <h6 className="font-weight-bold blue-text my-3">Java Instructor</h6>
         <p className="font-weight-normal dark-grey-text">
         Assisted with writing grants, which ended up getting the high school over $10,000 during the 2010-2011 school year.
Trained tutors so students could help other students after school.</p>
       </div>
       </div>
     </div>
   </div> 
  </div> 
  </div>
  );
}

export default About;
