import React,{ useState } from 'react';
import '../../App.css';
import logo from '../../assets/images/design/logo-vertical.png';
import background from '../../assets/images/design/background.jpg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";


const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {

  const [btn, setBtn] = useState("Cliente");

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7 col-sm-3 text-center">
              <img className="img-fluid" src={logo} alt="ErosApp"/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 text-center">
              <div className="App-Question text-center">¡Bienvenido!</div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-12 col-sm-4 text-center">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" name="login" className="form-control" placeholder="Nombre de usuario" aria-label="Amount (to the nearest dollar)"/>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input name="password" type="password" className="form-control" placeholder="Contraseña"/>
                <input name="tipo_cliente" type="hidden" value={btn}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4 text-center">
              <div className="App-Question text-center">Iniciar cuenta como:</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-4">
            <div className="col-4 col-sm-2 pr-0 pl-2">
              <div onClick={()=>setBtn("Cliente")}  className={(btn==='Cliente')?"btn btn-primary btn-block text-white text-decoration-none":"btn btn-secondary btn-block text-white text-decoration-none"}>
                Cliente
              </div>
            </div>
            <div className="col-4 col-sm-2 pr-0 pl-1">
              <div onClick={()=>setBtn("Escort")} className={(btn==='Escort')?"btn btn-primary btn-block text-white text-decoration-none":"btn btn-secondary btn-block text-white text-decoration-none"}>
                Escort
              </div>
            </div>
            <div className="col-4 col-sm-2 pl-1">
              <div onClick={()=>setBtn("Hotel")} className={(btn==='Hotel')?"btn btn-primary btn-block text-white text-decoration-none":"btn btn-secondary btn-block text-white text-decoration-none"}>
                Hotel
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-12 col-sm-4 text-center">
              <div className="text-center h6">¿No tienes una cuenta? <Link href={Config.ConfigAppUrl+"Auth/Register"} className="text-pink">Regístrate</Link></div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-4">
            <div className="col-12 col-sm-4">
              <div  className="btn btn-primary btn-block text-white text-decoration-none">
                Iniciar Sesión
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-12 col-sm-4 text-center">
              <Link className="text-white text-decoration-none h6" href={Config.ConfigAppUrl+"Auth/Recover"} >
                ¿Olvidaste la contraseña?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
