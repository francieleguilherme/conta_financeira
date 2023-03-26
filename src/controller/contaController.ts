import { Request, Response} from 'express'
import { ContaUseCase } from '../useCase/contaUseCase'
import BadRequestError from '../module/errors/badRequest'
import { movimentaConta, contaDados} from "../infra/db/dados"


class ContaController {

    getAll(request: Request, response: Response) {

        const useCase = new ContaUseCase()  
        const listContas = useCase.getAll()
  
        return response.status(200).json(listContas) 
    }

    getBy(request: Request, response: Response) {

        const dataAtual = request.body
        const useCase = new ContaUseCase() 
        dataAtual.dataMovimentacao = useCase.getBy()

    
        return response.status(200).json(dataAtual.dataMovimentacao) 
    }
   

   //descrição, tipo e valor
    post(request: Request, response: Response){

        try {
             
            const newMovimetaConta = request.body

            if (!newMovimetaConta.description || !newMovimetaConta.type || !newMovimetaConta.valor) {

                console.log('Verifique se todos os dados foram preenchidos!')
                return response.status(400).send('Verifique se todos os dados foram preenchidos')

            }else if(newMovimetaConta.type != 'E' && newMovimetaConta.type != 'S' ){

                return response.status(400).send('Invalido. Tipo de dados permitidos E - entrada ou S - saida')

            }
           
            return response.send('Nova conta Criada!') 

            
                      
        } catch (error: any) {

           return response.status(500).json(error)   
        }

    }
   
    
    //verificando saldo
    get(request: Request, response: Response) {

        const  verificandoSaldo = request.body

        if (contaDados.saldo < verificandoSaldo.valor) {

            return response.status(400).send('Saldo Insuficiente')
        
        }else if( contaDados.saldo - verificandoSaldo.valor){

            return response.send('Conta paga com sucesso!' ) 

        }
    
    }
    

}  

export { ContaController }
