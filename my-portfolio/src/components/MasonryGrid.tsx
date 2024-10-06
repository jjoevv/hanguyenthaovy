import React from 'react';

import des1 from '../assets/imgs/des1.png';
import des2 from '../assets/imgs/des2.png';
import des3 from '../assets/imgs/des4.png';
import des4 from '../assets/imgs/des5.png';
import des5 from '../assets/imgs/des6.png';
import des6 from '../assets/imgs/des7.png';
import des7 from '../assets/imgs/des8.png';
import des8 from '../assets/imgs/des9.png';
import des9 from '../assets/imgs/des10.png';
import des10 from '../assets/imgs/des11.png';
import des11 from '../assets/imgs/des12.jpg';
import des14 from '../assets/imgs/des14.png';
import animation1 from '../assets/imgs/animation1.gif';


const images = [
  { src: des1, name: 'Event Guideboard', info: 'A guideboard designed by the club for the Back To School event, providing essential information about location, and activities.' },
  { src: des2, name: 'Card Design', info: 'A beautifully crafted greeting card design, showcasing creativity and thoughtful details for special occasions.' },
  { src: des3, name: 'Handheld Hashtags', info: 'Promotional handheld hashtags displayed at the event to engage participants and encourage social media sharing.' },
  { src: des4, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
  { src: des5, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
  { src: des6, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
  { src: des7, name: 'Promotion', info: 'A post Back to school promotion' },
  { src: des8, name: 'Promotion', info: 'A post Back to school promotion' },
  { src: des9, name: 'Member Card', info: '' },
  { src: des10, name: 'Cover book', info: 'A creative design for a non-profit storytelling campaign, aimed at raising awareness and funds for a meaningful cause' },
  { src: des11, name: 'Promotion', info: 'A post Back to school promotion' },
  { src: des14, name: 'App Learning UX/UI Design', info: 'Coming soon' },
  { src: animation1, name: 'UX exercise', info: '' },
]

const MasonryGrid: React.FC = () => {
  return (
    <section id='design' className='py-12'>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="hidden md:flex md:flex-col md:sticky md:top-0 md:h-screen md:items-center md:justify-center md:w-1/5">
          <h2 className="text-2xl text-gray-500 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
            Other design
          </h2>
        </div>
        <div className="flex-1 md:w-4/5 overflow-hidden bg-white py-4">
          <div className="w-3/4 md:mx-20 flex flex-col">
            {/* Định nghĩa 3 hàng */}
            <div className="flex flex-row flex-wrap">
              {images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative group bg-gray-200 flex-1 m-2 rounded-lg cursor-pointer"  style={{ minHeight: '280px' }}>
                  {/* Container cho ảnh */}
                  <div className="relative w-full h-full" style={{ paddingBottom: '100%' }}>
                    <img
                      src={image.src}
                      alt={image.name}
                      className="absolute top-0 left-0 w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-75" // Khi hover, ảnh sẽ co lại 75%
                    />
                  </div>

                  {/* Overlay hiển thị thông tin khi hover */}
                  <div className="absolute text-center inset-0 bg-black bg-opacity-80 p-4 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2 cursor-pointer">{image.name}</h3>
                    <p className="text-sm">{image.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-row flex-wrap">
              {images.slice(4, 8).map((image, index) => (
                <div key={index} className="relative group bg-gray-200 flex-1 m-2 rounded-lg cursor-pointer" style={{ minHeight: '280px' }}>
                  {/* Container cho ảnh */}
                  <div className="relative w-full h-full" style={{ paddingBottom: '100%' }}>
                    <img
                      src={image.src}
                      alt={image.name}
                      className="absolute top-0 left-0 w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-75" // Khi hover, ảnh sẽ co lại 75%
                    />
                  </div>

                  {/* Overlay hiển thị thông tin khi hover */}
                  <div className="text-center absolute p-2 inset-0 bg-black bg-opacity-80 p-4 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ">
                    <h3 className="text-lg font-semibold mb-2 ">{image.name}</h3>
                    <p className="text-sm ">{image.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-row flex-wrap">
              {images.slice(9).map((image, index) => (
                <div key={index} className="relative group bg-gray-200 flex-1 m-2 rounded-lg" style={{ minHeight: '280px' }}>
                  {/* Container cho ảnh */}
                  <div className="relative w-full h-full" style={{ paddingBottom: '100%' }}>
                    <img
                      src={image.src}
                      alt={image.name}
                      className="absolute top-0 left-0 w-full h-full rounded-lg  transition-transform duration-300 ease-in-out transform group-hover:scale-75" // Khi hover, ảnh sẽ co lại 75%
                    />
                  </div>

                  {/* Overlay hiển thị thông tin khi hover */}
                  <div className="text-center absolute inset-0 bg-black p-2 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.name}</h3>
                    <p className="text-sm">{image.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default MasonryGrid;
