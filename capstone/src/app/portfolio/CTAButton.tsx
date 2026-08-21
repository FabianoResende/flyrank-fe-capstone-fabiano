'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Props = {
  href?: string;
  children: React.ReactNode;
};

export default function CTAButton({ href, children }: Props) {
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    setPressed(true);
    setTimeout(() => setPressed(false), 600);
  }

  const baseClass =
    'inline-flex items-center gap-3 rounded-md px-5 py-3 font-medium shadow-sm focus:outline-none focus:ring-2 transition-transform duration-150 ease-out';
  const visualClass =
    'bg-orange-400 text-slate-900 hover:bg-orange-300 focus:ring-orange-300';
  const pressedClass = pressed ? 'scale-95' : 'hover:scale-102';

  const className = `${baseClass} ${visualClass} ${pressedClass}`;

  if (href) {
    return (
      <Link href={href} onClick={handleClick} className={className} aria-label={typeof children === 'string' ? String(children) : 'CTA'}>
        <span>{children}</span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={className} aria-label={typeof children === 'string' ? String(children) : 'CTA'}>
      <span>{children}</span>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
