import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { criarRequerimento } from '../services/requerimentoService';
import './RequerimentoForm.css';

const tipos = [
  { value: '', label: 'Selecione um tipo...' },
  { value: 'Revisão de Menção', label: 'Revisão de Menção' },
  { value: 'Dispensa de Disciplina', label: 'Dispensa de Disciplina' },
  { value: 'Trancamento de Matrícula', label: 'Trancamento de Matrícula' },
];

export default function RequerimentoForm({ onCancel, onSucesso }) {
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      tipo: '',
      descricao: '',
      data: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = async (dados) => {
    try {
      setEnviando(true);
      setErro(null);
      
      console.log('Enviando requerimento:', dados);
      const novoRequerimento = await criarRequerimento(dados);
      
      console.log('Requerimento criado com sucesso:', novoRequerimento);
      reset();
      onSucesso?.();
      setTimeout(() => {
        onCancel?.();
      }, 500);
    } catch (err) {
      console.error('Erro ao enviar requerimento:', err);
      setErro('Erro ao enviar requerimento. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  const onInvalidSubmit = (erros) => {
    console.log('Validação falhou:', erros);
  };

  return (
    <section className="requerimento-form-container">
      {erro && (
        <div style={{ 
          padding: '10px 15px', 
          marginBottom: '20px',
          backgroundColor: '#fef2f2',
          color: '#c53030',
          borderRadius: '6px',
          border: '1px solid #fab1a0'
        }}>
          {erro}
        </div>
      )}

      <form className="requerimento-form" noValidate onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
        <div className="form-group">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', {
              required: 'Tipo é obrigatório',
              validate: (value) => value !== '' || 'Selecione um tipo de requerimento',
            })}
            className={errors.tipo ? 'input-error' : ''}
            disabled={enviando}
          >
            {tipos.map((tipo) => (
              <option key={tipo.value} value={tipo.value}>
                {tipo.label}
              </option>
            ))}
          </select>
          {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows="5"
            {...register('descricao', {
              required: 'Descrição é obrigatória',
              minLength: {
                value: 10,
                message: 'A descrição precisa ter ao menos 10 caracteres',
              },
            })}
            className={errors.descricao ? 'input-error' : ''}
            disabled={enviando}
          />
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="data">Data do Requerimento</label>
          <input
            id="data"
            type="date"
            {...register('data')}
            disabled={enviando}
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-button" 
            onClick={onCancel}
            disabled={enviando}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="save-button"
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </section>
  );
}