export default function Contact() {
  return (
    <section className="py-20 bg-gray-900/50" id="contato">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-gray-400">Conte-me sobre seus dados e eu te mostro as oportunidades</p>
        </div>
        
        <div className="card">
          <form action="https://formsubmit.co/fabianotederiche@gmail.com" method="POST" className="space-y-4">
            {/* Configure para não pedir confirmação por email */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* CORRIGIDO: use o domínio real do seu site */}
            <input type="hidden" name="_next" value="https://analise-de-dados-consultoria.vercel.app/obrigado" />
            
            <input type="hidden" name="_subject" value="Novo contato do Site de Análise de Dados!" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Opcional: desabilita o email de confirmação automática */}
            <input type="hidden" name="_autoresponse" value="Obrigado pelo contato! Responderei em até 2 horas." />
            
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="nome" 
                placeholder="Seu nome" 
                required 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Seu email" 
                required 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" 
              />
            </div>
            
            <input 
              type="tel" 
              name="whatsapp" 
              placeholder="WhatsApp (com DDD)" 
              required 
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" 
            />
            
            <textarea 
              name="mensagem" 
              rows="4" 
              placeholder="Descreva seus dados e o que você gostaria de descobrir com eles..." 
              required 
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Quero minha análise gratuita
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            🔒 Não compartilho seus dados. Análise inicial sem compromisso.
          </div>
        </div>
      </div>
    </section>
  );
}