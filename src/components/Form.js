// Biblioteca do react
import { useState } from "react";

// Importação do componente para ficar mais organizado
import DadosPessoais from "./DadosPessoais";

// Importação do select das cidades/países.
import SelectCidades from "./SelectCidades";
import SelectPaises from "./SelectPaises";

const Form = () => {
  // useState
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  // Função p/ pegar as cidades/países selecionados. (Dados serão atualizados pelo set do useState)
  const getCityValue = (value) => {
    setSelectedCity(value);
  };

  const getCountryValue = (value) => {
    setSelectedCountry(value);
  };

  return (
    <>
      {/* //formulário */}
      <form>
        <main>
          {/* Parte dos dados pessoais */}
          <DadosPessoais />
          {/* Select dos países e cidades com funções para pegar informações deles */}
            <section>
              <h1>Destinos de interesse</h1>
              <SelectPaises getValue={getCountryValue} />
              <SelectCidades getValue={getCityValue} />
              {/* O botão ficará desabilitado enquanto não houver nenhum país/cidade selecionado, fazendo assim com que o select seja obrigatório */}
            </section>
          </main>
          <input type="submit" id="submitBtn" disabled={!selectedCountry || !selectedCity}/>
      </form>
    </>
  );
};

export default Form;
