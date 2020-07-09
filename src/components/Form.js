import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/Form.css'

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasText : this.props.match.params.hasText,
            hasDate : this.props.match.params.hasDate,
            hasNumber : this.props.match.params.hasNumber,
            text: '',
            date: '',
            number: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let textField;
        let dateField;
        let numberField;

        if(this.state.hasText === '1'){
            textField = <div className='container-field col'>
                    <label for='textfield'>Digite el texto</label>
                    <textarea id='textfield' type='text' value={this.state.text} 
                    name='text' onChange={this.onChange.bind(this)}/>
                </div>
        }
        if(this.state.hasDate === '1'){
            dateField = <div className='container-field col'>
                    <label className="int" for='datefield'>Seleccione la fecha</label>
                    <div >
                        <input id='datefield' type='date' value={this.state.date} 
                        name='date' onChange={this.onChange.bind(this)}/>
                    </div>
                </div>
        }
        if(this.state.hasNumber === '1'){
            numberField = <div className='container-field col'>
                    <label className="int" for='numberfield'>Seleccione el valor</label>
                    <div >
                        <input id='numberfield' className='slider' type='range' min="0" max="10" list="tickmarks"
                        name='number' value={this.state.number} onChange={this.onChange.bind(this)}/>
                        <datalist className="rangelist" id="tickmarks">
                            <option value="0">0</option>
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                            <option value="6"/>
                            <option value="7"/>
                            <option value="8"/>
                            <option value="9"/>
                            <option value="10">10</option>
                        </datalist>
                    </div>
                </div>
        }

        return(
            <div className="container-form">
                <div class="row">
                    {textField}
                    {numberField}
                    {dateField}
                </div>
                <div className="container-button">
                    <div className="button-form">
                        <Link to={`/data/${this.state.text === '' ? 'default' : this.state.text}/${this.state.date === '' ? '0000-00-00' : this.state.date}/${this.state.number === '' ? '0' : this.state.number}`}>Enviar</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form