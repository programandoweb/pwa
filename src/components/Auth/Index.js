import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import Register4 from "./Register4";
import Register5 from "./Register5";
import Register6 from "./Register6";
import Register7 from "./Register7";
import EscortRegister0 from "./EscortRegister0";
import EscortRegister1 from "./EscortRegister1";
import EscortRegister2 from "./EscortRegister2";
import EscortRegister3 from "./EscortRegister3";
import EscortRegister4 from "./EscortRegister4";
import EscortRegister5 from "./EscortRegister5";
import EscortRegister6 from "./EscortRegister6";
import EscortRegister7 from "./EscortRegister7";
import EscortRegister8 from "./EscortRegister8";
import EscortRegister9 from "./EscortRegister9";
import EscortRegister10 from "./EscortRegister10";
//import EscortRegister11 from "./EscortRegister11";
import EscortRegister12 from "./EscortRegister12";
import EscortRegister13 from "./EscortRegister13";
import EscortRegister14 from "./EscortRegister14";
import EscortRegister15 from "./EscortRegister15";



import HotelRegister0 from "./HotelRegister0";
import HotelRegister1 from "./HotelRegister1";
import HotelRegister2 from "./HotelRegister2";
import HotelRegister3 from "./HotelRegister3";
import HotelRegister4 from "./HotelRegister4";

import ClientRegister0 from "./ClientRegister0";
import ClientRegister1 from "./ClientRegister1";
import ClientRegister2 from "./ClientRegister2";
import ClientRegister2_2 from "./ClientRegister2_2";
import ClientRegister3 from "./ClientRegister3";
import ClientRegister4 from "./ClientRegister4";
import ClientRegister5 from "./ClientRegister5";
import ClientRegister6 from "./ClientRegister6";

import Terminos_y_Condiciones from "./Terminos_y_Condiciones";
import QuestionRol from "./QuestionRol";
import QuestionLocation from "./QuestionLocation";
import Recover from "./Recover";
import Login from "./Login";
import Functions from "../../helpers/functions";
import store from "../../helpers/store";
import Config from "../../helpers/config";

class App extends React.Component {

  componentDidMount() {
    this.lastPage()
  }

  componentWillUnmount() {
    this.lastPage()
  }

  lastPage=()=>{
    // if (store.get("user").user_id!==undefined) {
    //   if (document.location.pathname==='/Auth/Register1' && store.get("lastPage")!==document.location.pathname) {
    //     Functions.PostAsync("User","getLastPage",{store.get("user").user_id},{name:"callbackRedirect",funct:callbackRedirect})
    //     //document.location.href  = Config.ConfigAppUrl+store.get("lastPage");
    //   }
    //   //Functions.PostAsync("User","lastPage",{lastPage:document.location.pathname,user_id:store.get("user").user_id},{setState:this._setState,state:this.state})
    //   store.set("lastPage",document.location.pathname);
    // }
  }

  callbackRedirect=(data)=>{
    //console.log(data);
    //document.location.href  =   Config.ConfigAppUrl+store.get("lastPage");
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Auth/Login" render={()=><Login/>}/>
          <Route exact path="/Auth/Register" render={()=><Register/>}/>
          <Route exact path="/Auth/Register1" render={()=><Register1/>}/>
          <Route exact path="/Auth/Register2" render={()=><Register2/>}/>
          <Route exact path="/Auth/Register3" render={()=><Register3/>}/>
          <Route exact path="/Auth/Register4" render={()=><Register4/>}/>
          <Route exact path="/Auth/Register5" render={()=><Register5/>}/>
          <Route exact path="/Auth/Register6" render={()=><Register6/>}/>
          <Route exact path="/Auth/Register7" render={()=><Register7/>}/>
          <Route exact path="/Auth/QuestionRol" render={()=><QuestionRol/>}/>
          <Route exact path="/Auth/QuestionLocation" render={()=><QuestionLocation/>}/>
          <Route exact path="/Auth/EscortRegister0" render={()=><EscortRegister0/>}/>
          <Route exact path="/Auth/EscortRegister1" render={()=><EscortRegister1/>}/>
          <Route exact path="/Auth/EscortRegister2" render={()=><EscortRegister2/>}/>
          <Route exact path="/Auth/EscortRegister3" render={()=><EscortRegister3/>}/>
          <Route exact path="/Auth/EscortRegister4" render={()=><EscortRegister4/>}/>
          <Route exact path="/Auth/EscortRegister5" render={()=><EscortRegister5/>}/>
          <Route exact path="/Auth/EscortRegister6" render={()=><EscortRegister6/>}/>
          <Route exact path="/Auth/EscortRegister7" render={()=><EscortRegister7/>}/>
          <Route exact path="/Auth/EscortRegister8" render={()=><EscortRegister8/>}/>
          <Route exact path="/Auth/EscortRegister9" render={()=><EscortRegister9/>}/>
          <Route exact path="/Auth/EscortRegister10" render={()=><EscortRegister10/>}/>

          <Route exact path="/Auth/EscortRegister12" render={()=><EscortRegister12/>}/>
          <Route exact path="/Auth/EscortRegister13" render={()=><EscortRegister13/>}/>
          <Route exact path="/Auth/EscortRegister14" render={()=><EscortRegister14/>}/>
          <Route exact path="/Auth/EscortRegister15" render={()=><EscortRegister15/>}/>


          <Route exact path="/Auth/HotelRegister0" render={()=><HotelRegister0/>}/>
          <Route exact path="/Auth/HotelRegister1" render={()=><HotelRegister1/>}/>
          <Route exact path="/Auth/HotelRegister2" render={()=><HotelRegister2/>}/>
          <Route exact path="/Auth/HotelRegister3" render={()=><HotelRegister3/>}/>
          <Route exact path="/Auth/HotelRegister4" render={()=><HotelRegister4/>}/>


          <Route exact path="/Auth/ClientRegister0" render={()=><ClientRegister0/>}/>
          <Route exact path="/Auth/ClientRegister1" render={()=><ClientRegister1/>}/>
          <Route exact path="/Auth/ClientRegister2" render={()=><ClientRegister2/>}/>
          <Route exact path="/Auth/ClientRegister2_2" render={()=><ClientRegister2_2/>}/>
          <Route exact path="/Auth/ClientRegister3" render={()=><ClientRegister3/>}/>
          <Route exact path="/Auth/ClientRegister4" render={()=><ClientRegister4/>}/>
          <Route exact path="/Auth/ClientRegister5" render={()=><ClientRegister5/>}/>
          <Route exact path="/Auth/ClientRegister6" render={()=><ClientRegister6/>}/>


          <Route exact path="/Auth/Terminos_y_Condiciones" render={()=><Terminos_y_Condiciones/>}/>
          <Route exact path="/Auth/Recover" render={()=><Recover/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
