import React from 'react';
import { Monitor } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Monitor size={48} className="mr-4" aria-hidden="true" />
            <h1 className="text-4xl font-bold">Evolution of Computing & Internet</h1>
          </div>
          <p className="text-center text-xl text-indigo-100">
            From DOS to the Modern Web: A Journey Through Digital History
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            Exploring the rich history of computing and the internet
          </p>
          <div className="text-sm text-gray-500">
            <p className="mb-2">With Love,</p>
            <div className="space-x-4">
              <a 
                href="https://codephantomai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                CodePhantomAI
              </a>
              <span>in collaboration with</span>
              <a 
                href="https://pulsemindai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                PulseMindAI
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}