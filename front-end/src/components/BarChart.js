import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Chart } from "chart.js";


export default function BarChart({
  api_data, name
}) {
  const ref = useRef();
  let barData = useSelector(state => state.data.bar);



  useEffect(() => {
    const data = {
      labels: barData !== null && Object.keys(barData),
      datasets: [{
        data: barData !== null && Object.values(barData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
        ],
        borderWidth: 1
      }]
    };

    var config = {
      type: "bar",
      data: data,

      options: {
        responsive: true,

        legend: {
          display: false,
        },

        title: {
          display: true,
          text: 'Bar Chart'
        },
      }
    };

    const chart = new Chart(ref.current, config);

    return () => {
      chart.destroy();
    };
  }, [barData]);

  return (
    <div style={{ width: '500px', height: '200px' }}>
      <canvas
        ref={ref}
      />
    </div>
  );
}
