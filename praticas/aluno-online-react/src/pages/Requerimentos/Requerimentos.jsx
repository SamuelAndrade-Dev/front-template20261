import { useState, useEffect } from 'react';
import Layout from "../Layout";
import Tabela from "../../components/Tabela/Tabela";
import { listarRequerimentos } from "../../services/requerimentoService";

export default function Requerimentos({ onCreate }) {
  const [requerimentos, setRequerimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    buscarRequerimentos();
  }, []);

  const buscarRequerimentos = async () => {
    try {
      setCarregando(true);
      setErro(null);
      const dados = await listarRequerimentos();
      
      const dadosFormatados = dados.map(req => ({
        tipo: req.tipo,
        data: (() => {
          if (!req.data) return '';
          const [year, month, day] = req.data.split('-');
          return `${day}/${month}/${year}`;
        })(),
        status: req.status,
      }));
      
      setRequerimentos(dadosFormatados);
      console.log('Requerimentos carregados:', dados);
    } catch (err) {
      console.error('Erro ao carregar requerimentos:', err);
      setErro('Erro ao carregar requerimentos. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  const colunas = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

  const handleCriarRequerimento = () => {
    onCreate?.();
  };

  return (
    <Layout 
      subtitulo="Faça solicitações online para a secretaria"
    >
      <div style={{ marginBottom: '20px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={handleCriarRequerimento}
        >
          ➕ Novo Requerimento
        </button>
      </div>

      {carregando && <p style={{ textAlign: 'center', color: '#666' }}>Carregando requerimentos...</p>}
      {erro && <p style={{ textAlign: 'center', color: '#c53030' }}>{erro}</p>}
      {!carregando && <Tabela colunas={colunas} dados={requerimentos} />}
    </Layout>
  );
}