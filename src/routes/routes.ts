import { Router } from 'express'
import {ContaController } from '../controller/contaController'
import { ContaUseCase } from '../useCase/contaUseCase'

const routes = Router()
const contaController = new ContaController()

//rotas

routes.post('/conta/', contaController.post )
routes.get('/conta/saldo', contaController.get )
routes.get('/conta/lista', contaController.getAll )
routes.get('/conta/data', contaController.getBy )





export default routes