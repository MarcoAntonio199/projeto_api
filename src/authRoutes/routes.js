import { create, read, put, del } from "../authController/controller.js";
import { Router } from "express";

const router = Router()

router.post('/criar', create)
router.get('/listar', read)
router.put('/atualizar', put)
router.delete('/deletar', del)

export default router
