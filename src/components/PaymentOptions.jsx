const PaymentOptions = ({ togglePaymentButton }) => {
    return (
      <div className="payment-options">
        <label htmlFor="paymentMethod">How do you want to make your payment?<span>*</span></label>
        <div>
          <input type="radio" id="cashPayment" name="paymentMethod" value="cash" required onClick={() => handlePaymentMethod('cash')} />
          <label htmlFor="cashPayment">Cash Payment In the Vehicle</label>
          <br />
          <input type="radio" id="onlinePayment" name="paymentMethod" value="online" required onClick={() => handlePaymentMethod('online')} />
          <label htmlFor="onlinePayment">Online Payment</label>
          <br />
          <input type="radio" id="halfPayment" name="paymentMethod" value="half" required onClick={() => handlePaymentMethod('half')} />
          <label htmlFor="halfPayment">Half Cash and Half Online</label>
        </div>
      </div>
    );
  };
  
  export default PaymentOptions;