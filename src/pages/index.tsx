import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen bg-zinc-50 flex  ${inter.className}`}
    >
      <form action="" className="flex felx-col gap-4">
        <label htmlFor="">E-mail:</label>
        <input type="email" name="email"/>

        <label htmlFor="">Senha:</label>
        <input type="password" name="password" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
