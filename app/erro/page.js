'use client';

import Link from 'next/link';

export default function Erro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container-custom max-w-2xl text-center">
        <div className="card p-8 md:p-12">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ⚠️ Erro no Envio
          </h1>
          
          <p className="text-gray-300 text-lg mb-6">
            Desculpe, houve um problema ao enviar sua mensagem.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400">
              📱 Por favor, fale comigo diretamente no WhatsApp
            </p>
            <a 
              href="https://wa.me/5511983793564" 
              target="_blank"
              className="inline-block mt-2 text-green-500 hover:text-green-400 font-semibold"
            >
              Clique aqui para falar comigo agora
            </a>
          </div>
          
          <Link 
            href="/#contato" 
            className="inline-block btn-primary"
          >
            ← Tentar novamente
          </Link>
        </div>
      </div>
    </div>
  );
}