import React from 'react';
import backgroundImage from './../assets/imgs/bg.png'

import ProjectSection from '../components/ProjectSection';
import InformationSection from '../components/InformationSection';
import ScrollToSections from '../components/ScrollToSection';
import MasonryGrid from '../components/MasonryGrid';
import WelcomeSection from '../components/WelcomeSection';



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

        {/* Phần images List */}
        <MasonryGrid/>

        {/* Phần Scroll to sections */}
        <ScrollToSections/>
      </div>
    </div>
  );
};

export default Home;
