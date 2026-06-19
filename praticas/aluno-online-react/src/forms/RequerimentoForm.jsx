import { useForm } from 'react-hook-form';
import './RequerimentoForm.css';

const tipos = [
  { value: '', label: 'Selecione um tipo...' },
  { value: 'Revisão de Menção', label: 'Revisão de Menção' },
  { value: 'Dispensa de Disciplina', label: 'Dispensa de Disciplina' },
  { value: 'Trancamento de Matrícula', label: 'Trancamento de Matrícula' },
];

export default function RequerimentoForm({ onCancel }) {
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

  const onSubmit = (dados) => {
    console.log('Requerimento enviado:', dados);
    reset();
    setTimeout(() => {
      onCancel?.();
    }, 500);
  };

  const onInvalidSubmit = (erros) => {
    console.log('Validação falhou:', erros);
  };

  return (
    <section className="requerimento-form-container">
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
          />
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="data">Data do Requerimento</label>
          <input
            id="data"
            type="date"
            {...register('data')}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="save-button">
            Salvar
          </button>
        </div>
      </form>
    </section>
  );
}