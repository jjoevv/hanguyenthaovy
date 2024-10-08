import { useRef, useState } from 'react';
import { images } from '../data/images';

const imageList = [
    { src: images.des1, name: 'Event Guideboard', info: 'A guideboard designed by the club for the Back To School event, providing essential information about location, and activities.' },
    { src: images.des2, name: 'Card Design', info: 'A beautifully crafted greeting card design, showcasing creativity and thoughtful details for special occasions.' },
    { src: images.des3, name: 'Handheld Hashtags', info: 'Promotional handheld hashtags displayed at the event to engage participants and encourage social media sharing.' },
    { src: images.des4, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
    { src: images.des5, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
    { src: images.des6, name: 'Club Introduction Design', info: 'A visually appealing design introducing the club`s members, highlighting their roles and contributions to foster a sense of community and collaboration' },
    { src: images.des7, name: 'Promotion', info: 'A post Back to school promotion' },
    { src: images.des8, name: 'Promotion', info: 'A post Back to school promotion' },
    { src: images.des9, name: 'Member Card', info: '' },
    { src: images.des10, name: 'Cover book', info: 'A creative design for a non-profit storytelling campaign, aimed at raising awareness and funds for a meaningful cause' },
    { src: images.des11, name: 'Promotion', info: 'A post Back to school promotion' },
    { src: images.des14, name: 'App Learning UX/UI Design', info: 'Coming soon' },
    { src: images.animation1, name: 'UX exercise', info: '' },
];

const ImageCarousel = () => {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null); // State để theo dõi chỉ số của hình ảnh đang hover
  

 

  const handleMouseEnter = (index: number) => {
    setIsHoveredIndex(index); // Set the index of the hovered image
  };

  const handleMouseLeave = () => {
    setIsHoveredIndex(null); // Reset the hover state
  };

  return (
    <section id="design" className="md:mt-60 mb-40 ovverflow-x-hidden">
      <div className="container mx-auto flex md:items-center items-start justify-center md:flex-row flex-col">
        {/* Cột 1: Latest Projects */}
        <div className=" md:flex md:flex-col md:w-1/5">
          <h2 className="text-2xl text-dark-green  md:text-gray-400 md:text-4xl lg:text-6xl lg:rotate-90 md:rotate-90 whitespace-nowrap font-bold ">
            Other Designs
          </h2>
        </div>
        <div
          className={`inline-flex flex-nowrap overflow-hidden responsive-mask ${isHoveredIndex !== null ? 'paused' : ''}`}
          onMouseOut={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
        >
          <ul
            ref={ulRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {imageList.map((image, index) => (
              <li key={index} className="relative p-2 group block" 
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={()=>handleMouseEnter(index)}
              >
                <img src={image.src} alt={image.name} onMouseEnter={() => handleMouseEnter(index)} className="inset-0 h-[40vh] object-contain" />
                {/* Hiển thị thông tin khi hover */}
                {isHoveredIndex === index && (
                  <div 
                  onMouseEnter={() => handleMouseEnter(index)} 
                  onClick={()=>handleMouseEnter(index)}
                  className="select-none absolute bottom-0 left-0 bg-black text-white p-2 opacity-80 transition-opacity duration-300">
                    <h3>{image.name}</h3>
                    <p>{image.info}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </section>
   
  );
};

export default ImageCarousel;
