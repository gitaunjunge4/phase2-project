import React, { useState } from 'react';

const HoursInput = () => {
  const [hours, setHours] = useState({
    monday: { open: '8:00', close: '16:00' },
    tuesday: { open: '8:00', close: '16:00' },
    wednesday: { open: '8:00', close: '16:00' },
    thursday: { open: '8:00', close: '16:00' },
    friday: { open: '8:00', close: '16:00' },
    saturday: { open: '10:00', close: '16:00' },
    public_holidays: { open: '10:00', close: '16:00' },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [day, field] = name.split('-');

    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hours);
  };

  return (
    <div>
      <h2>Hours of Operation Input</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monday:</label>
          <input
            type="text"
            name="monday-open"
            value={hours.monday.open}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="monday-close"
            value={hours.monday.close}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Tuesday:</label>
          <input
            type="text"
            name="tuesday-open"
            value={hours.tuesday.open}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="tuesday-close"
            value={hours.tuesday.close}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Wednesday:</label>
          <input
            type="text"
            name="wednesday-open"
            value={hours.wednesday.open}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="wednesday-close"
            value={hours.wednesday.close}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Thursday:</label>
          <input
            type="text"
            name="thursday-open"
            value={hours.thursday.open}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="thursday-close"
            value={hours.thursday.end}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Friday:</label>
          <input
            type="text"
            name="friday-start"
            value={hours.friday.start}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="friday-end"
            value={hours.friday.end}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Saturday:</label>
          <input
            type="text"
            name="saturday-start"
            value={hours.saturday.start}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="saturday-end"
            value={hours.saturday.end}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <div>
          <label>Public Holidays:</label>
          <input
            type="text"
            name="public_holidays-start"
            value={hours.public_holidays.start}
            onChange={handleInputChange}
            placeholder="Opening Time"
          />
          -
          <input
            type="text"
            name="public_holidays-end"
            value={hours.public_holidays.end}
            onChange={handleInputChange}
            placeholder="Closing Time"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default HoursInput;
