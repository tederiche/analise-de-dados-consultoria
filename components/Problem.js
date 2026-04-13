export default function Problem() {
  const problems = [
    { emoji: "📊", text: "Planilhas bagunçadas que não geram nenhum insight" },
    { emoji: "😵", text: "Dados espalhados sem conexão entre si" },
    { emoji: "⏰", text: "Perde horas tentando organizar informações" },
    { emoji: "🤔", text: "Não sabe como extrair valor dos seus dados" }
  ]
  
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">
          Seus dados estão bagunçados?
        </h2>
        <p className="text-center text-gray-400 mb-12">Você não precisa de robôs, precisa de organização estratégica</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="card flex items-center gap-4">
              <span className="text-3xl">{problem.emoji}</span>
              <p className="text-gray-300">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}