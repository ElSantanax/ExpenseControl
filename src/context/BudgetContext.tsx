import { useReducer, createContext, ReactNode } from "react"
import { BudgetReducers, BudgetState, initialState, BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProvideProps = {
    children: ReactNode
}

export const BudgetConntext = createContext<BudgetContextProps>(null!)

export const BudgetProvide = ({ children }: BudgetProvideProps) => {

    const [state, dispatch] = useReducer(BudgetReducers, initialState)

    return (
        <BudgetConntext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetConntext.Provider>
    )
}