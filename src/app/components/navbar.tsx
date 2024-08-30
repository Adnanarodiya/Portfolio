"use client"
import { Caveat } from 'next/font/google';
import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const caveat = Caveat({ subsets: ['latin'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/service', label: 'Service' },
    { href: '/fun-game', label: 'Fun Game' },
  ];

  return (
    <div className='sticky top-5 z-50'>
      <div className='navbar bg-base-100 inset-0 z-10 backdrop-blur-md bg-opacity-80 backdrop-saturate-200 rounded-3xl w-11/12 mx-auto'>
        <div className='flex-1'>
          <Link
            href='/'
            className={cn('btn btn-ghost text-4xl', caveat.className)}
          >
            Adnan Arodiya
          </Link>
        </div>
        <div className='flex-none hidden md:block'>
          <ul className='menu menu-horizontal px-1 gap-4'>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-none md:hidden'>
          <button onClick={toggleMenu} className='btn btn-ghost btn-circle'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-2 w-11/12 mx-auto'>
          <ul className='menu bg-base-100 rounded-box w-full p-2 shadow-lg backdrop-blur-md bg-opacity-80 backdrop-saturate-200'>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}