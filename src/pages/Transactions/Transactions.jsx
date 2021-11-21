import React from "react";
import { Container } from "../../styles/globals";
import ExpenseForm from "../../components/ExpenseForm";
import IncomeForm from "../../components/IncomeForm";
import styled from "styled-components";
import Transaction from "../../components/Transaction";

const Expense = () => {
	return (
		<div>
			<Container>
				<FlexBox>
					<IncomeForm />
					<ExpenseForm />
				</FlexBox>
				<TransactionsContainer>
					<h4>Transaction history</h4>
					<Transaction />
				</TransactionsContainer>
			</Container>
		</div>
	);
};

export default Expense;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;

	& > div {
		flex: 1;
	}
`;

const TransactionsContainer = styled.div`
	padding: 2rem 0;

	& > h4 {
		padding-bottom: 2rem;
	}
`;
