// Bibliotecas
import { useEffect, useState } from "react";
import Select from "react-select";

// Importação API para uso
import PaisesAPI from "./PaisesAPI";

const SelectPaises = (props) => {

const [selectedCountry, setSelectedCountry] = useState();

// Passando informações para o componente pai (Form.js)
useEffect(() =>{
  props.getValue(selectedCountry)
})

// useState para os países da API.
const [country, setCountry] = useState([]);

// Options da biblioteca Select
let optionsPaises = [];

// Request GET da API de países com atualização do country (linha X);
useEffect(() => {
    PaisesAPI.get()
      .then((response) => setCountry(response.data))
      .catch((err) => {
        console.error("vish, deu problema " + err);
      });
  }, []);

// map para criar uma array no estilo do options (Select) 
optionsPaises = country.map(function (paises) {
    return {
      label: paises.name_ptbr,
        value: paises.name_ptbr,
    };
  });

  return (
    <div>
        <Select
        className="Select"
        isMulti
        onChange={(item) => setSelectedCountry(item)}
        options={(optionsPaises)}
        placeholder="Países (Esse campo é obrigatório)"
      />
    </div>
  )
}

export default SelectPaises