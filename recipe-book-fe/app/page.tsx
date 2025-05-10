'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="container flex flex-col items-center gap-5 h-screen justify-center">
      <h2 className="text-3xl text-center">Welcome to Recipe Book Web App</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded cursor-pointer"
        onClick={() => router.push('/recipes')}
      >
        Get Started
      </button>
    </div>
  );
}
