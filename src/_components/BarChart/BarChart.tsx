// BarChart.tsx
import React from "react"
import ReactECharts from "echarts-for-react"
import WineDataSet from "../../Wine-Data.json"

const BarChart: React.FC = () => {
  const alcoholCategories = WineDataSet.map((item) => item["Alcohol"])
  const uniqueAlcoholCategories = Array.from(new Set(alcoholCategories))

  const data = uniqueAlcoholCategories.map((category) => {
    const filteredData = WineDataSet.filter(
      (item) => item["Alcohol"] === category
    )
    const minMagnesium = Math.min(
      ...filteredData.map((item) => item["Magnesium"])
    )
    console.log("data", minMagnesium)
    return [category, minMagnesium]
  })
  const option = {
    xAxis: {
      type: "category",
      data: uniqueAlcoholCategories,
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        type: "bar",
        data: data,
      },
    ],
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#b0b1ba" }}>
        Bar Chart for Alcohol and Magnesium
      </h2>
      <ReactECharts option={option} />
    </div>
  )
}

export default BarChart
