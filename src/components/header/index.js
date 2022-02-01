import React, { useState } from 'react';
import './header.css';
import favicon from '../../assets/favicon.svg';
import search from '../../assets/search.svg';
import add from '../../assets/add.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';

const Header = () => {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value)
    dispatch(searchExpense(e.target.value))
  }

  return (
    <header className="header-container">
      <div className='header-notbg'>
        <div className='header'>
          <Link to='/'>
            <img src={favicon} alt="" className='header-logo' />
          </Link>
          <div className='search-container'>
            <input type="text" placeholder='Search for expenses...' value={input} onChange={handleInput} className='header-input'/>
            <img src={search} alt="" className='search-img' />
          </div>
        </div>
        <Link to='/add'>
          <img src={add} alt="" className='add-img' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
