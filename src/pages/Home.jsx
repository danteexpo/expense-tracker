// components
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
// hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');

  console.log(documents);

  return (
    <div className="grid grid-cols-[2fr_1fr] max-w-[1080px] my-16 mx-auto">
      <div className="pr-8">
        <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
          Transactions
        </h3>
        {error && <p>{error}</p>}
        {documents && <TransactionList documents={documents} />}
      </div>
      <div className="pl-8">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
