export interface Todo {
	id: number
	title: string
	completed: boolean
}

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]