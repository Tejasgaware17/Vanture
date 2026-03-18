import { useLoaderData } from 'react-router-dom'
import { useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { formatAmount } from '../../utils/money'

export default function Income() {
  const { income, transactions } = useLoaderData()

  const chartData = transactions.map(tx => ({
    date: tx.date,
    amount: Number(tx.amount),
  }))

  const { minAmount, maxAmount } = useMemo(() => {
    if (chartData.length === 0) return { minAmount: 0, maxAmount: 0 }

    const amounts = chartData.map(d => d.amount)

    return {
      minAmount: Math.min(...amounts),
      maxAmount: Math.max(...amounts),
    }
  }, [chartData])

  return (
    <section className="container-host" aria-labelledby="host-income">
      <header className="flex flex-col justify-between gap-2">
        <div>
          <h1 id="Income" className="text-2xl font-bold text-text">
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
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 5, left: -30, bottom: 5 }}
              accessibilityLayer
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />

              <XAxis dataKey="date" hide />
              <YAxis
                tick={{ fill: '#585d67', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={['dataMin - 50', 'dataMax + 50']}
                interval={0}
              />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #fde6d2' }}
                cursor={{ stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="var(--color-primary)"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: 'var(--color-primary)', ariaLabel: 'Data point' }}
              />
            </LineChart>
          </ResponsiveContainer>

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
