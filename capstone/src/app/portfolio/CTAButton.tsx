'use client';

import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function CTAButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-orange-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-transform duration-180 ease-out"
      aria-label={typeof children === 'string' ? String(children) : 'Enviar problema'}
    >
      {children}
    </Link>
  );
}

