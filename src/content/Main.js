import { Routes, Route, Form } from 'react-router-dom';
import { useReducer, useState, useEffect } from 'react';
import { fetchAPI } from "../api";
import "./styles/Main.css"
import About from './About';
import Home from './Home';
import Menu from './Menu';
import ConfirmedBooking from './ConfirmedBooking';
import Reservation from './Reservation';
import submitted from "./Reservation";
import formData from "./Reservation"
import OrderOnline from './OrderOnline';
import Login from './Login';

const Main = () => {

  const [availableOccasions] = useState([
    { value: '01', label: 'Birthday' },
    { value: '02', label: 'Anniversary' },
    { value: '03', label: 'Engagement' },
  ]);

  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  }, [selectedDate]);

  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/confirmedBooking' element={<ConfirmedBooking />} />
        <Route path='/reservation' element={<Reservation
          availableOccasions={availableOccasions}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          setSelectedDate={setSelectedDate}
        />} />
        <Route path='/online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default Main;
