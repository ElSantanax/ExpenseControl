import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTraker() {

    const { state } = useBudget()
    const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpense

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Gráfica de gastos" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">

                <AmountDisplay
                    label='Presupuesto'
                    amount={state.budget}
                />

                <AmountDisplay
                    label='Disponible'
                    amount={remainingBudget}
                />

                <AmountDisplay
                    label='Gastado'
                    amount={totalExpense}
                />

                <button
                    type="button"
                    className="bg-pink-600 text-white uppercase font-bold p-2 w-full rounded-lg"
                >
                    Resetear App
                </button>

            </div>
        </div>
    )
}
