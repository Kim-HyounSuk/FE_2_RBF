import styled from '@emotion/styled';

const NonItem = () => {
	return (
		<Container>
			<i className="fa-regular fa-clipboard"></i>
			<span>등록된 여행지가 없습니다.</span>
		</Container>
	);
};

export default NonItem;

const Container = styled.div`
	width: 100%;
	padding: 4rem 0;

	& > i {
		display: block;
		font-size: 3.5rem;
		text-align: center;
		padding-bottom: 0.5rem;
	}

	& > span {
		display: block;
		font-weight: 700;
		text-align: center;
		padding-top: 0.5rem;
	}
`;
