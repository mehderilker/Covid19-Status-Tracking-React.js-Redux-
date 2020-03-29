import React,{Component} from "react";
import {connect} from "react-redux";
import {getCoronaAllAction} from "../../actions/mainAction"
import logo from '../../assets/img/virus.svg'
import {CoronaCardAll} from '../../components/Card/coronaCardAll'
import '../../assets/styles/coronaPageStyles/coronaPage.css'
import {Button} from "react-bootstrap";

class CoronaPage extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick() {
        this.props.history.push("/country");
    }
    componentDidMount() {
        this.props.getCoronaAllAction();
    }

    render() {
        const {coronaAll} = this.props;
        return (
            <div className = "App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <CoronaCardAll totalCase={coronaAll.cases} totalDeath={coronaAll.deaths} totalPatient={coronaAll.recovered} totalActive={coronaAll.active}/>
                <div className="buttonCountry">
                    <Button variant="btn btn-info" onClick={ () => this.handleOnClick()} style={{marginTop:20}} >Tüm Ülkeleri Göster</Button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const {coronaAll} = state.mainReducer;
    return {
        coronaAll
    }
};


export default connect(mapStateToProps,{getCoronaAllAction})(CoronaPage)