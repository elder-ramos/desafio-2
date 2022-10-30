// importando do css
import './DadosPessoais.css'

const DadosPessoais = () => {
  return (
    <section>
      <h1>Dados pessoais</h1>
        <label>
          <span>Nome: </span>
          <input type="text" placeholder="Digite seu nome..." pattern="[a-zA-Z]+" required />
        </label>
        <label>
          <span>Email: </span>
          <input type="email" placeholder="example@email.com" required />
        </label>
        <label>
          <span>Telefone: </span>
          <input type="text" pattern="[0-9]+" placeholder="99 9999-0000" required/>
        </label>
        <label>
            <span>CPF: </span>
            <input type="text" pattern="[0-9]+" placeholder="123.456.789-10" required/>
        </label>
    </section>
  );
};

export default DadosPessoais;
