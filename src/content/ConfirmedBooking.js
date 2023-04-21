import "./styles/ConfirmedBooking.css"

const ConfirmedBooking = ({ dataReceived}) => {
  console.log("received", dataReceived);

  return (
    <div className="ConfirmedBooking">
      <div className="confirmation-container">
        <h1 className="confirmation-header">Thank you!</h1>

          <p>{dataReceived.name}</p>

      </div>
    </div>
  );
};

export default ConfirmedBooking