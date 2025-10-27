'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirecionar automaticamente para a página do CRM
    router.push('/crm');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-crm-medium to-crm-dark">
      <div className="text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-crm-accent to-crm-accent-hover rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-4xl">🎯</span>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-white mb-4">
          CRM Conversão
        </h1>
        
        <p className="text-gray-400 mb-8">
          Carregando...
        </p>

        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="spinner w-8 h-8"></div>
        </div>

        {/* Fallback Link */}
        <div className="mt-8">
          <a 
            href="/crm" 
            className="text-crm-accent hover:text-crm-accent-hover underline text-sm"
          >
            Ou clique aqui para acessar o CRM
          </a>
        </div>
      </div>
    </div>
  );
}
