import React from 'react';
import './add-expense.css';
import back from '../../assets/back.svg';
import { Link } from 'react-router-dom';
import AddForm from '../../components/add-form';

const AddExpense = () => {
  return (
  <div className='add-expense'>
    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
      <div className='back-container'>
        <img src={back} alt="" className='back-img' />
        <p className='back-text'>Back</p>
      </div>
    </Link>
    <AddForm/>
  </div>
  );
};

export default AddExpense;
