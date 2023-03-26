import { movimentaConta, contaDados } from "../infra/db/dados"
import { movimentacaoContaDto } from "../module/dto/movimentacaoContaDto"
import BadRequestError from "../module/errors/badRequest"
import { ContasRepository } from "../repository/contaRepository"


class ContaUseCase {

  private contaRepository: ContasRepository

    constructor(){
      this.contaRepository = new ContasRepository()
    }

    getAll(){
      const foundContas = this.contaRepository.getAll()
      if (!foundContas) {
          console.log('Não possui lista de contas')
          throw new BadRequestError('Não possui lista de contas')
      }
      return foundContas

      
    }
   
  
  

   getBy(){

     let data = new Date ()

      let dia = String(data.getDate()).padStart(2, '0')
      
      let mes = String(data.getMonth() +1).padStart(2, '0')

      let ano = data.getFullYear()

      const dataAtual = `${dia}/${mes}/${ano}`


      
      return  dataAtual


    }

  

  


  
  }

  
   
    
export { ContaUseCase }