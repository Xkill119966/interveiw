import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { useSelector } from "react-redux";


export default function PieChart({
    api_data, name
}) {
    const ref = useRef();
    let pieData = useSelector(state => state.data.pie);
    console.log("Pie Data", pieData);
    useEffect(() => {

        const data = {
            labels: pieData !== null && Object.keys(pieData),
            datasets: [
                {
                    label: 'Dataset 1',
                    data: pieData !== null && Object.values(pieData),
                    backgroundColor: [
                        'red',
                        'green',
                    ],
                }
            ]
        };

        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Pie Chart'
                    }
                }
            },
        };
        const chart = new Chart(ref.current, config);

        return () => {
            chart.destroy();
        };
    }, [pieData]);

    return (
        <div style={{ width: '500px', height: '200px' }}>
            <canvas
                ref={ref}
            />
        </div>
    );
}
