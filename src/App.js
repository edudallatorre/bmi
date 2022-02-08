import { useState } from 'react'
import './app.css'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [message, setMessage] = useState('')

function calculateBMI() {
  const hei = height / 100
  const bmi = weight / (hei * hei)

  if (bmi < 18.6) {
    setMessage("You're underweight! Your BMI: " + bmi.toFixed(2))
  } else if (bmi >= 18.6 && bmi < 24.9) {
    setMessage("Ideal weight! Your BMI: " + bmi.toFixed(2))
  } else if (bmi >= 24.9 && bmi < 34.9) {
    setMessage("You are slightly overweight! Your BMI: " + bmi.toFixed(2))
  } else if (bmi > 34.9) {
    setMessage("Be careful you are overweight! Your BMI: " + bmi.toFixed(2))
  }
}

  return (
    <div className="app">
      <h1>BMI - Body Mass Index</h1>
      <span>You can calculate your BMI</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Weight in (kg) e.g. 86" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}          
        />
        <input 
          type="text"
          placeholder="Height in (cm) e.g. 182"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>
           Calculate
        </button>

        <h2>{message}</h2>
      </div>
    </div>
  )
}