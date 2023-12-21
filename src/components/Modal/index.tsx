'use client'

import { ReactNode } from "react";

interface ModalProps{
  isOpen: boolean,
  setIsOpen: (isOpen:boolean) => void,
  children: string
}

const apiTeams = 'https://api.api-futebol.com.br/v1/campeonatos/14/tabela';
const apiMtches = 'https://api.api-futebol.com.br/v1/campeonatos/14/partidas';
const suaApiKey = 'test_bf82ed0b9d59f2a3395535761dad07';

const headers = {
  Authorization: `Bearer ${suaApiKey}`,
};

const config = {
  method:'GET',
  headers
}


const getTeams = async () => {
    const response = await fetch(apiTeams,config)
    const normalizedRes = await response.json()

    return normalizedRes
}

const getMatches = async () => {
  const response = await fetch(apiMtches,config)
  const responseApiMatch = await response.json()

  return responseApiMatch
} 


export default function Modal({ isOpen, setIsOpen, children }:ModalProps){


    const teams = getTeams();

    if(!isOpen) return null;

    return (
        <div className=" flex justify-center w-128 h-200 top-0 left-0 bg-black-rgba fixed">
            <div className="bg-slate-50 p-8 rounded-xl max-w-75 h-128 relative mt-14">
                <button type="button" onClick={() => setIsOpen(false)} className=" flex w-3 h-3 cursor-pointer bg-transparent border-none text-black absolute top-3 right-20" >CLOSE</button>
                {children}
            </div>
        </div>
    )
}