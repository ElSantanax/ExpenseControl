import { useReducer, createContext, ReactNode, useMemo } from "react"
import { BudgetReducers, BudgetState, initialState, BudgetActions } from "../reducers/budget-reducer"
import * as React from "react";

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
    totalExpense: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

const initialContextValue: BudgetContextProps = {
    state: initialState,
    dispatch: () => null,
    totalExpense: 0,
    remainingBudget: 0
}

// eslint-disable-next-line react-refresh/only-export-components
export const BudgetContext = createContext<BudgetContextProps>(initialContextValue)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(BudgetReducers, initialState)
    const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpense


    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpense,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}