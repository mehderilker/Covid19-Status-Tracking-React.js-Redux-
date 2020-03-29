import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Card} from '../../components/Card/card'
import {getCoronaCountryAction} from "../../actions/mainAction"
import '../../assets/styles/coronaPageStyles/coronaCountryPage.css'
import PropTypes from "prop-types";


class CoronaCountryPage extends Component {

    constructor(){
        super();
        this.state={
            search:null
        };
    }

    componentDidMount() {
        this.props.getCoronaCountryAction()
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        console.log(keyword)
        this.setState({search:keyword})
    }


    render() {
        const {coronaCountry} = this.props;

        const country = coronaCountry.filter ((data)=>{
            if(this.state.search == null)
                return data;
            else if(data.country.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map((country) =>
            <Card country={country.country} cases={country.cases} todayCases={country.todayCases} todayDeaths={country.todayDeaths}
                  deaths={country.deaths}
                  countryFlag={country.countryInfo.flag} active={country.active}  />);

        return (
            <div className="corona-country-page-wrapper">
                <input type="text" placeholder="Please enter the country name" className="search-bar" onChange={(e)=>this.searchSpace(e)} />
                <div className="container-fluid d-flex justify-content-center" >
                    <div className="row">
                        {country}
                    </div>
               </div>
            </div>
        )
    }
}

CoronaCountryPage.propTypes= {
    coronaCountry : PropTypes.array
};

CoronaCountryPage.defaultPropTypes = {
    coronaCountry : "Not Country Info"

};

const mapStateToProps = state => {
    const {coronaCountry} = state.mainReducer;
    return {
        coronaCountry
    }
};

export default connect(mapStateToProps,{getCoronaCountryAction})(CoronaCountryPage)