import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export default function ExpenseLineChart({ transactions }) {
  const [expenses, setExpenses] = useState(transactions);

  useEffect(() => {
    const sortedTransactions = expenses.sort(function (a, b) {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);
      return date1 - date2;
    });
    setExpenses(sortedTransactions);
  }, [expenses]);

  const expensesAmountData = expenses.map((transaction) => transaction.amount);
  const xLabels = expenses.map((transaction) =>
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
        areaStyle: {
          color: "#F3BD001A",
        },
        // lineStyle: {
        //   normal: {
        //     color: "#707DFF",
        //     width: 4,
        //     type: "dotted",
        //   },
        // },
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
