const TransactionList = ({ documents }) => {
  return (
    <ul>
      {documents.map((document) => (
        <li
          key={document.id}
          className="my-8 mx-auto shadow-md p-5 flex items-center relative overflow-hidden border-l-4 border-l-[#1f9751]"
        >
          <p className="text-lg font-light">{document.name}</p>
          <p className="text-lg ml-auto font-semibold">${document.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
