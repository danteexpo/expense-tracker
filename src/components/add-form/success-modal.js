import React from 'react';
import Modal from 'react-modal';
import './success-modal.css';
import home from '../../assets/home.svg';
import { Link } from 'react-router-dom';

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#121212',
      borderRadius: '10px',
    },
  };
  
  return (
    <Modal ariaHideApp={false} isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <div>Expense Added Successfully!</div>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
          <div className='btn-home'>
            <img src={home} alt="" className='btn-img'/>
            Go Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
