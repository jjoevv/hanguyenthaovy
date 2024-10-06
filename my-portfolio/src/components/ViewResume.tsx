
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import cv from '../assets/HaNguyenThaoVy.pdf'; // Import the PDF file

const ViewResumeButton = () => {
  return (
    <div className=" flex justify-start" >
      {/* Button to open PDF */}
      <div className="flex items-center justify-center py-2">
        <a 
          href={cv} 
          target="_blank"  // Opens the PDF in a new tab
          rel="noopener noreferrer"  // Security: prevents malicious code execution
          className="flex items-center justify-center border-0"
        >
          
          View resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2 transform hover:translate-x-1 hover:-translate-y-1 transition duration-500 ease-in-out'/>
        </a>
      </div>
    </div>
  );
};

export default ViewResumeButton;
