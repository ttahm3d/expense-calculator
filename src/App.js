import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { TransactionsProvider } from "./context/Transactions";
import styled, { keyframes } from "styled-components";
import { Centered, Container } from "./styles/globals";
// import Modal from "./components/Modal";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Transactions = React.lazy(() =>
	import("./pages/Transactions/Transactions")
);

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<TransactionsProvider>
					<Suspense
						fallback={
							<Container>
								<Centered>
									<Spinner />
								</Centered>
							</Container>
						}>
						<Switch>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
							<Route exact path="/transactions">
								<Transactions />
							</Route>
							<Route exact path="/">
								<Redirect to="/dashboard" />
							</Route>
						</Switch>
					</Suspense>
				</TransactionsProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);

	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 24px;
	height: 24px;
	border-radius: 50%;
`;
