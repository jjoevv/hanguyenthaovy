import { useState } from 'react'

import travel1 from './../../assets/imgs/travel (1).png';
import travel2 from './../../assets/imgs/travel (2).png';
import travel3 from './../../assets/imgs/travel (3).png';
import travel4 from './../../assets/imgs/travel (4).png';
import travel5 from './../../assets/imgs/travel (5).png';
import travel6 from './../../assets/imgs/travel (6).png';
import travel7 from './../../assets/imgs/travel (7).png';
import travel8 from './../../assets/imgs/travel (8).png';
import travel9 from './../../assets/imgs/travel (9).png';
import travel10 from './../../assets/imgs/travel (10).png';
import travel11 from './../../assets/imgs/travel (11).png';
import travel12 from './../../assets/imgs/travel (12).png';
import travel13 from './../../assets/imgs/travel (13).png';
import travel14 from './../../assets/imgs/travel (14).png';
import travel15 from './../../assets/imgs/travel (15).png';


const travelImages = [
    travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9, travel10,
    travel11, travel12, travel13, travel14, travel15
];

const Detail = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
            <div className="flex flex-col items-center mt-10">
                {travelImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Travel ${index + 1}`}
                        className="w-9/12 object-cover rounded-md shadow-md"
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-100">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected Travel"
                            className="max-w-full max-h-full rounded-md mt-10"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-xl bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail