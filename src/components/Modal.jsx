import React from "react";
import styled from "styled-components";
import { Container } from "../styles/globals";

const Modal = (props) => {
	return (
		<Container>
			<ModalWrapper>modal component</ModalWrapper>
		</Container>
	);
};

export default Modal;

const ModalWrapper = styled.div`
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
	padding: 2rem 1rem;
	border-radius: 0.25rem;
`;
