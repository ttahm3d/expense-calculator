import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles/globals";

const Header = (props) => {
	return (
		<HeaderContainer>
			<Container>
				<Navbar>
					<Logo>Expense Calculator</Logo>
					<NavList>
						<NavListItems>
							<Link to="/dashboard">Dashboard</Link>
						</NavListItems>
						<NavListItems>
							<Link to="/transactions">Transactions</Link>
						</NavListItems>
					</NavList>
				</Navbar>
			</Container>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	padding: 2rem 0;
`;

const Navbar = styled.nav`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	border-bottom: 1px solid hsl(0, 0%, 62.8%);
	flex-wrap: wrap;
`;

const NavList = styled.ul`
	display: flex;
	gap: 1rem;
	padding: 0;
`;

const NavListItems = styled.li`
	list-style: none;
	padding: 0;
`;

const Logo = styled.h1`
	font-weight: 800;
`;
