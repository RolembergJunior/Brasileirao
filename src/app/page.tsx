import Header from '@/components/Header'
import Image from 'next/image'
import Banner from './components/ActiveLink/Banner'
import GroupContainer from '@/components/GroupContainer'
import MatchContainer from '@/components/MatchContainer'
import Footer from '@/components/Footer'
import axios from 'axios'

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


export default async function Home() {

  const teams = await getTeams();
  const matches = await getMatches();
  

  return (
    <>
      <Header/>
      <Banner/>
        <GroupContainer teams={teams}/>
        <MatchContainer matches={matches}/>
      <Footer/>
    </>
  )
}
