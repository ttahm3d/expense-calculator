import React, { useContext } from "react";
import { Container } from "../../styles/globals";
import ExpenseForm from "../../components/ExpenseForm";
import IncomeForm from "../../components/IncomeForm";
import styled from "styled-components";
import { TransactionsContext } from "../../context/Transactions";

const Expense = () => {
	const { transactions } = useContext(TransactionsContext);

	console.log(transactions);

	return (
		<div>
			<Container>
				<FlexBox>
					<IncomeForm />
					<ExpenseForm />
				</FlexBox>
				<p>Transaction history</p>
			</Container>
		</div>
	);
};

export default Expense;

export const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;

	& > div {
		flex: 1;
	}
`;
