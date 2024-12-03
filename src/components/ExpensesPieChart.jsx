import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const ExpensesPieChart = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [foodTotalAmount, setFoodTotalAmount] = useState(null);
  const [groceriesTotalAmount, setGroceriesTotalAmount] = useState(null);
  const [travelTotalAmount, setTravelTotalAmount] = useState(null);
  const [healthTotalAmount, sethealthTotalAmount] = useState(null);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    const foodCategory = filteredTransactions
      .filter((transaction) => transaction.category === "Food And Drinks")
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    const groceriesCategory = filteredTransactions
      .filter((transaction) => transaction.category === "Groceries")
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    const travelCategory = filteredTransactions
      .filter((transaction) => transaction.category === "Travel")
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    const healthCategory = filteredTransactions
      .filter((transaction) => transaction.category === "Health")
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    setFoodTotalAmount(foodCategory);
    setGroceriesTotalAmount(groceriesCategory);
    setTravelTotalAmount(travelCategory);
    sethealthTotalAmount(healthCategory);
  }, [filteredTransactions]);

  const data1 = [
    { label: "Food And Drinks", value: foodTotalAmount, color: "#3c9d4e" },
    { label: "Groceries", value: groceriesTotalAmount, color: "#e4bf58" },
    { label: "Health", value: healthTotalAmount, color: "#7031ac" },
    { label: "Travel", value: travelTotalAmount, color: "#4174c9" },
  ];

  // // const data2 = [
  // //   { label: "Budget", value: budget },
  // //   {
  // //     label: "Remaining Budget",
  // //     value:
  // //       budget -
  // //       (foodTotalAmount +
  // //         groceriesTotalAmount +
  // //         healthTotalAmount +
  // //         travelTotalAmount),
  // //   },
  // // ];

  // return (
  //   <PieChart
  //     series={[
  //       {
  //         data: data1,
  //       },
  //     ]}
  //     // width={800}
  //     // height={400}
  //   />
  // );

  const option = {
    title: {
      text: "Expenses Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: data1.map((item) => item.label),
    },
    series: [
      {
        name: "Expense",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: data1.map((item) => ({
          value: item.value || 0,
          name: item.label,
          itemStyle: { color: item.color },
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
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
};

ExpensesPieChart.propTypes;

export default ExpensesPieChart;
