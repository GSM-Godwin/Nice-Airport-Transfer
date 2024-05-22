
const InfoBox = () => {
    return (
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
    );
  };
  
  export default InfoBox;
  