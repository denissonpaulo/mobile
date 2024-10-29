import logo from '../logo.gif';
import '../App.css';
import Header from '../Header';
import {useState} from 'react'; 
import {Link} from 'react-router-dom';
 
function App() {

  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }
 
  return (
    <div className="App">
        <Header title="Header Param" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Link to="/cadastro">Acessar cadastro</Link>
        </p>
        <p>
          <form>
            <input type="text" placeholder="Informe usuário:" /><br/>
            <input type="password" placeholder="Informe senha:" /><br/>
            <input type="button" value="ENTRAR" onClick={increment} />
          </form>
        </p>
        <p>{contador}</p> Tentativas!
    </div>
    
  );
}

export default App;
