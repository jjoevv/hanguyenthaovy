import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

import { Link } from 'react-router-dom'

const BackToHomePageButton = () => {
    const [hoveredSection, setHoveredSection] = useState<boolean | null>(null);

  return (
     <div className="container self-start left-1 fixed bottom-6 flex justify-center items-center">
        
     {/* Back button */}
     <div 
     className={
        `
        flex items-center justify-center px-4 py-2 bg-brunswick-green  text-white rounded
         opacitay-25 transition-x-10 duration-1000 ease-in-out  shadow-lg
         ${hoveredSection === true ? 'px-2 h-10 rounded-full' : 'w-10 h-10 rounded-full'} 
        `
       }
       onMouseEnter={() => setHoveredSection(true)}
        onMouseLeave={() => setHoveredSection(false)}
     >
         <Link
           to="/"
           className=''
         >
             <span className={`text-white font-semibold `}>
              {hoveredSection === true ? 
              <>
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> {/* Arrow icon */}
                <span className=''>Back to homepage</span>
              </>
               : 
               <>
               <FontAwesomeIcon icon={faArrowLeft} className="" size='lg' /> {/* Arrow icon */}
               </>
           
               }
            </span>
           
         </Link>
     </div>
   </div>
  )
}

export default BackToHomePageButton