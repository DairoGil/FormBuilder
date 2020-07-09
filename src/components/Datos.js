import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/Datos.css'

class Datos extends React.Component {

    constructor(props){
        super(props);
        let dateformat = this.props.match.params.date.split("-");
        this.state = {
            text : this.props.match.params.text,
            date : `${dateformat[2]}/${dateformat[1]}/${dateformat[0]}`,
            number : this.props.match.params.number
        }
    }

    render(){ 
        return(
            <div className="container-data">
                <div>
                    <h6 class="title">Datos del formulario</h6>
                    <div>
                        {`{`}<br/>
                        <div className="data">{`"texto": ${this.state.text}`}</div><br/>
                        <div className="data">{`"fecha": ${this.state.date}`}</div><br/>
                        <div className="data">{`"cantidad": ${this.state.number}`}</div><br/>
                        {`}`}
                    </div>
                </div>
                <div className="container-button">
                    <div className="button">
                        <Link to={'/menu'}>Menú</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Datos