// Componente funcional 'Todo' que recebe as propriedades 'todo', 'completeTodo' e 'removeTodo'.
const Todo = ({ todo, completeTodo, removeTodo }) => {
  // Renderiza o componente de tarefa individual.
  return (
    <div
      className="todo"
      // Aplica um estilo de tachado ao texto da tarefa se estiver marcada como concluída.
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* Divisão para o conteúdo da tarefa. */}
      <div className="content">
        {/* Parágrafo exibindo o texto da tarefa. */}
        <p>{todo.text}</p>
        {/* Parágrafo exibindo a categoria da tarefa entre parênteses. */}
        <p className="category">({todo.category})</p>
      </div>
      {/* Divisão para os botões de completar e remover a tarefa. */}
      <div>
        {/* Botão para marcar/desmarcar a tarefa como concluída, chamando a função 'completeTodo'. */}
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        {/* Botão para remover a tarefa, chamando a função 'removeTodo'. */}
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

// Exporta o componente 'Todo' para ser utilizado em outros arquivos.
export default Todo;
