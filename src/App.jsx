// Importa o hook 'useState' do React para gerenciar o estado da aplicação.
import { useState } from 'react';
// Importa os componentes necessários da sua aplicação.
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

// Componente principal da aplicação.
function App() {
  // Define o estado inicial para a lista de tarefas (todos), a string de busca (search),
  // o filtro de exibição (filter) e a ordenação (sort).
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Testando o TODO List",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Função para adicionar uma nova tarefa à lista.
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }];

    // Atualiza o estado da lista de tarefas com a nova lista.
    setTodos(newTodos);
  };

  // Função para remover uma tarefa com base no ID.
  const removeTodo = (id) => {
    const newTodos = [...todos];
    // Filtra as tarefas, removendo aquela que possui o ID correspondente.
    const filteredTodos = newTodos.filter(
      todo => todo.id !== id ? todo : null
    );
    // Atualiza o estado da lista de tarefas com a lista filtrada.
    setTodos(filteredTodos);
  };

  // Função para marcar/desmarcar uma tarefa como concluída.
  const completeTodo = (id) => {
    const newTodos = [...todos];
    // Alterna o estado 'isCompleted' da tarefa com base no ID correspondente.
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    // Atualiza o estado da lista de tarefas com a nova lista.
    setTodos(newTodos);
  };

  // Renderiza o componente principal da aplicação.
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      {/* Componente de busca com a propriedade 'search' e a função 'setSearch'. */}
      <Search search={search} setSearch={setSearch} />
      {/* Componente de filtro com as propriedades 'filter', 'setFilter' e 'setSort'. */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {/* Mapeia e renderiza cada tarefa da lista com base nas condições de filtro, busca e ordenação. */}
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            // Componente de tarefa individual com as propriedades necessárias.
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      {/* Componente do formulário para adicionar novas tarefas. */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

// Exporta o componente principal para ser utilizado em outros arquivos.
export default App;
