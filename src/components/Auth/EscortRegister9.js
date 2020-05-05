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
                          horario:{
                            items:["24 Horas","Personalizar Tiiempo"],
                            selection:"24 Horas",
                          },
                        }

function App() {

  const [btnLunes, setBtnLunes] = useState("No");
  const [btnMartes, setBtnMartes] = useState("No");
  const [btnMiercoles, setBtnMiercoles] = useState("No");
  const [btnJueves, setBtnJueves] = useState("No");
  const [btnViernes, setBtnViernes] = useState("No");
  const [btnSabado, setBtnSabado] = useState("No");
  const [btnDomingo, setBtnDomingo] = useState("No");

  const [btn, setBtn] = useState("24 Horas");
  const [btnBesos, setBtnBesos] = useState("No");
  const [btnAnal, setBtnAnal] = useState("No");
  const [btnVaginal, setBtnvaginal] = useState("Sí");
  const [btnMasaje, setBtnMasaje] = useState("No");
  const [btnDucha, setBtnDucha] = useState("No");
  const [btnOral, setBtnOral] = useState("No");
  const [btnFacial, setBtnFacial] = useState("No");
  const [btnOrgias, setBtnOrgias] = useState("No");
  const [btnStrap, setBtnStrap] = useState("No");
  //const state = useContext(StateContext);

  const [inputs, setImputs] = useState(inputsDefault);

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">¿Qué días trabajas?</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4 text-center">
              <div className="input-group mb-3">
                <div className={(btnLunes==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnLunes((btnLunes==="Sí")?"No":"Sí")}>
                  Lunes
                </div>
                <div className={(btnMartes==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnMartes((btnMartes==="Sí")?"No":"Sí")}>
                  Martes
                </div>
                <div className={(btnMiercoles==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnMiercoles((btnMiercoles==="Sí")?"No":"Sí")}>
                  Miercoles
                </div>
                <div className={(btnJueves==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnJueves((btnJueves==="Sí")?"No":"Sí")}>
                  Jueves
                </div>
                <div className={(btnViernes==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnViernes((btnViernes==="Sí")?"No":"Sí")}>
                  Viernes
                </div>
                <div className={(btnSabado==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnSabado((btnSabado==="Sí")?"No":"Sí")}>
                  Sábados
                </div>
                <div className={(btnDomingo==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnDomingo((btnDomingo==="Sí")?"No":"Sí")}>
                  Domingo
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">¿Qué horario dispones?</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4">
              <Selector
                  setImputs={setImputs}
                  inputs={inputs}
                  name="horario" />
            </div>
          </div>


          <div className="row justify-content-center mb-1">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">¿Qué incluye tus servicios?</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4 text-center">
              <div className="input-group mb-3">
                <div className={(btnBesos==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnBesos((btnBesos==="Sí")?"No":"Sí")}>
                  Besos
                </div>
                <div className={(btnAnal==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnAnal((btnAnal==="Sí")?"No":"Sí")}>
                  Anal
                </div>
                <div className={(btnVaginal==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnvaginal((btnVaginal==="Sí")?"No":"Sí")}>
                  Vaginal
                </div>
                <div className={(btnMasaje==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnMasaje((btnMasaje==="Sí")?"No":"Sí")}>
                  Masaje
                </div>
                <div className={(btnDucha==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnDucha((btnDucha==="Sí")?"No":"Sí")}>
                  Con ducha
                </div>
                <div className={(btnOral==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnOral((btnOral==="Sí")?"No":"Sí")}>
                  Oral
                </div>
                <div className={(btnFacial==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnFacial((btnFacial==="Sí")?"No":"Sí")}>
                  Facial
                </div>
                <div className={(btnOrgias==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnOrgias((btnOrgias==="Sí")?"No":"Sí")}>
                  Orgías
                </div>
                <div className={(btnStrap==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnStrap((btnStrap==="Sí")?"No":"Sí")}>
                  Strap-on
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center mt-0">
            <div className="col col-sm-4">
              <Link className="btn btn-primary btn-block text-white btn-lg text-decoration-none" href={Config.ConfigAppUrl+"Auth/EscortRegister10"} >
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
