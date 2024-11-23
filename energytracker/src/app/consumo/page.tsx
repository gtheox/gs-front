"use client";

import { useEffect, useState } from "react";
import ConsumoChart from "@/components/Consumo/ConsumoChart";
import ConsumoTable from "@/components/Consumo/ConsumoTable";
import { TipoConsumo } from "@/interface/types";

export default function ConsumoPage() {
  const [dadosConsumo, setDadosConsumo] = useState<TipoConsumo[]>([]); // Define o tipo dos dados como TipoConsumo[]
  const [isLoading, setIsLoading] = useState<boolean>(true); // Define explicitamente como boolean
  const [error, setError] = useState<string | null>(null); // Define explicitamente como string ou null

  useEffect(() => {
    const fetchConsumos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/consumos");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados de consumo.");
        }
        const data: TipoConsumo[] = await response.json(); // Define o tipo dos dados retornados
        setDadosConsumo(data);
      } catch (err: unknown) {
        // Garante que o erro tenha um tipo conhecido
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchConsumos();
  }, []);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Consumo Energético</h1>
      <ConsumoChart dados={dadosConsumo} />
      <ConsumoTable dados={dadosConsumo} />
    </div>
  );
}
