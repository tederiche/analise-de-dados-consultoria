export default function Solution() {
  const services = [
    { icon: "📋", title: "Análise Diagnóstica", desc: "Recebo sua planilha, analiso e identifico oportunidades de melhoria" },
    { icon: "📊", title: "Organização de Dados", desc: "Estruturo e padronizo suas planilhas para fácil entendimento" },
    { icon: "💡", title: "Insights Estratégicos", desc: "Identifico padrões e oportunidades que você não estava vendo" },
    { icon: "📈", title: "Planilhas Otimizadas", desc: "Entrego planilhas prontas para gerar decisões lucrativas" }
  ]
  
  return (
    <section className="py-20" id="como-funciona">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Como Funciona?</h2>
          <p className="text-gray-400 text-xl">Processo simples e transparente</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 text-center">
          <p className="text-lg font-semibold">
            🔒 Seus dados são 100% confidenciais. Não compartilho, não vendo, não uso para outros fins.
          </p>
        </div>
      </div>
    </section>
  )
}