import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

import { Link } from 'react-router-dom'

const BackToHomePageButton = () => {
    const [hoveredSection, setHoveredSection] = useState<boolean | null>(null);

  return (
     <div className="container fixed bottom-6 left-0 flex justify-center">
        
     {/* Back button */}
     <div 
     className={
        `
        flex items-center justify-center px-4 py-2 bg-blue-500  text-white rounded
        bg-blue-dark opacitay-25 transition-x-10 duration-1000 ease-in-out 
         ${hoveredSection === true ? 'px-2 h-8 rounded-full' : 'w-8 h-8 rounded-full'} 
        `
       }
       onMouseEnter={() => setHoveredSection(true)}
        onMouseLeave={() => setHoveredSection(false)}
     >
         <Link
           to="/"
           className='text-center'
         >
             <span className={`text-white font-semibold `}>
              {hoveredSection === true ? 
              <>
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> {/* Arrow icon */}
                <span className=''>Back to homepage</span>
              </>
               : 
               <>
               <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> {/* Arrow icon */}
               </>
           
               }
            </span>
           
         </Link>
     </div>
   </div>
  )
}

export default BackToHomePageButton