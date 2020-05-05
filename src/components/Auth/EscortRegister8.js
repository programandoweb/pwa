import React,{ useState } from 'react';
import '../../App.css';
import background from '../../assets/images/design/background.jpg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";
import Selector from "../Selector";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const  inputsDefault  = {
                          atiendoa:{
                            items:["Hombres","Mujeres","Ocasionalmente"],
                            selection:"Hombres",
                          },
                        }

function App() {

  const [btnBailar, setBtnBailar] = useState("No");
  const [btnCine, setBtnCine] = useState("No");
  const [btnGym, setBtnGym] = useState("No");
  const [btnViajar, setBtnViajar] = useState("No");
  const [btnVideojuegos, setBtnVideojuegos] = useState("No");
  const [btnFutbol, setBtnFutbol] = useState("No");
  const [btnSurf, setBtnSurf] = useState("No");
  const [btnParacaidismo, setBtnParacaidismo] = useState("No");
  const [btnTatuajes, setBtnTatuajes] = useState("No");
  const [btnAtencion, setBtnAtencion] = useState("Hombres");

  const [inputs, setImputs] = useState(inputsDefault);

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">Hobbies & Gustos</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4 text-center">
              <div className="input-group mb-3">
                <div className={(btnBailar==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnBailar((btnBailar==="Sí")?"No":"Sí")}>
                  Bailar
                </div>
                <div className={(btnCine==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnCine((btnCine==="Sí")?"No":"Sí")}>
                  Cine
                </div>
                <div className={(btnGym==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnGym((btnGym==="Sí")?"No":"Sí")}>
                  Gimnasio
                </div>
                <div className={(btnViajar==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnViajar((btnViajar==="Sí")?"No":"Sí")}>
                  Viajar
                </div>
                <div className={(btnVideojuegos==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnVideojuegos((btnVideojuegos==="Sí")?"No":"Sí")}>
                  Videojuegos
                </div>
                <div className={(btnFutbol==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnFutbol((btnFutbol==="Sí")?"No":"Sí")}>
                  Fútbol
                </div>
                <div className={(btnSurf==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnSurf((btnSurf==="Sí")?"No":"Sí")}>
                  Surf
                </div>
                <div className={(btnParacaidismo==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnParacaidismo((btnParacaidismo==="Sí")?"No":"Sí")}>
                  Paracaidísmo
                </div>
                <div className={(btnTatuajes==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnTatuajes((btnTatuajes==="Sí")?"No":"Sí")}>
                  Tatuajes
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4 text-center">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <input type="text" name="edad" className="form-control" placeholder="Agregar más hobbies"/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-1">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">Atiendo a:</div>
              <div className="text-white text-decoration-none h6" href={Config.ConfigAppUrl+"Auth/Recover"} >
                Selecciona el tipo de cliente que ofreces tus servicios.
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4">
              <Selector
                  setImputs={setImputs}
                  inputs={inputs}
                  name="atiendoa" />
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col col-sm-4">
              <Link className="btn btn-primary btn-block btn-lg text-white text-decoration-none" href={Config.ConfigAppUrl+"Auth/EscortRegister9"} >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
