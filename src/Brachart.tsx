import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

let labels = [];
const dt = [
    {
        "main": {
            "temp": 268.987,
            "temp_min": 268.987,
            "temp_max": 268.987,
            "pressure": 1001.11,
            "sea_level": 1024.68,
            "grnd_level": 1001.11,
            "humidity": 100
        },
        "wind": {
            "speed": 5.06,
            "deg": 291.002
        },
        "clouds": {
            "all": 48
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "dt": 1485703465
    },
    {
        "main": {
            "temp": 268.097,
            "temp_min": 268.097,
            "temp_max": 268.097,
            "pressure": 1003.57,
            "sea_level": 1027.08,
            "grnd_level": 1003.57,
            "humidity": 100
        },
        "wind": {
            "speed": 8.56,
            "deg": 314.007
        },
        "clouds": {
            "all": 44
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "dt": 1485730032
    },
    {
        "main": {
            "temp": 266.787,
            "temp_min": 266.787,
            "temp_max": 266.787,
            "pressure": 1005.73,
            "sea_level": 1029.63,
            "grnd_level": 1005.73,
            "humidity": 100
        },
        "wind": {
            "speed": 6.79,
            "deg": 316.012
        },
        "clouds": {
            "all": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "Sky is Clear",
                "icon": "01n"
            }
        ],
        "dt": 1485755383
    },
    {
        "main": {
            "temp": 263.64,
            "pressure": 1015,
            "humidity": 57,
            "temp_min": 262.15,
            "temp_max": 265.15
        },
        "wind": {
            "speed": 2.6,
            "deg": 280
        },
        "clouds": {
            "all": 1
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "sky is clear",
                "icon": "01n"
            }
        ],
        "dt": 1485780512
    }
]
const maxTemp = dt.map(d => {
    return { data: [d.main.temp], label: moment.unix(d.dt).format('dddd, MMMM Do, YYYY h:mm:ss A'), backgroundColor: 'rgba(255, 99, 132, 0.5)' }
});
labels = dt.map(d => {
    return moment.unix(d.dt).format('dddd, MMMM Do, YYYY h:mm:ss A')
});
console.log(maxTemp);
export const data = {
    labels,
    datasets: maxTemp,
};

export function Barchart() {
    return <Bar options={options} data={data} />;
}
