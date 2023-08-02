import { useState } from 'react';


function CarForm() {
  const [car, setCar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${car}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your car:
        <input 
          type="text" 
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}


export default CarForm


