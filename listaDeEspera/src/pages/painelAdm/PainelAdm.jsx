import './PainelAdm.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Api } from '../../config/Api';

export default function PainelAdm(){
    const { register, handleSubmit, formState: { errors },} = useForm();
    
   
    const onSubmit =async (data)=>{
        await Api.post('/', data)
    }
    const proximo = async ()=>{
        await Api.delete('/cliente')
    }

    return(
        <div className="container">
           <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>NOME DO CLIENTE</label>
                <input type='text' name='cliente' {...register('cliente')}/>
            </div>
            <div>
                <label>DESCRIÇÃO DO PEDIDO</label>
                <textarea type='text' name='descricao' {...register('descricao')}></textarea>
            </div>
                

                <button type='submit'>cadastrar</button>

            
            
           </form>
           <div>
                
                <button onClick={proximo}>Proximo cliente</button>

            </div>
        </div>
    )
}