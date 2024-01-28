// Importa a biblioteca React.
import React from "react";

// Componente funcional 'Search' que recebe as propriedades 'search' e 'setSearch'.
const Search = ({ search, setSearch }) => (
  // Renderiza o componente de pesquisa.
  <div className="search">
    <h2>Pesquisar:</h2>
    {/* Campo de entrada para realizar a pesquisa, atualizando 'search' conforme o usuário digita. */}
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..."
    />
  </div>
);

// Exporta o componente 'Search' para ser utilizado em outros arquivos.
export default Search;
