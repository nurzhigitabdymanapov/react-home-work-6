import React from 'react'
import "./ExpensesList.css"
export  const ExpensesList = ({el}) =>{
  const dateMonth = new Date(el.date).toLocaleString("en-US", {
    month: "long",
  });
  const dateFullYear = new Date(el.date).getFullYear();
  const date = new Date(el.date).getDate();

  return (
    <div>
      
      <div className='card'>
          <div className='date-block'>
            <span>{dateMonth}</span>
            <span>{dateFullYear}</span>

            <span className='span-date'>{date}</span>
          </div>
          <div className='all-containers'>
            <div className='card-title'>
              <h2>{el.title}</h2>
            </div>
            <div className='price-card-div'>
              <span className="price-card">{el.price}$</span>
            </div>
          </div>
        </div>

    </div>
  )
}
