import React, { useContext } from "react";
import { Container } from "../../styles/globals";
// import ExpenseForm from "../../components/ExpenseForm";
// import IncomeForm from "../../components/IncomeForm";
import styled from "styled-components";
import Transaction from "../../components/Transaction";
import TransactionsContext from "../../context/Transactions/Context";

const Expense = () => {
	const { transactions } = useContext(TransactionsContext);

	return (
		<div>
			<Container>
				<TransactionsContainer>
					<h4>Transaction history</h4>
					{transactions &&
						transactions.map((transaction) => (
							<Transaction key={transaction.id} {...transaction} />
						))}
				</TransactionsContainer>
			</Container>
		</div>
	);
};

export default Expense;

// const FlexBox = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	flex-wrap: wrap;
// 	gap: 1rem;

// 	& > div {
// 		flex: 1;
// 	}
// `;

const TransactionsContainer = styled.div`
	padding: 2rem 0;

	& > h4 {
		padding-bottom: 2rem;
	}
`;
