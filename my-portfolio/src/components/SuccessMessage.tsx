import React from 'react';

interface SuccessMessageProps {
  message: string;
  onClose: () => void; // Function để đóng thông báo
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Success!</h2>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
