// LineChart.tsx
import React from "react"
import ReactECharts from "echarts-for-react"
import WineDataSet from "../../Wine-Data.json"

const LineChart: React.FC = () => {
  const data = WineDataSet.map((item) => [item["Flavanoids"], item["Ash"]])

  const option = {
    xAxis: {
      type: "value",
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        type: "line",
        data: data,
      },
    ],
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#b0b1ba" }}>
        Line Chart for Flavanoids and Ash
      </h2>
      <ReactECharts option={option} />
    </div>
  )
}

export default LineChart
