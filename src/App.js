import React from 'react'
import Expenses from './components/Expenses/Expenses'


const App = (props) => {
  let expenses = [
    {
      id: "e1",
      date: new Date(), //2022, 5, 13
      title: "School Fee",
      amount: 300
    },
    {
      id: "e2",
      date: new Date(), //2022, 5, 13
      title: "Bus Fee",
      amount: 150
    },
    {
      id: "e3",
      date: new Date(), //2022, 5, 13
      title: "Cloths",
      amount: 300
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses item={expenses} />
    </div>
  )
}

export default App