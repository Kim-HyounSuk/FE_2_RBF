import { useCallback } from 'react';
import { ITrip } from '../../types';
import styled from '@emotion/styled';

interface IProps {
	trip: ITrip;
	onDeleteTrip: (id: number) => void;
}

const Trip = ({ trip, onDeleteTrip }: IProps) => {
	const onClickBtn = useCallback(() => {
		onDeleteTrip(trip.id);
	}, [trip, onDeleteTrip]);

	return (
		<Container>
			<span>{trip.place}</span>
			<button onClick={onClickBtn}>
				<i className="fa-regular fa-trash-can"></i>
			</button>
		</Container>
	);
};

export default Trip;

const Container = styled.li`
	padding: 1rem;
	background-color: #262626;
	border: 1px solid #ccc;
	display: flex;
	color: #ccc;
	border-radius: 0.5rem;
	margin-bottom: 0.5rem;

	& > span {
		flex: 1;
	}
`;
