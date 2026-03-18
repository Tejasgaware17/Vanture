import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { formatAmount } from '../utils/money'

export default function IncomeChart({ chartData, minAmount, maxAmount }) {
  return (
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
  )
}
