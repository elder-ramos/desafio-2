// Bibliotecas
import { useEffect, useState } from "react";
import Select from "react-select";

// Importação API para uso
import CidadesAPI from "./CidadesAPI";

const SelectCidades = (props) => {

    const [selectedCity, setSelectedCity] = useState();
  
    const [city, setCity] = useState([]);

    // Passando informações para o componente pai (Form.js)
    useEffect(() =>{
      props.getValue(selectedCity)
    })


    // Options da biblioteca Select
    let optionsCidades = [];

    // Request GET da API de cidades com atualização do city (linha 12);
  useEffect(() => {
    CidadesAPI.get()
      .then((resp) => setCity(resp.data))
      .catch((err) => {
        console.error("vish, deu problema " + err);
      });
  }, []);

  // map para criar uma array no estilo do options (Select)
  optionsCidades = city.map(function (cidade) {
    return {
      label: cidade.name,
      value: cidade.name,
    };
  });

  return (
    <div>
        <Select
        className="Select"
        isMulti
        options={optionsCidades}
        onChange={(item) => setSelectedCity(item)}
        placeholder="Cidades (Esse campo é obrigatório)"
      />
    </div>
  )
}

export default SelectCidades