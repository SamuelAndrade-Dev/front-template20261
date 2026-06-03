import { useEffect, useState } from 'react';
import { Link } from 'react-router'
import { listar } from "../services/produtoServices"

function Listagem() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const disparar = async () => {
            const resposta = await listar();
            setDados(resposta)
        }
        disparar();
    }, [])
    return (
        <>
            <h1>Listagem de Produtos</h1>
            <Link to="/produtos/novo">+Adicionar</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Os dados dos produtos (<tr> e <td>) entram aqui */}
                </tbody>
            </table>
        </>
    )
}

export default Listagem;