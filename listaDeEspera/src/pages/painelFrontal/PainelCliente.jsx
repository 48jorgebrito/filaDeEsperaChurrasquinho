import { useEffect, useState } from 'react'
import './PainelCliente.css'
import { Api } from '../../config/Api'

export default function Painel(){
   
   const [proximos, setProximos] = useState([])
   const [client, setCliente] = useState([])
    useEffect(()=>{
        (async ()=>{
            let lista = await Api.get('/')
            let clinteSingle = await Api.get('/cliente')
            setProximos(lista.data)
            setCliente(clinteSingle.data)
        })()
    },[]) 

    return(
        <div className="container">
            <div className='cliente'>
                <h1>CLIETE</h1>
                <p>{client.cliente}</p>
            </div>

            <div className='proximos'>
                <h1>PROXIMOS</h1>
                {
                    proximos.map((item, index)=>(
                        <p key={index}>
                            {item.cliente}
                        </p>
                    ))
                }
                
            </div>
        </div>
    )
}