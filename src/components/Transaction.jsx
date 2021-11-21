import React from "react";
import { useContext } from "react";
import TransactionsContext from "../context/Transactions/Context";
import styled from "styled-components";

const Transaction = (props) => {
	const { transactions } = useContext(TransactionsContext);

	return (
		<>
			{transactions.map((transaction) => (
				<Wrapper key={transaction.id}>
					<h4>{transaction.amount}</h4>
					<p>{transaction.description}</p>
				</Wrapper>
			))}
		</>
	);
};

export default Transaction;

const Wrapper = styled.div`
	padding: 1rem 0.875rem;
	box-shadow: 0 0 2px 2px hsla(200, 5%, 37%, 0.2);
`;
