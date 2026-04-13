export default function Proof() {
  const results = [
    { value: "100%", label: "dos clientes aprovam" },
    { value: "24h", label: "para primeira análise" },
    { value: "R$ 0", label: "compromisso inicial" },
    { value: "100%", label: "análise humana" }
  ]
  
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Resultados Reais</h2>
          <p className="text-gray-400">O que meus clientes conquistaram com dados organizados</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{result.value}</div>
              <p className="text-gray-400 text-sm">{result.label}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="card">
            <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">"Minha planilha de vendas era um caos. Em 2 dias, ele organizou tudo e achei R$ 15 mil em oportunidades perdidas."</p>
            <p className="font-bold">- Marina, Consultora de Vendas</p>
          </div>
          <div className="card">
            <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">"Pensava que precisava de software caro. Na verdade, só precisava de alguém que entendesse de dados como ele."</p>
            <p className="font-bold">- Ricardo, Pequeno Empresário</p>
          </div>
        </div>
      </div>
    </section>
  )
}