import { useReducer, useState } from "react";
import "../App.css";
import NumericInput from "react-numeric-input";

const Reservation = ({ availableOccasions, availableTimes, initializeTimes, updateTimes }) => {
  const [selectDate, dispatch] = useReducer(updateTimes, initializeTimes());
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
    <form
      className="Reservation"
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: 20,
        justifyContent: "center",
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" selected={selectDate} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id='res-time' value={time} onChange={handleChangeTime}>
        {availableTimes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.resTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <NumericInput min={0} max={10} value={value} onChange={handleChangeValue} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={option} onChange={handleOptionChange}>
        {availableOccasions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.occasion}
          </option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default Reservation;
