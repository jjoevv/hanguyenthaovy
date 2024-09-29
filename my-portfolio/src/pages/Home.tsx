import React from 'react';
import backgroundImage from './../assets/imgs/bg.png'

import ProjectSection from '../components/ProjectSection';
import InformationSection from '../components/InformationSection';
import ScrollToSections from '../components/ScrollToSection';


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
        <section id="home" className="h-screen flex items-center justify-center " >
          <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
            <h1 className="text-5xl text-white font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-300 mb-6">
              I am a passionate developer dedicated to creating impactful web experiences.
            </p>
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
              View My Projects
            </a>
          </div>
        </section>

        {/* Phần Information */}
        <InformationSection/>
        
        {/* Phần Projects */}
        <ProjectSection/>

        <ScrollToSections/>
      </div>
    </div>
  );
};

export default Home;
