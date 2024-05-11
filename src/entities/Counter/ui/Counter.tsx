import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
	const dispatch = useDispatch()
	const value = useSelector(getCounterValue)

	const onIncrementValue = () => {
		dispatch(counterActions.increment())
	}

	const onDecrementValue = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<div>
				value: {value}
			</div>
			<div>
				<button type="button" onClick={onIncrementValue}>
                    increment
				</button>
				<button type="button" onClick={onDecrementValue}>
                    decrement
				</button>
			</div>
		</div>
	)
}