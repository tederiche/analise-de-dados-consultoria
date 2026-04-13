export default function Pricing() {
  const plans = [
    { 
      name: "Análise Rápida", 
      price: "197", 
      features: [
        "Análise de 1 planilha",
        "Diagnóstico de problemas",
        "3 principais insights",
        "Entrega em 48h"
      ]
    },
    { 
      name: "Organização Completa", 
      price: "497", 
      features: [
        "Análise de até 5 planilhas",
        "Reorganização completa",
        "10+ insights detalhados",
        "Planilha otimizada entregue",
        "1 ajuste gratuito",
        "Entrega em 5 dias"
      ], 
      popular: true 
    },
    { 
      name: "Consultoria Mensal", 
      price: "997", 
      features: [
        "Análise mensal de dados",
        "Relatórios estratégicos",
        "Suporte por WhatsApp",
        "Acompanhamento contínuo",
        "Ajustes ilimitados",
        "Prioridade na entrega"
      ]
    }
  ]
  
  return (
    <section className="py-20" id="precos">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Investimento Transparente</h2>
          <p className="text-gray-400">Você paga apenas pelo serviço, sem taxas escondidas</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className={`card flex flex-col ${plan.popular ? 'border-blue-500 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm z-10">
                  🔥 Mais Escolhido
                </div>
              )}
              
              {/* Conteúdo do card com flex column */}
              <div className="flex flex-col h-full">
                {/* Cabeçalho */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-blue-500">R$ {plan.price}</span>
                    {plan.price !== "Sob consulta" && <span className="text-gray-400 text-sm">/projeto</span>}
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Features - ocupa espaço automaticamente */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botão - sempre no final */}
                <a 
                  href="#contato" 
                  className="w-full btn-primary text-center inline-block text-center"
                >
                  📊 Quero esse plano
                </a>
                
                {/* Selo opcional para plano popular */}
                {plan.popular && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    ✅ Plano mais contratado
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">
          * Análise gratuita do seu caso antes de qualquer pagamento
        </p>
      </div>
    </section>
  )
}