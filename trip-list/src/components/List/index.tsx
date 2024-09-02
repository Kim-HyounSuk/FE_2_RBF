import { Dispatch, SetStateAction, useCallback } from 'react';
import { ITrip } from '../../types';
import NonItem from '../NonItem';
import Trip from '../Trip';
import styled from '@emotion/styled';
import { LOCAL_STORAGE_NAME } from '../../constants';

interface IProps {
	trips: ITrip[];
	setTrips: Dispatch<SetStateAction<ITrip[]>>;
}

const List = ({ trips, setTrips }: IProps) => {
	const onDeleteTrip = useCallback(
		(id: number) => {
			setTrips((prevTrips) => {
				const updatedTrips = prevTrips.filter((trip) => trip.id !== id);
				localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(updatedTrips));

				return updatedTrips;
			});
		},
		[setTrips],
	);

	return (
		<Container>
			{trips.length > 0 ? (
				trips.map((trip) => (
					<Trip key={trip.id} trip={trip} onDeleteTrip={onDeleteTrip} />
				))
			) : (
				<NonItem />
			)}
		</Container>
	);
};

export default List;

const Container = styled.ul`
	max-width: 900px;
	width: 100%;
	margin: 0 auto;
`;
