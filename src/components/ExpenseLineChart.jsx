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

  useEffect(() => {
    setExpenses(transactions);
  }, [transactions]);

  const expensesAmountData = expenses.map((transaction) => transaction.amount);
  const xLabels = expenses.map((transaction) =>
    transaction.date.split("-").reverse().join("-").slice(0, 5)
  );

  // const option = {
  //   title: {
  //     text: "Expenses Graph",
  //     left: "center",
  //   },
  //   // tooltip: {
  //   //   trigger: "item",
  //   //   formatter: "{a} <br/>{b}: ₹{c}",
  //   // },
  //   xAxis: {
  //     type: "category",
  //     data: xLabels.map((date) => date.slice(0, 5)),
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   // series: [
  //   //   {
  //   //     name: "Expense",
  //   //     data: expensesAmountData,
  //   //     type: "bar",
  //   //     // areaStyle: {
  //   //     //   color: "#F3BD001A",
  //   //     // },
  //   //     // lineStyle: {
  //   //     //   normal: {
  //   //     //     color: "#707DFF",
  //   //     //     width: 4,
  //   //     //     type: "dotted",
  //   //     //   },
  //   //     // },
  //   //   },
  //   // ],

  //   series: [
  //     {
  //       data: expensesAmountData,
  //       type: "bar",
  //     },
  //   ],
  // };
  const option = {
    title: {
      text: "Expenses Graph",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: xLabels
    },

    tooltip: {
      trigger: "item",
      formatter: "Expenses <br/>{b}: ₹{c}",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: expensesAmountData,
        type: "bar",
      },
    ],
  };

  return (
    <div style={{ width: "95%", height: "500px" }}>
      <ReactECharts
        option={option}
        style={{ width: "100%", height: "100%" }}
        opts={{ renderer: "canvas" }} // Optional: to use canvas for rendering (better performance in many cases)
      />
    </div>
  );
}

ExpenseLineChart.propTypes;
