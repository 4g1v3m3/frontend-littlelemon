import { useState } from "react";
import "./styles/Reservation.css";
import { submitAPI } from "../api";
import { useNavigate } from "react-router";
import ConfirmedBooking from "./ConfirmedBooking";

const Reservation = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    date: '',
    time: '',
    persons: '',
    occasion: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [rerender, setRerender] = useState(false);

  const onChangeHandler = (e) => {
    setFormData(()=>({
        ...formData,
        [e.target.name]: e.target.value
    }))
    console.log(formData)
    if (e.target.name === 'date') {
      props.setSelectedDate(new Date(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formData);
    submitAPI(formData);
    setSubmitted(true);
    setRerender(!rerender);
    navigate("/confirmedBooking");
  };

  const navigate = useNavigate();


  return (
    <div className="Reservation">
        <form className="booking-form" onSubmit={handleSubmit} >
          <h1 className="book-header">Book now!</h1>
          <label className="form-input-label" htmlFor="name">Name:</label>
          <input className="form-input-field" required
            value={formData.name}
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={onChangeHandler}
          />
          <label className="form-input-label" htmlFor="tel">Tel:</label>
          <input className="form-input-field" required
            value={formData.tel}
            id="tel"
            type="tel"
            placeholder="+1000000"
            name="tel"
            onChange={onChangeHandler}
          />
          <label className="form-input-label" htmlFor="date">Date:</label>
          <input className="form-input-field" required
            value={formData.date}
            id="date"
            type="date"
            name="date"
            onChange={onChangeHandler}
          />
          <label className="form-input-label">Time:</label>
          <select
            className="form-input-field" required
            name="time"
            id="time-select"
            onChange={onChangeHandler}>
            {props.availableTimes.map((i) => {
              return (<option value={i.value}>{i.label}</option>)
            })}
          </select>
          <label className="form-input-label">Occasion:</label>
          <select className="form-input-field" required
            name="occasion"
            onChange={onChangeHandler}>
              {props.availableOccasions.map(i => {
                return (<option>{i.label}</option>
                )})}
          </select>
          <label className="form-input-label">Number od guests:</label>
          <input className="form-input-field" required
            value={formData.persons}
            type="number"
            name="persons"
            min="1"
            max="20"
            onChange={onChangeHandler}
          />
          <button disabled={
            !formData.name ||
            !formData.tel ||
            !formData.persons ||
            !formData.date
            }
            aria-label="On Click"
            className="button"
            type="submit">
              Make your reservation!
          </button>
        </form>
        {submitted && <ConfirmedBooking formData={formData} rerender={rerender} />}
    </div>
  );
};

export default Reservation;
