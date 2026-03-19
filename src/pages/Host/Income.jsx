import { useLoaderData } from 'react-router-dom'
import { useMemo, lazy, Suspense } from 'react'
const IncomeChart = lazy(() => import('../../components/IncomeChart'))
import { formatAmount } from '../../utils/money'

export default function Income() {
  const { income, transactions } = useLoaderData()

  const chartData = useMemo(
    () =>
      transactions.map(tx => ({
        date: tx.date,
        amount: Number(tx.amount),
      })),
    [transactions]
  )

  const { minAmount, maxAmount } = useMemo(() => {
    if (chartData.length === 0) return { minAmount: 0, maxAmount: 0 }

    return chartData.reduce(
      (acc, curr) => ({
        minAmount: curr.amount < acc.minAmount ? curr.amount : acc.minAmount,
        maxAmount: curr.amount > acc.maxAmount ? curr.amount : acc.maxAmount,
      }),
      { minAmount: chartData[0].amount, maxAmount: chartData[0].amount }
    )
  }, [chartData])

  return (
    <section className="container-host" aria-labelledby="host-income">
      <header className="flex flex-col justify-between gap-2">
        <div>
          <h1 id="income" className="text-2xl font-bold text-text">
            Your Income
          </h1>
          <p className="text-text-gray">Last 30 days</p>
        </div>
        <p
          className="text-4xl font-bold text-text"
          aria-label={`Total income: ${formatAmount(income)}`}
        >
          {formatAmount(income)}
        </p>
      </header>

      <div>
        <h2 id="income-trend-heading" className="text-xl font-semibold text-text mb-4">
          Income Trends
        </h2>
        <div
          className="bg-white p-6 rounded-lg shadow-sm border border-background-dark"
          aria-labelledby="income-trend-heading"
          aria-label="Line chart showing income over time"
        >
          <Suspense
            fallback={
              <div className="h-80 flex items-center justify-center">Loading chart...</div>
            }
          >
            <IncomeChart chartData={chartData} minAmount={minAmount} maxAmount={maxAmount} />
          </Suspense>

          {chartData.length > 0 && (
            <div className="sr-only">
              This chart displays income transactions chronologically. The lowest point is{' '}
              {formatAmount(minAmount)} and the highest is {formatAmount(maxAmount)}.
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Recent transactions</h2>
        <ul className="space-y-4 list-none p-0">
          {transactions.map(tx => (
            <li
              key={tx.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-background-dark"
            >
              <span className="font-semibold text-text">{formatAmount(tx.amount)}</span>
              <span className="text-text-gray text-sm">
                <time dateTime={tx.date}>{tx.date}</time>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
