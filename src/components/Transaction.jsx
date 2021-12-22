import React from "react";
import styled from "styled-components";

const Transaction = ({ amount, type, id, description, date }) => {
	return (
		<Wrapper type={type}>
			<h4>{amount}</h4>
			<p>{description}</p>
		</Wrapper>
	);
};

export default Transaction;

const Wrapper = styled.div`
	padding: 1rem 0.875rem;
	background-color: ${({ type }) => {
		if (type === "expense") return "hsla(357, 100%, 50%, 0.2)";
		if (type === "income") return "hsla(151, 100%, 50.2%, 0.2)";
	}};
	margin: 1rem 0;
`;
