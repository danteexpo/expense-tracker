// components
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
// hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'expenses',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  console.log(documents);

  return (
    <div className="grid grid-cols-[2fr_1fr] max-w-[1080px] my-16 mx-auto">
      <div className="pr-8">
        <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
          Welcome {user.displayName}, these are your expenses:
        </h3>
        {error && <p>{error}</p>}
        {documents && <ExpenseList documents={documents} />}
      </div>
      <div className="pl-8">
        <ExpenseForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
