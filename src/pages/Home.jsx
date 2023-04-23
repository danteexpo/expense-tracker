import { useState } from 'react';
// components
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Stats from '../components/Stats';
// hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';
// img
import StatsIcon from '../assets/stats.svg';
import ListIcon from '../assets/list.svg';
import Shopping from '../assets/shopping.svg';
import Meal from '../assets/meal.svg';
import Grocery from '../assets/grocery.svg';
import Recreation from '../assets/recreation.svg';
import Utility from '../assets/utility.svg';
import Others from '../assets/others.svg';

const categories = [
  { name: 'Shopping', img: Shopping, bg: 'bg-[#0095D7]' },
  { name: 'Meal', img: Meal, bg: 'bg-[#9A57C0]' },
  { name: 'Grocery', img: Grocery, bg: 'bg-[#00C9C8]' },
  { name: 'Recreation', img: Recreation, bg: 'bg-[#ED4849]' },
  { name: 'Utility', img: Utility, bg: 'bg-[#C66D00]' },
  { name: 'Others', img: Others, bg: 'bg-[#3B4A3F]' },
];

const Home = () => {
  const [viewStats, toggleStats] = useState(false);
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'expenses',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  return (
    <>
      {viewStats ? (
        <div className="max-w-[1080px] my-8 md:my-16 p-5 xl:p-0 mx-auto">
          <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
            Expense Statistics
          </h3>
          {documents && <Stats documents={documents} />}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-[1080px] my-8 md:my-16 p-5 xl:p-0 mx-auto">
          <div className="order-2 md:order-1 md:pr-8">
            <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
              Expense List
            </h3>
            {error && <p>{error}</p>}
            {documents && <ExpenseList documents={documents} />}
          </div>
          <div className="order-1 md:order-2 mb-8 md:pl-8">
            <ExpenseForm uid={user.uid} categories={categories} />
          </div>
        </div>
      )}
      <img
        src={viewStats ? ListIcon : StatsIcon}
        alt=""
        className="fixed bottom-5 right-5 w-12 md:w-14 lg:w-16 cursor-pointer hover:scale-110 transition-all duration-200"
        onClick={() => toggleStats((prev) => !prev)}
      />
    </>
  );
};

export default Home;
