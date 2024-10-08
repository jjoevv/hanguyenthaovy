import React from 'react';
import backgroundImage from './../assets/imgs/bg.png'

import ProjectSection from '../components/ProjectSection';
import InformationSection from '../components/InformationSection';
import ScrollToSections from '../components/ScrollToSection';
import WelcomeSection from '../components/WelcomeSection';
import Carousel from '../components/ImageCarousel';



const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundAttachment: 'fixed', // Giữ hình nền cố định khi cuộn
        backgroundImage: `url(${backgroundImage})`, // Đặt hình nền
        backgroundPosition: 'center', // Căn giữa hình nền
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
      }}
    >
      <div className='px-8'>
        {/* Section Welcome */}
       <WelcomeSection/>

        {/* Phần Information */}
        <InformationSection/>
        
        {/* Phần Projects */}
        <ProjectSection/>

        <div 
      className='w-full overflow-hidden'>
          {/* Phần images List */}
          <Carousel/>
          
        </div>

        {/* Phần Scroll to sections */}
        <ScrollToSections/>
      </div>
    </div>
  );
};

export default Home;
