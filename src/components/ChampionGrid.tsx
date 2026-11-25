import { CHAMPIONS } from "../data/champions"

interface ChampionsProps {
  rotaAtiva: string
  busca: string
}

export default function Champions({rotaAtiva, busca}: ChampionsProps) {
      const campeoesFiltrados = CHAMPIONS.filter((champ) => {
        const bateRota = rotaAtiva === 'ALL' || champ.rota === rotaAtiva 
        const bateNome = champ.nome.toLowerCase().includes(busca.toLocaleLowerCase())
        return bateRota && bateNome
      })
  
  return (
    <div className="w-full flex-1 min-h-0 grid grid-cols-8 auto-rows-max gap-3 p-4 bg-slate-900/60 rounded-xl border border-white/20 overflow-y-auto">
      

      
      {campeoesFiltrados.map((champ) => (
        <div
          key={champ.id}
          title={champ.nome}
          className="aspect-square border border-gray-500 rounded-lg bg-slate-800/80 hover:border-pink-500 hover:bg-pink-500/20 transition cursor-pointer overflow-hidden"
        >
          <img
            src={champ.imagem}
            alt={champ.nome}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

    </div>
  )
}