'use client'
import { useState, useEffect } from "react"


export default function MatchContainer({matches}){
const [ dataTable, setDataTable ] = useState([])

useEffect(() =>{
    getMatchData()
},[matches])

function getMatchData(){
    
    const dataKey1 = matches.partidas.partidas['primeira-fase']['chave-1'].ida
    const dataKey2 = matches.partidas.partidas['primeira-fase']['chave-2'].ida

    setDataTable([{...dataKey1},{...dataKey2}])
}


    return(
            <div>
                 {dataTable.map((team) =>{
                    return(
                <div className="bg-slate-300 flex justify-between w-4/5 m-auto items-center my-10" > 
                    <div className="flex  items-center p-4 w-[15rem]" key={team.nome_popular}>
                        <img src={team.time_mandante.escudo} alt="Logo do time" className="mr-3 w-16"/>
                        <p>{team.time_mandante.nome_popular}</p>
                    </div>
                    <div className="text-center">
                        <p>{team.data_realizacao}</p>
                        <p>{team.hora_realizacao}</p>
                    </div>
                    <div className="flex items-center p-4 w-[15rem]" key={team.nome_popular}>
                        <p>{team.time_mandante.nome_popular}</p>
                        <img src={team.time_visitante.escudo} alt="Logo do time" className="ml-3 w-16"/>
                    </div>
                </div>
                )})}
            </div>
    )
}