import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

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

  // const data2 = [
  //   { label: "Budget", value: budget },
  //   {
  //     label: "Remaining Budget",
  //     value:
  //       budget -
  //       (foodTotalAmount +
  //         groceriesTotalAmount +
  //         healthTotalAmount +
  //         travelTotalAmount),
  //   },
  // ];

  return (
    <Box>
      <PieChart
        series={[
          {
            data: data1,
          },
          // {
          //   innerRadius: 220,
          //   outerRadius: 250,
          //   data: data2,
          // },
        ]}
        width={800}
        height={400}
      />
    </Box>
  );
};

ExpensesPieChart.propTypes;

export default ExpensesPieChart;
