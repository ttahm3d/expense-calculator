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

	return (
		<TransactionsContext.Provider
			value={{ transactions: state.transactions, addTransaction, dispatch }}>
			{props.children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
