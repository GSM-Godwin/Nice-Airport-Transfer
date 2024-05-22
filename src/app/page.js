"use client"

import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import Counter from '../components/Counter';
import ReturnFields from '../components/ReturnFields';
import FareText from '../components/FareText';
import PaymentOptions from '../components/PaymentOptions';

export default function Home() {
  // State to track passenger count and luggage count
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(1);

  // Function to increment the count
  const incrementValue = (countType) => {
    if (countType === 'passengerCount') {
      setPassengerCount((prevCount) => prevCount + 1);
    } else if (countType === 'luggageCount') {
      setLuggageCount((prevCount) => prevCount + 1);
    }
  };

  // Function to decrement the count
  const decrementValue = (countType) => {
    if (countType === 'passengerCount' && passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
    } else if (countType === 'luggageCount' && luggageCount > 0) {
      setLuggageCount((prevCount) => prevCount - 1);
    }
  };

  // Placeholder function for handling payment
  const handlePayment = () => {
    initiateOnlinePayment();

    // If you are handling a cash payment, you might want to display a message to the user
    alert("Booking successful. Your ride would arrive soon. Please pay your fare in the vehicle.");
  
    // After handling the payment, you can also send a confirmation email
    sendEmail();
  };
  
  // Placeholder function for initiating the online payment process
  const initiateOnlinePayment = () => {
    // Add your logic for initiating online payment here
    // This could involve interacting with a payment gateway or other relevant services
    alert("Initiating online payment...");
  };
  
  // Placeholder function for sending an email
  const sendEmail = () => {
    // Add your logic for sending an email here
    // This could involve interacting with an email service or server-side logic
    alert("Sending confirmation email...");
    console.log('Handling payment...');
    // For example, you can initiate an online payment or proceed with cash payment
  };

  // Placeholder function for toggling the payment button visibility
  const togglePaymentButton = () => {
    // Add your logic for toggling the payment button visibility here
    console.log('Toggling payment button...');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const bookRideButton = document.getElementById("bookRideButton");

    if (paymentMethod) {
      bookRideButton.style.display = "block";
    } else {
      bookRideButton.style.display = "none";
    }
  };
  return (
    <div>
      <Head>
        <title>Booking</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>

      <main className="mx-5 my-10">
        <Header />
        <section>
          <div className="container flex justify-between items-center mb-5">
            <div className="info-box text-center">
              <div className="circle">
                <img src="/Images/phone-icon.png" alt="Phone Icon" />
              </div>
              <p>1. Book your trip</p>
            </div>
            <div className="info-box text-center">
              <div className="circle">
                <img src="/Images/card-icon.png" alt="ATM Card Icon" />
              </div>
              <p>2. Pay online or in the vehicle</p>
            </div>
            <div className="info-box text-center">
              <div className="circle">
                <img className="mail" src="/Images/email-icon.png" alt="Email Icon" />
              </div>
              <p>3. Receive confirmation email</p>
            </div>
            <div className="info-box text-center">
              <div className="circle">
                <img src="/Images/car-icon.png" alt="Car Icon" />
              </div>
              <p>4. Board the vehicle</p>
            </div>
          </div>
          <InfoBox />
        </section>
        <form id="bookingForm">
          <label htmlFor="pickupLocation">Pickup Location:<span>*</span></label>
          <input type="text" id="pickupLocation" name="pickupLocation" required className="w-full p-2 border border-gray-300 rounded" />
          <label htmlFor="dropoffLocation">Drop-off Location:<span>*</span></label>
          <input type="text" id="dropoffLocation" name="dropoffLocation" placeholder="click to start typing your destination" required className="w-full p-2 border border-gray-300 rounded" />
          <div className="flex">
            <div className="block">
              <label htmlFor="pickupDate">Pickup Date:<span>*</span></label>
              <input type="date" id="pickupDate" name="pickupDate" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="block">
              <label htmlFor="pickupTime">Pickup Time (24-hour format):<span>*</span></label>
              <input type="time" id="pickupTime" name="pickupTime" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          {/* ... other form fields ... */}
          <FareText />
          <PaymentOptions togglePaymentButton={togglePaymentButton}/>
          <button type="button" id="bookRideButton" className="payment bg-blue-500 text-white p-2 rounded" onClick={handlePayment}>
            Book Ride
          </button>
        </form>
      </main>
    </div>
  );
}
