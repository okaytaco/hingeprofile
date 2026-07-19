import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Manifesto } from '@/components/landing/Manifesto';
import { Features } from '@/components/landing/Features';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect('/interview');

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] bg-dot-pattern">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

