import React, { FC, useState } from 'react';
import css from './Contact.module.css';
// import { sendFeedback } from './Feedback';


interface ContactProps {
  address: string;
  email: string;
  feedbackText: string;
  phone: string;
}

const getGoogleMapUrl = (address: string): string => {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Замініть на свій ключ API
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;
};

const Contact: FC<ContactProps> = ({ address, email, feedbackText, phone }) => {
  const [userEmail, setUserEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };
  // const handleFeedbackSubmit = async () => {
  //   try {
  //     // Виклик функції для відправки відгуку
  //     await sendFeedback(userEmail, userFeedback);

  //     // Очищення полів вводу після успішного відправлення
  //     setUserEmail('');
  //     setUserFeedback('');
  //   } catch (error) {
  //     console.error('Error submitting feedback:', error);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      // Викликати функцію асинхронної відправки листа з введеним електронним адресом і текстом відгуку
      await sendFeedback(userEmail, feedback);

      // Після успішного відправлення, очистіть стан форми
      setUserEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Помилка відправлення відгуку:', error);
      // Обробити помилку відправлення, якщо потрібно
    }
  };

  // Приклад функції для відправки відгуку (потрібна реалізація на сервері)
  const sendFeedback = async (userEmail: string, feedback: string) => {
    // Використовуйте API для відправки листа на вказаний електронний адрес
    console.log(`Відправка відгуку на ${userEmail} з текстом: ${feedback}`);
    // Вставте свій код для відправки листа тут
  };

  return (
    <div className={css.container}>

      {/* Форма відгуку */}
      <div className={css.feedbackForm}>
        <h3>Leave a Feedback</h3>
        <input
          type="email"
          placeholder="Your email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Write your feedback here..."
          rows={4}
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className='text-center'>
      <h5 > Наші контакти </h5>
      {/* Контактна інформація */}
      <div className={css.contactInfo}>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Телефон:</strong> {phone}
        </p>
      </div>

      </div>

    </div>
  );
};

export default Contact;
