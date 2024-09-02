import styled from '@emotion/styled';

const Header = () => {
	return (
		<Head>
			<h1>
				<i className="fa-solid fa-rocket"></i>
				<strong>가자</strong>
				<strong>여행</strong>
			</h1>
		</Head>
	);
};

export default Header;

const Head = styled.header`
	padding: 4.5rem 0;
	background-color: #0d0d0d;

	& > h1 {
		font-size: 2.5rem;
		font-weight: 900;
		text-align: center;

		& > i {
			color: #5e60ce;
		}

		& > strong:nth-of-type(1) {
			color: #4ea8de;
		}

		& > strong:nth-of-type(2) {
			color: #1e6f9f;
		}
	}
`;
