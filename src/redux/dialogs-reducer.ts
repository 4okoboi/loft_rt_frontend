import { MessageType } from '../utils/generalTypes'

// Экспорт типа для совместимости
export type { MessageType } from '../utils/generalTypes'

interface InitialStateType {
	messages: MessageType[]
}

const initialState: InitialStateType = {
	messages: [],
}

const dialogsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state
	}
}

export default dialogsReducer
