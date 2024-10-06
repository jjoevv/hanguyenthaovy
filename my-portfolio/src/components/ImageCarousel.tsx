import { useEffect, useRef, useState } from 'react';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null); // State để theo dõi chỉ số của hình ảnh đang hover

  // Hàm cuộn tự động
  const autoScroll = () => {
    if (ulRef.current && isHoveredIndex === null) { // Chỉ cuộn khi không có hình ảnh nào đang được hover
      ulRef.current.scrollBy({
        left: 1,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const ul = ulRef.current;

    // Nhân đôi danh sách hình ảnh
    if (ul) {
      const clonedUl = ul.cloneNode(true) as HTMLElement; // Nhân bản danh sách
      ul.insertAdjacentElement('afterend', clonedUl); // Chèn vào DOM
      clonedUl.setAttribute('aria-hidden', 'true');
    }

    // Bắt đầu auto scroll
    intervalRef.current = setInterval(autoScroll, 20);

    // Dọn dẹp interval khi component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setIsHoveredIndex(index); // Đặt chỉ số hình ảnh đang hover
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Dừng auto scroll khi hover
    }
  };

  const handleMouseLeave = () => {
    setIsHoveredIndex(null); // Đặt lại chỉ số hình ảnh đang hover
    intervalRef.current = setInterval(autoScroll, 20); // Bắt đầu lại auto scroll
  };

  return (
    <section id="projects" className="">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Cột 1: Latest Projects */}
        <div className="hidden md:flex md:flex-col md:sticky md:top-0 md:h-screen md:items-center md:justify-center md:w-1/5">
          <h2 className="text-2xl text-gray-500 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
            Other Designs
          </h2>
        </div>
        <div
      className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={ulRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {imageList.map((image, index) => (
          <li key={index} className="relative p-2" onMouseEnter={() => handleMouseEnter(index)}>
            <img src={image.src} alt={image.name} className='h-[40vh] object-contain' />
            {/* Hiển thị thông tin khi hover */}
            {isHoveredIndex === index && (
              <div className="absolute bottom-0 left-0 bg-black text-white p-2 opacity-100 transition-opacity duration-300">
                <h3>{image.name}</h3>
                <p>{image.info}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {imageList.map((image, index) => (
          <li key={index} className="relative" onMouseEnter={() => handleMouseEnter(index)}>
            <img src={image.src} alt={image.name} className='ml:h-[60vh] md:h-[60vh] h-[50vh] object-contain' />
            {/* Hiển thị thông tin khi hover */}
            {isHoveredIndex === index && (
              <div className="absolute bottom-0 left-0 bg-black text-white p-2 opacity-100 transition-opacity duration-300">
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
