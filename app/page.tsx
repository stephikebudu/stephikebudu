import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-5 m:px-10 ">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
