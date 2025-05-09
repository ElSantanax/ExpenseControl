import AmountDisplay from "./AmountDisplay";

export default function BudgetTraker() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Gráfica de gastos" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">

                <AmountDisplay
                    label='Presupuesto'
                    amount={300}
                />

                <AmountDisplay
                    label='Disponible'
                    amount={200}
                />

                <AmountDisplay
                    label='Gastado'
                    amount={100}
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
