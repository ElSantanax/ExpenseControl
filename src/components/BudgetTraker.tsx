import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTraker() {

    const { state, totalExpense, remainingBudget, dispatch } = useBudget()
    const percentage = +((totalExpense / state.budget) * 100).toFixed(2)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#F5F5F5',
                        textSize: 8,
                        textColor: percentage === 100 ? '#DC2626' : '#3b82f6'
                    })}
                    text={`${percentage}% Gastado`}
                />
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
                    onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Resetear App
                </button>

            </div>
        </div>
    )
}
