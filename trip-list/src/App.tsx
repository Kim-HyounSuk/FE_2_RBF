import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ITrip } from './types';
import { Counter, Header, Input, List } from './components';
import { LOCAL_STORAGE_NAME } from './constants';

function App() {
	const [trips, setTrips] = useState<ITrip[]>([]);

	useEffect(() => {
		const storedTrips = localStorage.getItem(LOCAL_STORAGE_NAME);
		setTrips(storedTrips ? JSON.parse(storedTrips) : []);
	}, []);

	return (
		<Container>
			<Header />
			<main>
				<Input setTrips={setTrips} />
				<Counter>{trips.length}</Counter>
				<List trips={trips} setTrips={setTrips} />
			</main>
		</Container>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #333333;
`;
