import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { TransactionsContext } from "../context/Transactions";

const ExpenseForm = (props) => {
	const { addTransaction } = useContext(TransactionsContext);

	const [expenseForm, setExpenseForm] = useState({
		id: uuid(),
		type: "expense",
		description: "",
		amount: 0,
		date: new Date(),
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		addTransaction(expenseForm);
		setExpenseForm({ ...expenseForm, amount: 0, description: "" });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormContainer>
					<InputWrapper>
						<label htmlFor="money">Amount: &nbsp;</label>
						<input
							type="number"
							id="money"
							value={expenseForm.amount ? expenseForm.amount : ""}
							onChange={(e) =>
								setExpenseForm({ ...expenseForm, amount: e.target.value })
							}
						/>
					</InputWrapper>
					<InputWrapper>
						<label htmlFor="description">Description: &nbsp;</label>
						<input
							type="text"
							id="description"
							value={expenseForm.description}
							onChange={(e) =>
								setExpenseForm({ ...expenseForm, description: e.target.value })
							}
						/>
					</InputWrapper>
					<InputWrapper>
						<button>Add Expense</button>
					</InputWrapper>
				</FormContainer>
			</form>
		</div>
	);
};

export default ExpenseForm;

const FormContainer = styled.div`
	border: 1px solid hsla(200, 5%, 37%, 0.2);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	border-radius: 0.25rem;
	box-shadow: 0 0.25rem 0.75rem 0 hsla(200, 5%, 37%, 0.02);
	width: 100%;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	input {
		padding: 0.4rem;
		font-size: 1.2rem;
		border: 1px solid hsla(200, 5%, 37%, 0.2);
	}

	button {
		padding: 0.5rem 2rem;
		font-size: 0.875rem;
		color: white;
		font-weight: 500;
		background-color: hsl(358, 100%, 69.5%);
		border-radius: 0.25rem;
		border: 1px solid hsl(358, 100%, 69.5%);
	}
`;
