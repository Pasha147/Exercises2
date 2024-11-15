import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'First',
}

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello</h1>
        <Link href='/about'>Go to about page</Link>
      </main>
      
  );
}
