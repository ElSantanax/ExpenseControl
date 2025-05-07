import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTraker from "./components/BudgetTraker"

function App() {

    const { state } = useBudget()
    const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

    return (
        <>
            <div className="bg-blue-600 py-8 max-h-72">
                <h1 className="text-white font-black text-4xl uppercase text-center">Planificador de Gastos</h1>
            </div>

            <div className="max-w-3xl mx-auto bg-white shadow-lg p-10 mt-10 rounded-lg">
                {isValidBudget ? <BudgetTraker /> : <BudgetForm />}
            </div>
        </>
    )
}

export default App
