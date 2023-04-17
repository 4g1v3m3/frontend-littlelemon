import { useReducer, useState } from "react";
import "./styles/Reservation.css";
import NumericInput from "react-numeric-input";

const Reservation = ({ availableOccasions, availableTimes, initializeTimes, updateTimes }) => {
  const [selectDate, dispatch] = useReducer(updateTimes, initializeTimes);
  const [value, setValue] = useState(1);
  const [time, setTime] = useState('17');
  const [option, setOption] = useState('01');

  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateChange = (date) => {
    dispatch(date);
  };

  return (
    <div className="Reservation">
      <form className="booking-form" onSubmit={handleSubmit} >
      <h1 className="book-header">Book now!</h1>
        <label htmlFor="res-date">Choose date:</label>
        <input className="form-input-field" type="date" selected={selectDate} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time:</label>
        <select className="form-input-field" id='res-time' value={time} onChange={handleChangeTime}>
          {availableTimes?.map((item) => (
            <option key={item.value}>{item.label}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests:</label>
        <NumericInput className="form-input-field" min={0} max={10} value={value} onChange={handleChangeValue} />
        <label htmlFor="occasion">Occasion:</label>
        <select className="form-input-field" id="occasion" value={option} onChange={handleOptionChange}>
          {availableOccasions?.map((item) => (
            <option key={item.value}>{item.label}</option>
          ))}
        </select>
        <input className="button" type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default Reservation;
