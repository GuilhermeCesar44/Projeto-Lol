'use client'


import { useState } from "react";
import Timer from "../src/components/Timer";
import Champions from "@/src/components/ChampionGrid";
import Filter from "@/src/components/ChampionFilter";

export default function Home() {
  const [rotaAtiva, setRotaAtiva] = useState('ALL')
  const [busca, setBusca] = useState('')
  return(
    <div className="flex justify-between w-full h-screen p-4 overflow-hidden">
      
  
  <div className="flex flex-col gap-4"> 
     <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 1</div>
     <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 2</div>
     <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 3</div>
     <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 4</div>
     <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 5</div>
    
    
  <div className="flex flex-row justify-between gap-1 w-64 mt-2">
    <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
    <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
    <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
    <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
    <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
  </div>  
  
  </div>



  <div className="flex flex-col items-center flex-1 h-full min-h-0 mx-4 gap-4">
      <div className="w-40 h-20 border border-white/20 bg-black/30 backdrop-blur-md rounded-lg flex flex-col items-center justify-center   shadow-lg">
        <span className="text-xs uppercase tracking-widest text-yellow-500 font-semibold mb-1">
          
        </span>
        <span className="text-3xl font-bold  font-mono">30s</span>
      </div>
      <Filter
      rotaAtiva={rotaAtiva}
      setRotaAtiva={setRotaAtiva}
      busca={busca}
      setBusca={setBusca} 
      />
      <Champions rotaAtiva={rotaAtiva} busca={busca} />
  </div>

  


    
  <div className="flex flex-col gap-4">
    <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 6</div>
    <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 7</div>
    <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 8</div>
    <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 9</div>
    <div className="w-64 h-25 border-2 border-white rounded-lg flex items-end justify-end p-2">Summoner 10</div>



    <div className="flex flex-row justify-between gap-1 w-64 mt-2">
      <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
      <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
      <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
      <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
      <div className="w-10 h-10 border border-gray-400 bg-gray-900 rounded-sm" />
    </div>

  
  </div>

  

</div>
  )}
