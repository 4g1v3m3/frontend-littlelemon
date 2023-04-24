import "./styles/ConfirmedBooking.css"

const ConfirmedBooking = () => {


  return (
    <div className="ConfirmedBooking">
      <div className="confirmation-container">
        <h1 className="confirmation-header">Thank you!</h1>
          <p className="confirmation-p">Our team will review your booking request and confirm availability for the date and time you have requested. Once we have confirmed your booking, we will send you a confirmation call you on the phone number provided. </p>
          <p className="confirmation-p">If for any reason we are unable to accommodate your request, we will contact you as soon as possible to discuss alternative options.</p>
          <p className="confirmation-p">In the meantime, please do not hesitate to contact us if you have any questions or concerns about your reservation. We look forward to welcoming you to our restaurant soon!</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking