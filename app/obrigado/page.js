'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Obrigado() {
  useEffect(() => {
    // Redireciona automaticamente após 5 segundos
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container-custom max-w-2xl text-center">
        <div className="card p-8 md:p-12">
          {/* Ícone de sucesso */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ✅ Mensagem Enviada!
          </h1>
          
          <p className="text-gray-300 text-lg mb-6">
            Obrigado pelo contato! Recebi sua mensagem e entrarei em contato em breve.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400">
              📱 Enquanto isso, se preferir, pode me chamar direto no WhatsApp
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
            href="/" 
            className="inline-block btn-primary"
          >
            ← Voltar para a página inicial
          </Link>
          
          <p className="text-gray-500 text-sm mt-6">
            Você será redirecionado automaticamente em 5 segundos...
          </p>
        </div>
      </div>
    </div>
  );
}