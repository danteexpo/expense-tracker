import React, { useState } from 'react';
import './add-form.css';
import send from '../../assets/send.svg';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenses'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

const AddForm = () => {

  const [input, setInput] = useState('');

  const [amount, setAmount] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if(isNaN(val)){
      setAmount("");
      return;
    }
    setAmount(val);
  }

  const handleSubmit = () => {
    if(input==="" || amount==="") {
      const notify = () => toast('Enter All Data Please.');
      notify();
      return;
    };
    const data = {
      input,
      amount,
      createdAt: new Date()
    };
    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  } 

  return (
    <div className='add-form'>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input type="text" placeholder='Title...' value={input} onChange={handleInput} className='add-input'/>
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input type="number" placeholder='123...' value={amount} onChange={handleAmount} className='add-input'/>
      </div>
      <div className="last-item" onClick={handleSubmit}>
        <p className='last-text'>Add</p>
        <img src={send} alt="" className='add-img'/>
      </div>
    </div>
  );
};

export default AddForm;
