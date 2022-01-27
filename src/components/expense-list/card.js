import React from 'react';
import './expense-list.css';
import trashcan from '../../assets/trashcan.svg';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';

const Card = ({ item, notifySuccess }) => {

  const time = moment(item.createdAt).fromNow();

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }

  return (
    <div className='card-container'>
      <div className='intro-info'>
        {item.input}
        <p className='moment-info'>{time}</p>
      </div>
      <div className='money-delete'>
        ${item.amount}
        <img src={trashcan} alt="" className='trashcan' onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default Card;
