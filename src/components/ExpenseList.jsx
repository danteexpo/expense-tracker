// img
import Trash from '../assets/trash.svg';
// hooks
import { useFirestore } from '../hooks/useFirestore';

const ExpenseList = ({ documents }) => {
  const { deleteDocument } = useFirestore();

  return (
    <ul>
      {documents.map((document) => (
        <li
          key={document.id}
          className="my-8 mx-auto shadow-md p-5 flex items-center relative overflow-hidden border-l-4 border-l-[#1f9751]"
        >
          <p className="text-lg font-light">{document.name}</p>
          <p className="text-xl ml-auto font-semibold">${document.amount}</p>
          <img
            src={Trash}
            alt=""
            className="ml-4 md:ml-8 h-6 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200"
            onClick={() => deleteDocument('expenses', document.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
