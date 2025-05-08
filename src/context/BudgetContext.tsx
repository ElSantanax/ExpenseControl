import {useReducer, createContext, ReactNode} from "react"
import {BudgetReducers, BudgetState, initialState, BudgetActions} from "../reducers/budget-reducer"
import * as React from "react";

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProvideProps = {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}: BudgetProvideProps) => {

    const [state, dispatch] = useReducer(BudgetReducers, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}