import React from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Card from './card';
import './expense-list.css'

const ExpenseList = () => {

  const {expenseList: list, input } = useSelector(state => state.expenses);
  const filteredList = list.filter(item => item.input.includes(input));
  const notifySuccess = () => toast.success('Expense Deleted');

  return (
  <div className='expense-list'>
    <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    {filteredList.length ? (
      filteredList.map(item => {
        return <Card key={item.createdAt} item={item} notifySuccess={notifySuccess}/>
      })
    ): `Your expense list is empty.`}
  </div>
  );
};

export default ExpenseList;
