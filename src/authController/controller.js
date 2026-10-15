let usuarios = []

export function create(req,res){
    const {nome, senha} = req.body

    if(!nome || !senha){
        return res.status(400).json({
            mensagem: 'Os campo nome e senha são obritórios'
        })
    }

    try {

    const id = usuarios.length + 1

    const novoUsuario = {
        nome: nome,
        senha: senha,
        id: id
    }

    const cadastro = usuarios.push(novoUsuario)
    const usuario = usuarios[0]

    if(!cadastro){
        return res.status(400).json({
            mensagem: 'Erro ao cadastrar usuário'
        })
    }

    return res.status(200).json({
        mensagem: 'Usuario cadastrado com sucesso!',
        usuario: usuario,
        id: id

    })

    } catch (error) {
        console.error(error)
        return res.status(400).json({mensagem: 'Ocorreu algum erro no serivdor'})
    }

}

export function read(req,res){
    try {
        return res.status(200).json({
            usuarios: usuarios
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({mensagem: 'Erro ao listar usuários'})
    }
}

export function put(req,res){
    const {id, nome ,senha} = req.body

    const existente = usuarios.find(user => user.id === id)

    if(!existente){
        return res.status(400).json({
            mensagem: 'Erro ao encontrar usuário'
        })
    }

    try {

        existente.nome = nome,
        existente.senha = senha

        return res.status(200).json({
            mensagem: 'Atualização de usuário com sucesso',
            usuarios: existente
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({mensagem: 'Ocorreu algum erro ao atualizar usuário'})
    }

}

export function del(req,res){
    const {id} = req.body
    
    const existente = usuarios.find(user => user.id === id)

    if(!existente){
        return res.status(400).json({
            mensagem: 'Usuário não encontrado'
        })
    }

    try {
   
    const novaLista = usuarios.filter(user => user.id !== id)

    usuarios = [...novaLista];

    return res.status(200).json({
        mensagem: 'Usuário removido com sucesso',
        usuarios: usuarios

    })

     } catch (error) {
        console.error((error))
        return res.status(400).json({mensagem: 'Erro ao deletar usuário'})
    }

}