import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm } from 'react-hook-form';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { register, handleSubmit } = useForm()

  function criarUsuario(data: any) {
    console.log(data)
  }

  return (
    <main
      className={`h-screen bg-slate-500 flex items-center justify-center ${inter.className}`}
    >
      <form 
        onSubmit={handleSubmit(criarUsuario)} 
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">

          <label htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            className="border border-zinc-200 shadow-sm rounded px-3"
            {...register('email')}
          />
  
          <label htmlFor="password">
            Senha:
          </label>
          <input 
            type="password" 
            className="border border-zinc-200 shadow-sm rounded px-3"
            {...register('password')}
          />
  
          <button
            type="submit"
            className="bg-emerald-500 rounded font-semibold text-white h-8 hover:bg-emerald-700 transition-colors"
          >
            Salvar
          </button>

        </div>
      </form>
    </main>
  );
}
