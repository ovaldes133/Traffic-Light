
import '../estilos/semaforo.css';
import React, { Component} from 'react';

class Semaforo extends Component {
    constructor(){
      super();
        this.state = {
          estadoluzRoja: "apagada-roja",
          estadoluzAmarilla: "apagada-amarilla",
          estadoluzVerde: "apagada-verde",
        };
    }
    render(){
    return (
        <div className='contenedor-semaforo' >
            <div className='semaforo' >
                <div className='red' id={this.state.estadoluzRoja} 
                onClick={()=>this.setState({estadoluzRoja: "encendida-rojo", estadoluzAmarilla: "apagada-amarilla", estadoluzVerde: "apagada-verde"})}></div>
                <div className='yellow' id= {this.state.estadoluzAmarilla} 
                onClick={()=>this.setState({estadoluzRoja: "apagada-roja", estadoluzAmarilla: "encendida-amarilla", estadoluzVerde: "apagada-verde"})}></div>
                <div className='green' id= {this.state.estadoluzVerde} 
                onClick={()=>this.setState({estadoluzRoja: "apagada-roja", estadoluzAmarilla: "apagada-amarilla", estadoluzVerde: "encendida-verde"})}></div>

            </div>


        </div>

    );
    }

}

export default Semaforo;