import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Menu.css'

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasText: false,
            hasDate: false,
            hasNumber: false,
            message: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    convert(param){
        if(param) return '1';

        return '0';
    }

    render(){
        return(
            <div className="container-menu">
                <h6 class="title-menu">Seleccione los campos que tendrá el formulario</h6>
                <div>
                    <label for="text" class="container-check">Texto
                        <input type="checkbox" id="text" name="hasText"
                        value={this.state.hasText} onChange={this.onChange.bind(this)}/>
                        <span class="checkmark"></span>
                    </label>
                    <label for="date" class="container-check">Fecha
                        <input type="checkbox" id="date" name="hasDate"
                        value={this.state.hasDate} onChange={this.onChange.bind(this)}/>
                        <span class="checkmark"></span>
                    </label>
                    <label for="number" class="container-check">Número
                        <input type="checkbox" id="number" name="hasNumber"
                        value={this.state.hasNumber} onChange={this.onChange.bind(this)}/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div className="container-button">
                    <div className="button-menu">
                        <Link to={`/form/${this.convert(this.state.hasText)}/${this.convert(this.state.hasDate)}/${this.convert(this.state.hasNumber)}`}>Crear</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu