import {  movimentaConta } from "../infra/db/dados"
import { movimentacaoContaDto} from "../module/dto/movimentacaoContaDto"


class ContasRepository {
  getAll(){
    return movimentaConta
  }

}
   
export { ContasRepository}