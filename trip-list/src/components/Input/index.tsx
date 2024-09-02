import React, {
	Dispatch,
	SetStateAction,
	useCallback,
	useRef,
	useState,
} from 'react';
import styled from '@emotion/styled';
import { ITrip } from '../../types';
import { LOCAL_STORAGE_NAME } from '../../constants';

interface IProps {
	setTrips: Dispatch<SetStateAction<ITrip[]>>;
}

const Input = ({ setTrips }: IProps) => {
	const [input, setInput] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null);

	const onChangeInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInput(e.target.value);
		},
		[],
	);

	const onClickBtn = useCallback(() => {
		if (input.trim() === '') return;

		const trip: ITrip = {
			id: Date.now(),
			place: input,
		};

		setTrips((trips) => {
			localStorage.setItem(
				LOCAL_STORAGE_NAME,
				JSON.stringify([...trips, trip]),
			);
			return [...trips, trip];
		});
		setInput('');

		if (inputRef.current) inputRef.current.focus();
	}, [input, setTrips]);

	const onKeyUpInput = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') onClickBtn();
		},
		[onClickBtn],
	);

	return (
		<Container>
			<input
				ref={inputRef}
				type="text"
				value={input}
				onChange={onChangeInput}
				onKeyUp={onKeyUpInput}
				placeholder="가고 싶은 여행지를 등록하세요."
			/>
			<button onClick={onClickBtn}>
				ADD
				<i className="fa-solid fa-plus"></i>
			</button>
		</Container>
	);
};

export default Input;

const Container = styled.div`
	max-width: 900px;
	width: 100%;
	display: flex;
	margin: 0 auto;
	transform: translateY(-50%);
	gap: 0.5rem;

	& > input {
		padding: 1rem;
		background-color: #262626;
		border-radius: 0.5rem;
		flex: 1;
	}

	& > button {
		padding: 1rem;
		color: #f2f2f2;
		font-weight: 700;
		background-color: #1e6f9f;
		border-radius: 0.5rem;

		& > i {
			border: 1px solid #f2f2f2;
			border-radius: 50%;
			margin-left: 0.5rem;
			padding: 0.25rem;
		}
	}
`;
