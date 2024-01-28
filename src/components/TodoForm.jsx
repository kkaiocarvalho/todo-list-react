// Importa o hook 'useState' do React para gerenciar o estado do componente.
import { useState } from "react";

// Componente funcional 'TodoForm' que recebe a função 'addTodo' como propriedade.
const TodoForm = ({ addTodo }) => {
  // Define dois estados locais utilizando o hook 'useState' para armazenar o valor e a categoria da nova tarefa.
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // Função que lida com o envio do formulário.
  const handleSubmit = (e) => {
    // Evita o comportamento padrão de recarregar a página ao enviar o formulário.
    e.preventDefault();
    // Verifica se o campo de valor (título da tarefa) está vazio e, se estiver, retorna sem adicionar a tarefa.
    if (!value) return;
    // Chama a função 'addTodo' passando o valor (título) e a categoria da nova tarefa.
    addTodo(value, category);
    // Limpa os estados locais, resetando os campos do formulário.
    setValue("");
    setCategory("");
  };

  // Renderiza o componente do formulário de adição de tarefa.
  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      {/* Formulário que chama a função 'handleSubmit' quando é submetido. */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o título da tarefa. */}
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Digite o título"
          // Atualiza o estado 'value' conforme o usuário digita no campo.
          onChange={(e) => setValue(e.target.value)}
        />
        {/* Dropdown para selecionar a categoria da tarefa. */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Seleciona uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        {/* Botão de envio do formulário. */}
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

// Exporta o componente 'TodoForm' para ser utilizado em outros arquivos.
export default TodoForm;
