import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { TipoConsumo } from "@/interface/types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ConsumoChartProps {
  dados: TipoConsumo[];
}

export default function ConsumoChart({ dados }: ConsumoChartProps) {
  const labels = dados.map((item) => item.dataHora); // Datas como labels
  const heatingData = dados.map((item) => item.heatingLoad);
  const coolingData = dados.map((item) => item.coolingLoad);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Carga de Aquecimento (Heating Load)",
        data: heatingData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Carga de Resfriamento (Cooling Load)",
        data: coolingData,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Consumo Energético por Data",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
