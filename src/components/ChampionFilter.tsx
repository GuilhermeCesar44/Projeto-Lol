'use client'



export default function Filter({
  rotaAtiva,
  setRotaAtiva,
  busca,
  setBusca,
}: any) {
    const clicarRota = (rota: any) => setRotaAtiva(rotaAtiva === rota ? 'ALL' : rota)

    return(
        <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            

            <div className="flex gap-2">

                   
                <div title="Top"
                onClick={() => clicarRota('TOP')}
                className={`w-8 h-8 border rounded transition cursor-pointer flex items-center justify-center $ {
                  rotaAtiva === 'TOP'
                  ? 'border-pink-500 bg-pink-500/20 text-pink-500'
                  : 'border-gray-500 bg-slate-800/80 text-gray-400 hover:border-pink-500 hover:text-pink-500'
                  }`}
                  >  
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4 4h12v4H8v8H4V4zm16 16H8v-4h8V8h4v12z" opacity="0.3" />
                        <path d="M4 4h12v4H8v8H4V4z" />
                    </svg>
                </div>


                
                <div title="Jungle" className="w-8 h-8 border border-gray-500 rounded bg-slate-800/80 text-gray-400 hover:border-pink-500 hover:text-pink-500 transition cursor-pointer flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M14.5 2L6 13.5h5.5L9.5 22 18 10.5h-5.5L14.5 2z" />
                    </svg>
                </div>

                
                <div title="Mid" className="w-8 h-8 border border-gray-500 rounded bg-slate-800/80 text-gray-400 hover:border-pink-500 hover:text-pink-500 transition cursor-pointer flex items-center justify-center">
                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4 4h6v2H6v4H4V4zm16 16h-6v-2h4v-4h2v6z" opacity="0.3" />
                         <path d="M18.5 4L4 18.5 5.5 20 20 5.5 18.5 4z" />
                     </svg>
                 </div>

                
                <div title="ADC" className="w-8 h-8 border border-gray-500 rounded bg-slate-800/80 text-gray-400 hover:border-pink-500 hover:text-pink-500 transition cursor-pointer flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4 4h12v4H8v8H4V4z" opacity="0.3" />
                    <path d="M20 20H8v-4h8V8h4v12z" />
                </svg>
                </div>

                
                <div title="Support" className="w-8 h-8 border border-gray-500 rounded bg-slate-800/80 text-grau-400 hover:border-pink-500 hover:text-pink-500 transition cursor-pointer flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 4L4 8v5c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V8l-8-4zm0 4l4 2v3c0 2.8-1.7 5.4-4 6.4-2.3-1-4-3.6-4-6.4v-3l4-2z" />
                    </svg>
                </div>

            </div>


            
            <div className="w-48 h-8 border border-gray-500 focus-within:border-pink-500 rounded bg-slate-950/80 flex items-center px-3 transition">    
            <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg=transparrent text-xs text-zinc-100 placeholder-gray-500 outline-none"
            /> 
            </div>    

        </div>
    )
}