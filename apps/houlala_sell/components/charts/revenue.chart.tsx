import { Line } from "react-chartjs-2";
import { CategoryScale,LinearScale,PointElement,LineElement,    Chart } from "chart.js";


Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement

);

const RevenueChart = () => {

  const data = {
    labels: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche"
    ],
    datasets: [
      {
        label: "Revenus",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [10000 , 20000, 5000, 50000, 18000, 20000, 100000]
      },
      {
        label: "Commandes",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [15000 , 25000, 10000, 40000, 19000, 21000, 200000]
      }
    ]
  };

  return (
    <div>
      <Line
        data={data}
        width={400}
        height={200}
      />
    </div>
  );
};

export default RevenueChart;