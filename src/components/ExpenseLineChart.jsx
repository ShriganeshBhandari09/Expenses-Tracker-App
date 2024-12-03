import ReactECharts from "echarts-for-react";

export default function ExpenseLineChart({ transactions }) {
  const expensesAmountData = transactions.map(
    (transaction) => transaction.amount
  );
  const xLabels = transactions.map((transaction) =>
    transaction.date.split("-").reverse().join("-")
  );

  const option = {
    title: {
      text: "Expenses Graph",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: ₹{c}",
    },
    xAxis: {
      type: "category",
      data: xLabels.map((date) => date.slice(0, 5)),
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Expense",
        data: expensesAmountData,
        type: "line",
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactECharts
        option={option}
        style={{ width: "100%", height: "100%" }}
        opts={{ renderer: "canvas" }} // Optional: to use canvas for rendering (better performance in many cases)
      />
    </div>
  );
}

ExpenseLineChart.propTypes;
