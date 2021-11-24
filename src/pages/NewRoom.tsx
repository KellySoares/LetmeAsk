import { Link } from 'react-router-dom';
//import { useAuth } from '../hooks/useAuth';
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";


// webpack (snowpack, vite, ...)
import { Button } from "../components/Button";


import "../styles/auth.scss";

export function NewRoom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="lustração simbolizando troca de perguntas e respostas."
        />
        <strong> Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire dúvidas de sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetmeAsk" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala." />
            <Button type="submit">Criar sala.</Button>
          </form>
          <p>
              Quer entrar em uma sala existente? <Link to="/" > Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
