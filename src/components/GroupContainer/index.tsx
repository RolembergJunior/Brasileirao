'use client'

import { useState, useEffect } from 'react'
import Modal from '../Modal';

interface DataGroupType {
    [x: number]:{nome: string, escudo: string}[]
}

export default function GroupContainer({teams}){
    const [grouplist, setGroupList] = useState<DataGroupType>({} as DataGroupType);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState()


    useEffect(() =>{
      getData()
        
  },[teams])
  
  
  function getData(){
  
  
    const newGroup:DataGroupType = {}

    let currencyRow = 0
  
    for(let col = 0; col <= 3; col++){
      for(let row = 0; row <= 4; row++){
        
        if(!newGroup[col]){
            newGroup[col] = [{nome:teams[currencyRow]?.time.nome_popular, escudo:teams[currencyRow]?.time.escudo, time_id:teams[currencyRow]?.time.time_id}]
            currencyRow++;
        }
        else{
            newGroup[col].push({nome:teams[currencyRow]?.time.nome_popular, escudo:teams[currencyRow]?.time.escudo, time_id:teams[currencyRow]?.time.time_id})
            currencyRow++;
        }
      }
    } 
  setGroupList(newGroup)
  }


    return(
        <>
            <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} teams={teams}>
                {teams.map((team) =>(
                    team.time.nome_popular === modalData ? 
                    <div className='flex flex-col gap-4'>
                        <img src={team.time.escudo} className='w-52' />
                        <h1 className='text-center' >{team.time.nome_popular} - {team.time.sigla}</h1>
                        <p>Pontos: {team.pontos}pts</p>
                        <p>Jogos: {team.jogos}</p>
                        <p>Vitórias: {team.vitorias}</p>
                        <p>Derrotas: {team.derrotas}</p>
                        <p>Empates: {team.empates}</p>
                        <p>Gols Contra: {team.gols_contra}</p>
                        <p>Gols Pro: {team.gols_pro}</p>
                    </div> 
                    : 
                    console.log(team)
                    ))}
            </Modal>
            <div className='flex gap-x-28 justify-center m-20' >
                {Object.entries(grouplist).map((value) =>{
                    return(
                        <div className="flex flex-col bg-slate-300 border shadow-xl w-1/5 h-96 p-7 justify-center" >
                    <div>
                        {value[1].map(({nome, escudo, time_id}) =>{
                            return(
                            <div key={nome} id={time_id}
                                className='flex gap-2 mb-5 items-center'>
                                <img src={escudo}  alt='escudo do time' className='w-9'/>
                                <p onClick={((e) => {
                                setModalData(e.target.innerHTML)
                                setModalIsOpen(true)})} 
                                className='cursor-pointer'>{nome}</p>
                            </div>
                        )
                })}
                    </div>
                </div>
                    )
                })}
            </div>
        </>
    )
}