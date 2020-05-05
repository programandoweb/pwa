import React,{ useState,useContext } from 'react';
import '../../App.css';
import background from '../../assets/images/design/background.jpg';
import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState';
import Selector from "../Selector";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const  inputsDefault  = {
                          fumar:{
                            items:["Sí","No","Ocasionalmente"],
                            selection:"No",
                          },
                          beber:{
                            items:["Sí","No","Ocasionalmente"],
                            selection:"No",
                          },
                        }

function App() {

  const [btnSenos, setBtnSenos] = useState("No");
  const [btnCola, setBtnCola] = useState("No");
  const [btnLipoescultura, setBtnLipoescultura] = useState("No");
  const [btnBichectomia, setBtnBichectomia] = useState("No");

  const [inputs, setImputs] = useState(inputsDefault);

  const state = useContext(StateContext);


  function handlerFinish(){
    let modal = {
                  status:true,
                  title:"Registrado con éxito",
                  message:"ya puedes usar tu cuenta",
                  customButtom:{
                    link:Config.ConfigAppUrl+"Auth/EscortRegister8"
                  },
                  ico:{
                        contentColor:"modal-ico-bg-primary",
                        ico:'fas fa-check',
                      },
                }
    state.setState({dialog:modal})
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">Talla de senos</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-map-marker"></i>
                  </span>
                </div>
                <input type="text" name="edad" className="form-control" placeholder="Medidas en centímetros"/>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">¿Tienes cirugías estéticas?</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="input-group mb-3">
                <div className={(btnSenos==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnSenos((btnSenos==="Sí")?"No":"Sí")}>
                  Senos
                </div>
                <div className={(btnCola==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnCola((btnCola==="Sí")?"No":"Sí")}>
                  Cola
                </div>
                <div className={(btnLipoescultura==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnLipoescultura((btnLipoescultura==="Sí")?"No":"Sí")}>
                  Lipoescultura
                </div>
                <div className={(btnBichectomia==="Sí")?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"} onClick={()=>setBtnBichectomia((btnBichectomia==="Sí")?"No":"Sí")}>
                  Bichectomía
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
                <input type="text" name="edad" className="form-control" placeholder="Agregar más cirugías"/>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">¿Fumas?</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <Selector
                  setImputs={setImputs}
                  inputs={inputs}
                  name="fumar" />
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question text-left">Bebes?</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4">
              <Selector
                  setImputs={setImputs}
                  inputs={inputs}
                  name="beber" />
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div onClick={handlerFinish}  className="btn btn-primary btn-block btn-lg text-white text-decoration-none">
                Continuar
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
