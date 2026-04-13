export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      <div className="container-custom text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-gray-800/50 rounded-full text-sm mb-6 backdrop-blur-sm">
          👤 Análise 100% humana | Sem robôs | Dados seguros
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Transformo Bagunça em <br />
          Decisões com Dados
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Você tem os dados, eu organizo e transformo em insights acionáveis. 
          Análise personalizada, feita por um especialista humano.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contato" className="btn-primary">
            📊 Quero organizar meus dados
          </a>
          <a href="#como-funciona" className="btn-secondary">
            🎯 Como funciona?
          </a>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
          <span>✓ 100% seguro</span>
          <span>✓ Sem robôs</span>
          <span>✓ Análise humana</span>
          <span>✓ Dados confidenciais</span>
        </div>
      </div>
    </section>
  )
}