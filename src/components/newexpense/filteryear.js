import React from 'react'
import './filteryear.css'
const filteryear=(props)=>{
    const dropdownChangeHandler=(event)=>{
       props.onChangeFilter(event.target.value)

    };

return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option> 
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
);
};
export default filteryear;