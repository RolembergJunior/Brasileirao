

export default function Footer(){
    return(
      <footer className="bg-yellow-300 flex justify-around p-10">
            <div className="flex flex-col">
                <p>Redes Sociais</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Youtube</p>
            </div>
            <div className="flex flex-col">
                <p>Legais</p>
                <p>Sobre</p>
                <p>Licença</p>
                <p>Contato</p>
                <p>Política e privacidade</p>
            </div>
            <div className="flex flex-col">
                <p>Brasileirão</p>
                <p>Serviços</p>
                <p>Patrocinadores</p>
            </div>
            <img src="Images/Brasileirao.png" alt="Logo Brasileirão" className="h-52"/>
      </footer>  
    )
}