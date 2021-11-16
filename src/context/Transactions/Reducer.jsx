const TransactionsReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};

		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.id
				),
			};
		default:
			return state;
	}
};

export default TransactionsReducer;
