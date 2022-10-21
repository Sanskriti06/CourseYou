import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <p className="ptext">Check out these amazing Courses!</p>
      <p className="ptext2">Get job-ready for an in-demand career</p>
      <p className="ptext2">Break into a new field like information technology or data science. No prior experience necessary to get started.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/dyd911kmh/image/upload/v1646560927/shutterstock_1329434768_bf9003ea47.jpg'
              text='Learn Python:The Complete Python Course'
              label='Python'
              path='/services'
            />
            <CardItem
              src='https://wp.technologyreview.com/wp-content/uploads/2021/05/MIT_AI.Language_final.jpg'
              text='Learning AI for Data Analysis and Visulaisation'
              label='AI'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiaBsbWabfJ67QrNwGxGSxc-Y8n9ovo78PQ&usqp=CAU'
              text='Learn Java from Scratch and OOPs concepts'
              label='Java'
              path='/services'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUY83HUram6t4dP0E1vUpxr5HH8j5D0lmhZhqRuc-l_jDxMPhIW7yY2xiXRQ99YloNo1E&usqp=CAU'
              text='Zero To Hero C++ Complete Course'
              label='C++'
              path='/products'
            />
            <CardItem
              src='https://www.analyticsinsight.net/wp-content/uploads/2021/06/robot-programming-languages.jpg'
              text='Ride through the world with Robotics'
              label='Robotics'
              path='/sign-up'
            />
          </ul>
          <br></br>
          <h3>Top Categories</h3>
          <br></br>
          <ul className='cards__items'>
            <CardItem class="textt"
              src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg'
              label='Explore'
              text='Design'
            />
            <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg'
              label='Explore'
              text='Development'
            />
            <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg'
              label='Explore'
              text='Personal Development'
            />
             <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg'
              label='Explore'
              text='Photography'
            />
            
          </ul>
          <ul className='cards__items2'>
            <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg'
              label='Explore'
              text='Business'
            />
            <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg'
              label='Explore'
              text='Music'
            />
            <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg'
              label='Explore'
              text='IT and Software'
            />
             <CardItem
              src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg'
              label='Explore'
              text='Marketing'
            />
            
          </ul>
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
   <section className="" id="destinations"> 
      {/* <video src={videobg} autoPlay loop muted />   */}
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Additional Courses</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://media.istockphoto.com/photos/complex-math-formulas-on-whiteboard-mathematics-and-science-with-picture-id696935130?s=612x612" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Maths</h4>
                          <p className="card-text text-secondary"> Get the best Maths courses here of all Grades.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://media.istockphoto.com/vectors/students-learn-foreign-languages-online-distance-learning-foreign-vector-id1129395885?s=612x612" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">English</h4>
                          <p className="card-text text-secondary">Learn from the best English courses.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://media.istockphoto.com/photos/attractive-young-woman-exercising-and-sitting-in-yoga-lotus-position-picture-id1156263061?s=612x612" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Yoga and Meditation</h4>
                          <p className="card-text text-secondary">Start your day with Yoga and become fit and healthy.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 
              </div>
        </div>
       </section>


    </div>
    

  );
}

export default Cards;