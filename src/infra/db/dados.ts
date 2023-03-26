import { contaCorrenteDto} from "../../module/dto/contaCorrenteDto";
import { ContaUseCase } from '../../useCase/contaUseCase';
import { movimentacaoContaDto } from "../../module/dto/movimentacaoContaDto";

export const contaDados: contaCorrenteDto = {
  banco: 'Fullture of finance S.A',
  saldo: 1000
}

export let movimentaConta: Array<movimentacaoContaDto> = [

  {
    id: 1,
    description: 'Pagamento YouTubeMusic',
    type: 'S',
    valor: 70,
    dataMovimentacao : '',
  },

  {
    id: 2,
    description: 'Recebimento de venda',
    type: 'E',
    valor: 25,
    dataMovimentacao: '' ,
  },

] 


  
    
 
  

