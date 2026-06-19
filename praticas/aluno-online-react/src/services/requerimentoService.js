import { apiClient } from './apiClient.js';

const API_URL = 'http://localhost:3000/requerimentos';

export async function listarRequerimentos() {
  try {
    const data = await apiClient.get(API_URL);
    return data;
  } catch (error) {
    console.error('Erro ao buscar requerimentos:', error);
    throw error;
  }
}

export async function criarRequerimento(requerimento) {
  try {
    const dados = {
      ...requerimento,
      status: 'Pendente',
      criadoEm: new Date().toISOString(),
    };

    const novoRequerimento = await apiClient.post(API_URL, dados);
    return novoRequerimento;
  } catch (error) {
    console.error('Erro ao criar requerimento:', error);
    throw error;
  }
}

export async function obterRequerimento(id) {
  try {
    const data = await apiClient.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error('Erro ao buscar requerimento:', error);
    throw error;
  }
}

export async function atualizarRequerimento(id, requerimento) {
  try {
    const requerimentoAtualizado = await apiClient.put(`${API_URL}/${id}`, requerimento);
    return requerimentoAtualizado;
  } catch (error) {
    console.error('Erro ao atualizar requerimento:', error);
    throw error;
  }
}

export async function deletarRequerimento(id) {
  try {
    await apiClient.del(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar requerimento:', error);
    throw error;
  }
}
