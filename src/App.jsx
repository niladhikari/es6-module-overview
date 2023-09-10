/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Componets/Watch/Watch';


function App() {

  // const watches = [
  //   { id: 1, name: "Rolex Submariner", price: 10000 },
  //   { id: 2, name: "Omega Seamaster", price: 8000 },
  //   { id: 3, name: "TAG Heuer Carrera", price: 6000 },
  //   { id: 4, name: "Seiko Prospex", price: 500 },
  //   { id: 5, name: "Citizen Eco-Drive", price: 250 },
  //   { id: 6, name: "Fossil Grant", price: 100 },
  //   { id: 7, name: "Casio G-Shock", price: 150 },
  //   { id: 8, name: "Bulova Precisionist", price: 300 },
  //   { id: 9, name: "Tissot T-Touch", price: 700 },
  //   { id: 10, name: "Timex Weekender", price: 50 },
  // ];

  const [watches,setWatches] = useState([]);

  useEffect(()=>{
    fetch('watch.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
