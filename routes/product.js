const express = require('express');
const router = express.Router();

//RETORNA TODOS OS DADOS
router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem:'usando get'
    });
});
//RETORNA OS DADOS DE UM ITEM ESPECIFICO
router.get('/:id', (req, res, next)=>{
    const id = req.params.id
    res.status(200).send({
        mensagem:'get por id',
        id: id
    });
});
//INSERE UM ITEM
router.post('/',(req, res, next)=>{
    res.status(201).send({
        mensage:'usando post'
    })
});

//DELETA UM ITEM
router.delete('/',(req, res, next)=>{
    res.status(201).send({
        mensage:'usando delete'
    })
});
//ALTERA UM ITEM
router.patch('/',(req, res, next)=>{
    res.status(201).send({
        mensage:'usando patch'
    })
});
module.exports = router;