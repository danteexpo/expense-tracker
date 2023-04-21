import { useEffect, useState } from 'react';
// hooks
import { useFirestore } from '../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addDocument, state } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  useEffect(() => {
    if (state.success) {
      setName('');
      setAmount('');
    }
  }, [state.success]);

  return (
    <>
      <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
        Add a transaction
      </h3>
      <form className="p-5 bg-[#1f9751]" onSubmit={handleSubmit}>
        <label className="mt-0 mx-auto mb-5 block text-white">
          <span>Name: </span>
          <input
            type="text"
            className="block w-full p-3 mt-2 text-black"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="mt-0 mx-auto mb-5 block text-white">
          <span>Amount ($): </span>
          <input
            type="number"
            className="block w-full p-3 mt-2 text-black"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className="text-white font-bold border-2 border-white py-2 px-3 bg-transparent cursor-pointer block w-full hover:bg-white hover:text-[#1f9751] transition-all duration-200">
          Add
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
