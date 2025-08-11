"use client";
import { Header } from './_components/header';
import { Hero } from './_components/hero';
import { Collections } from './_components/collections';
import { Footer } from './_components/footer';

export default function Home() {
  return <>
    <Header/>
    <main>
      <Hero />
      <Collections/>
    </main>
    <Footer/>
  </>
}