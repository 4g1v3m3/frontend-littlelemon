import { Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';
import "./styles/Main.css"
import Home from './Home';
import Reservation from './Reservation';

const initializeTimes = () => {
  return [
    { value: '17', label: '17:00' },
    { value: '18', label: '18:00' },
    { value: '19', label: '19:00' },
    { value: '20', label: '20:00' },
    { value: '21', label: '21:00' },
    { value: '22', label: '22:00' },
    { value: '23', label: '23:00' }
  ];
};

const updateTimes = (selectedDate) => {
  return initializeTimes();
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [availableOccasions, setAvailableOccasions] = useState([
    { value: '01', label: 'Birthday' },
    { value: '02', label: 'Anniversary' },
    { value: '03', label: 'Engagement' },
  ]);

  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation' element={<Reservation
          availableTimes={availableTimes}
          dispatch={dispatch}
          availableOccasions={availableOccasions}
          setAvailableOccasions={setAvailableOccasions}
          initializeTimes={initializeTimes}
          updateTimes={updateTimes}
        />} />
      </Routes>
    </div>
  );
};

export default Main;