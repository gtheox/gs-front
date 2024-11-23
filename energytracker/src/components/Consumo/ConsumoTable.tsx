import { TipoConsumo } from "@/interface/types";

interface ConsumoTableProps {
  dados: TipoConsumo[];
}

export default function ConsumoTable({ dados }: ConsumoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Edifício ID</th>
            <th className="border border-gray-300 px-4 py-2">Data e Hora</th>
            <th className="border border-gray-300 px-4 py-2">Heating Load</th>
            <th className="border border-gray-300 px-4 py-2">Cooling Load</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.edificioId}</td>
              <td className="border border-gray-300 px-4 py-2">{item.dataHora}</td>
              <td className="border border-gray-300 px-4 py-2">{item.heatingLoad}</td>
              <td className="border border-gray-300 px-4 py-2">{item.coolingLoad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
