import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export const Layout = (props: any) => {
  const { title, children } = props
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
        <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='h-14 flex items-center pl-8 '>
            <div className='flex space-x-4'>
              <Link href="/">
                <a className='text-gray-300 hover:bg-red-700 px-3 py2 rounded'>Trello App</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @Udemy, 2022
      </footer>
    </div>
  )
}

