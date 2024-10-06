import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { informationData } from '../data/information';
import backgroundImage from '../assets/imgs/bg.png';
import SuccessMessage from '../components/SuccessMessage';
import ViewResumeButton from '../components/ViewResume';

const serviceId = import.meta.env.BASE_URL_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control SuccessMessage
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Hàm kiểm tra lỗi khi nhập thiếu
const validateForm = (): boolean => {
  const newErrors: Partial<FormData> = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.message) newErrors.message = 'Message is required';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Something wrong! Please try again.')
    }

    if (form.current) {
      emailjs
        .sendForm(
          serviceId || 'service_ml4n79g', // Service ID
          templateId || 'template_2sl052o', // Template ID
          form.current,
          userId || 'Gnqhr1P781paSy3Ml' // User ID
        )
        .then(
          (result) => {
            console.log('Email sent:', result.text);
            setShowSuccessMessage(true); // Hiển thị SuccessMessage
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Error sending email: ' + error.text);
          }
        );
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:h-screen w-full bg-slate-100 pt-10"
      style={{
        backgroundAttachment: 'fixed', // Giữ hình nền cố định khi cuộn
        backgroundImage: `url(${backgroundImage})`, // Đặt hình nền
        backgroundPosition: 'center', // Căn giữa hình nền
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
      }}
    >
      {/* Cột đầu: Thông tin liên hệ */}
      <div className="flex flex-col justify-center items-start mx-auto mt-10  md:p-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Information</h2>
        <p className="text-lg text-black-700">
          <strong>Phone:</strong> {informationData.contactInfo.phone}
        </p>
        <p className="text-lg mt-8 text-black-700">
          <strong>Email:</strong> {informationData.contactInfo.email}
        </p>
        <p className="text-lg mt-8 text-black-700">
          <strong>Address:</strong> {informationData.contactInfo.address}
        </p>
        <p className="text-lg mt-8 text-black-700">
          <strong>Resume:</strong> 
          <ViewResumeButton/>
        </p>
      </div>

      {/* Cột 2: Input box */}
      <div className="flex flex-col mt-auto mb-6 md:mx-16 p-8 w-100 col-span-2 bg-gray-900 opacity-80">
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Send me a message</h2>
          <h2 className="text-xl mb-4 text-white">Let's work together to build something great.</h2>
          <form ref={form} onSubmit={sendEmail}>
            {/* Input cho tên */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg mb-2 italic text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-lg`}
                placeholder="Enter your name"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
            {/* Input cho email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2 italic  text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg`}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            {/* Input cho message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2 italic  text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-lg`}
                placeholder="Enter your message"
                rows={6}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>
            {/* Nút gửi */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white text-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Hiển thị SuccessMessage nếu gửi email thành công */}
      {showSuccessMessage && (
        <SuccessMessage
          message="Your message has been sent successfully!"
          onClose={() => setShowSuccessMessage(false)} // Đóng SuccessMessage
        />
      )}
    </div>
  );
};

export default Contact;
