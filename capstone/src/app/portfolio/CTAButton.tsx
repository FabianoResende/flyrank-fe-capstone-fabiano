'use client';

import { useState } from 'react';

export default function CTAButton() {
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    setPressed(true);
    // comportamento mínimo: foco visual e feedback; não navega automaticamente
    // você pode substituir por navegação ou modal depois de validar
    setTimeout(() => setPressed(false), 600);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Enviar um problema real"
      className={
        'inline-flex items-center gap-3 rounded-md px-5 py-3 font-medium ' +
        'bg-blue-600 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ' +
        'transform transition-transform duration-180 ease-out motion-reduce:transition-none ' +
        (pressed ? 'scale-95 bg-blue-700' : 'hover:scale-102 hover:bg-blue-500')
      }
    >
      <span>Envie um problema real</span>
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
