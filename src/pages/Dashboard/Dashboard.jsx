import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { Container } from "../../styles/globals";
import { TransactionsContext } from "../../context/Transactions";
import ExpenseForm from "../../components/ExpenseForm";
import IncomeForm from "../../components/IncomeForm";

const Dashboard = () => {
	const { transactions } = useContext(TransactionsContext);

	const purseRemaining = useMemo(() => {
		let money = 0;
		transactions.forEach((transaction) => {
			if (transaction.type === "expense") {
				money = money - parseFloat(transaction.amount);
			} else if (transaction.type === "income") {
				money = money + parseFloat(transaction.amount);
			}
		});

		return money;
	}, [transactions]);

	return (
		<div>
			<Container>
				<PurseWrapper>
					<p>&#8377; {purseRemaining}</p>
				</PurseWrapper>
				<FlexBox>
					<IncomeForm />
					<ExpenseForm />
				</FlexBox>
			</Container>
		</div>
	);
};

export default Dashboard;

const PurseWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0 2rem;

	p {
		font-size: 2rem;
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;

	& > div {
		flex: 1;
	}
`;
