import React, { useContext } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { TransactionsContext } from "../context/Transactions";

const Transaction = ({ amount, type, id, description, date }) => {
	const { deleteTransaction } = useContext(TransactionsContext);

	return (
		<Wrapper type={type}>
			<h4>{amount}</h4>
			<p>{description}</p>
			<DeleteIcon onClick={() => deleteTransaction(id)}>
				<MdDelete />
			</DeleteIcon>
		</Wrapper>
	);
};

export default Transaction;

const Wrapper = styled.div`
	position: relative;
	padding: 1rem 0.875rem;
	background-color: ${({ type }) => {
		if (type === "expense") return "hsla(357, 100%, 50%, 0.2)";
		if (type === "income") return "hsla(151, 100%, 50.2%, 0.1)";
	}};
	margin: 1rem 0;
	color: #000000;

	h4 {
		padding-bottom: 0.5rem;
		font-size: 1.5rem;
	}

	p {
		color: #636363;
	}
`;

const DeleteIcon = styled.div`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	font-size: 2rem;
`;
