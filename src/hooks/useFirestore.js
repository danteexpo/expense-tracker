import { useReducer } from 'react';
import { db, timestamp } from '../firebase/config';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {
        ...state,
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    case 'ADDED_DOCUMENT':
      return {
        ...state,
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case 'DELETED_DOCUMENT':
      return {
        ...state,
        document: null,
        isPending: false,
        error: null,
        success: true,
      };
    case 'ERROR':
      return {
        ...state,
        document: null,
        isPending: false,
        error: action.payload,
        success: null,
      };
    default:
      return state;
  }
};

export const useFirestore = (myCollection) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);

  const addDocument = async (document) => {
    dispatch({ type: 'IS_PENDING' });

    let ref = collection(db, myCollection);

    const createdAt = timestamp.fromDate(new Date());

    await addDoc(ref, { ...document, createdAt })
      .then((res) => {
        dispatch({ type: 'ADDED_DOCUMENT', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err.message });
      });
  };

  const deleteDocument = async (myCollection, id) => {
    dispatch({ type: 'IS_PENDING' });
    await deleteDoc(doc(db, myCollection, id))
      .then(() => {
        dispatch({ type: 'DELETED_DOCUMENT' });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err.message });
      });
  };

  return { addDocument, deleteDocument, state };
};
