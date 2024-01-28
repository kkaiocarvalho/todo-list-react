// Componente funcional 'Filter' que recebe as propriedades 'filter', 'setFilter' e 'setSort'.
const Filter = ({ filter, setFilter, setSort }) => {
  // Renderiza o componente de filtro.
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      {/* Divisão contendo as opções de filtro e ordenação. */}
      <div className="filter-options">
        {/* Divisão para as opções de status (completo, incompleto). */}
        <div>
          <p>Status:</p>
          {/* Dropdown para selecionar o filtro de status, chamando 'setFilter' ao alterar. */}
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        {/* Divisão para as opções de ordenação alfabética. */}
        <div>
          <p>Ordem alfabética</p>
          {/* Botão para ordenação ascendente, chamando 'setSort("Asc")' ao clicar. */}
          <button onClick={() => setSort("Asc")}>Asc</button>
          {/* Botão para ordenação descendente, chamando 'setSort("Desc")' ao clicar. */}
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente 'Filter' para ser utilizado em outros arquivos.
export default Filter;
