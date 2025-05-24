import { useMemo, useEffect } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTraker from "./components/BudgetTraker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

    const { state } = useBudget()
    const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

    useEffect(() => {
        localStorage.setItem('budget', state.budget.toString())
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state])

    return (
        <>
            <div className="bg-blue-600 py-8 max-h-72">
                <h1 className="text-white font-black text-4xl uppercase text-center">Planificador de Gastos</h1>
            </div>

            <div className="max-w-3xl mx-auto bg-white shadow-lg p-10 mt-10 rounded-lg">
                {isValidBudget ? <BudgetTraker /> : <BudgetForm />}
            </div>
            {isValidBudget && (
                <main className="max-w-3xl mx-auto py-10">
                    <FilterByCategory />
                    <ExpenseList />
                    <ExpenseModal />
                </main>
            )}
        </>
    )
}

export default App
