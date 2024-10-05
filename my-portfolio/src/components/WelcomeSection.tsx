import { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Event listener for scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="welcome" className="h-screen flex items-center justify-center "  style={{
        transform: `translateY(${-scrollY * 0.5}px)`, // Moves up as you scroll
      }} >
    <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
      <h1 className="text-5xl text-white font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-2xl text-white mb-6">
        I am a passionate developer dedicated to creating impactful web experiences.
      </p>
    </div>
  </section>
  );
};

export default WelcomeSection;
