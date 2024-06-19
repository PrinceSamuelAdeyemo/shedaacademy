//React imports
import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";

//Components
import FAQ from '../components/FAQ';

//Styling
import "../assets/styles/homepage.css"

const Homepage = () => {
  return (
    <div className="w-screen overflow-hidden">
    <HelmetProvider>
      <Helmet>
          <title></title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <link href="fontawesome-icons\css\all.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


          <link rel="stylesheet" href="index.css" type="text/css" />
          <link rel="stylesheet" href="output.css" type="text/css" />

          <script src="landingpage.js"></script>
      </Helmet>

      <div className='container flex flex-col gap-8 justify-center items-center'>

        <div id='intro-div' className='flex flex-col items-center gap-4 h-[50vh] w-[90%]'>
          <div className='flex justify-between outline-white border-2 border-white rounded-2xl text-white h-12 w-[85%]'>
            <p className='text-black bg-white rounded-2xl'>Trusted by</p>
            <p>400+ Students</p>
            <p>imgs</p>
          </div>
          <div>
            <h1>Take Your Career To The Next Level</h1>
            <p>Sheda House Is a Creative Hub Located At The Heart Of Ibadan. We Are A Team of Creatives. Join Sheda House to interact, play, learn, create and discover.</p>
          </div>
          <div className='flex flex-col'>
            <button className='bg-white text-red-600'>Take assessment</button>
            <button className='text-white'>Download our brochure</button>
          </div>
        </div>

        <div id='howitworks' className='flex flex-col w-[90%]'>
          <p>How It Works</p>
          <div className='flex'>
            <p>1</p>
            <div>
              <p>Take assessment</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
          <div className='flex'>
            <p>1</p>
            <div>
              <p>Take assessment</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
          <div className='flex'>
            <p>1</p>
            <div>
              <p>Pay tuition fee and lessons start</p>
              <p>The assessment helps us to know if you qualify for the academy and recommend courses that are a good fit for you</p>
            </div>
          </div>
        </div>

        <div id='courses-offering' className=' w-[90%]'>
          <h1>Courses We Offer</h1>
          <div>
            <p><img src="" alt="" /></p>
            <button>Physical</button>
            <p>Front End Web Development (Virtual)</p>
            <p>Become a Front End Web Developer in 4 months</p>
            <button>Learn More <i><span>++</span></i></button>
            <div className='skill-img-div'>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <p><img src="" alt="" /></p>
            <button>Physical</button>
            <p>Front End Web Development (Virtual)</p>
            <p>Become a Front End Web Developer in 4 months</p>
            <button>Learn More <i><span>++</span></i></button>
            <div className='skill-img-div'>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <p><img src="" alt="" /></p>
            <button>Physical</button>
            <p>Front End Web Development (Virtual)</p>
            <p>Become a Front End Web Developer in 4 months</p>
            <button>Learn More <i><span>++</span></i></button>
            <div className='skill-img-div'>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <p><img src="" alt="" /></p>
            <button>Physical</button>
            <p>Front End Web Development (Virtual)</p>
            <p>Become a Front End Web Developer in 4 months</p>
            <button>Learn More <i><span>++</span></i></button>
            <div className='skill-img-div'>
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div id='' className=' w-[90%]'>
          <h1>Project based learning and hands on practical to build a portfolio of live projects </h1>
          <div>
            <img src="" alt="" />
            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
            <p>Mr. Ben (UI/UX Mentor)</p>
          </div>
        </div>

        <div id='review' className=' w-[90%]'>
          <h1>Reviews</h1>
          <p>Hear what our previous students have to say</p>
          <div>
            <img src="" alt="" />
            <p>Betty O.</p>
            <p>UI/UX Student</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Betty O.</p>
            <p>UI/UX Student</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Betty O.</p>
            <p>UI/UX Student</p>
          </div>
        </div>

        <FAQ />

        

      </div>
</HelmetProvider>
    </div>
  )
}

export default Homepage