import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["work", 5],
  ["eat", 4],
  ["study", 5],
  ["watch youtube", 2],
  ["sleep", 7],
];

export const options = {
  title: "my daily activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}