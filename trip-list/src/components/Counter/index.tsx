import styled from '@emotion/styled';
import React from 'react';

const Counter = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container>
			<span>Total</span>
			<span>{children}</span>
		</Container>
	);
};

export default Counter;

const Container = styled.div`
	max-width: 900px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 4rem auto 1.5rem auto;
	gap: 0.5rem;
	color: #8284fa;

	& > span:nth-of-type(2) {
		padding: 0.125rem 0.5rem;
		background-color: #cccccc;
		border-radius: 100%;
	}
`;
