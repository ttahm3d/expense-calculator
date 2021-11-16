import React, { useReducer } from "react";
import TransactionsContext from "./Context";
import TransactionsReducer from "./Reducer";
import initialState from "./State";

const TransactionsProvider = (props) => {
	// const [transactions, setTransactions] = useState([]);
	const [state, dispatch] = useReducer(TransactionsReducer, initialState);

	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	};

	const deleteTransaction = (id) => {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	};

	return (
		<TransactionsContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction,
				dispatch,
			}}>
			{props.children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
