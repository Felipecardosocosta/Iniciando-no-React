const express = require('express')

const mysql = require('mysql2/promise')

const port = 3000

const aplication = express()


let conectar

aplication.use(express.json())

async function criarLigacao() {

    conectar = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        database: "conta",
        user: 'root',
        password: '******'

    })
    console.log("conectou com o banco");


}

criarLigacao().catch(err => {
    console.error(`deu merda ${err}`);
})

aplication.get('/users', async (req, res) => {


    try {

        const [result] = await conectar.query(`
            SELECT * FROM usuario 
            `)

        res.status(200).json(result)


    } catch (err) {

        console.error(`Deu merda ${err}`);

        res.status(404)
    }

})

aplication.get('/users/:id', async (req, res) => {

    const { id } = req.params

    try {

        const [usuario] = await conectar.query(`
            SELECT * FROM usuario WHERE id = ${id}`)



        if (usuario.length === 0) {

            res.status(404).json("Usuario nao existe")

        }

        res.status(200).json(usuario[0])

    } catch (err) {
        console.error(`Deu merda ${err}`);
        res.status(404)

    }
})


aplication.post('/user20%insert/', async (req, res) => {

    const { nome, idade } = req.body

    try {
        const [result] = await conectar.query(`
            INSERT INTO usuario(nome,idade) VALUE(?,?)`,
            [nome, idade])

        res.status(200).json(`Usuario ${nome} cadastrado `)
        console.log(result);

    } catch (err) {
        console.error(`usuario nao cadastrado ${err}`);

    }



})

aplication.put('/user/:id/modify', async (req, res) => {

    const { nome, idade } = req.body
    const { id } = req.params

    try {
        const [result] = await conectar.query(`
            UPDATE usuario SET nome = ? WHERE id = ?
            `, [nome, id])

        res.status(200).json(result)

    } catch (err) {
        console.error(`Deu merda ${err}`);
        res.status(404)

    }

})

aplication.delete('/user/:id/delete', async (req, res) => {


    const { id } = req.params
    try {
        const [resultados] = await conectar.query(`
            DELETE FROM usuario WHERE id = ?  
            `, [id])

        res.status(200).json(resultados)

    } catch (err) {

        console.error(`Deu merda ${err}`);

        res.status(404).json(err)
        

    }
})





aplication.listen(port, () => {
    console.log("Rodou !!!");

})

