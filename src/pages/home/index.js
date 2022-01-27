import React from 'react';
import ExpenseList from '../../components/expense-list';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <ExpenseList/>
    </div>
  );
};

export default Home;
