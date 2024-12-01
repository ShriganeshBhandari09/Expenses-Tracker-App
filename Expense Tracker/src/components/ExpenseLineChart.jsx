import { LineChart } from "@mui/x-charts/LineChart";

export default function ExpenseLineChart({ transactions }) {
  const expensesAmountData = transactions.map(
    (transaction) => transaction.amount
  );
  const xLabels = transactions.map((transaction) =>
    transaction.date.split("-").reverse().join("-")
  );
  return (
    <LineChart
      width={800}
      height={400}
      series={[{ data: expensesAmountData, label: "transactions" }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}

ExpenseLineChart.propTypes;
