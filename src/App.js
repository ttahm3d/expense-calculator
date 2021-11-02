import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { TransactionsProvider } from "./context/Transactions";
import Modal from "./components/Modal";

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
					<Suspense fallback={<div>Loading....</div>}>
						<Switch>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
							<Route exact path="/transactions">
								<Transactions />
							</Route>
							<Route exact path="/">
								<Modal />
							</Route>
						</Switch>
					</Suspense>
				</TransactionsProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
