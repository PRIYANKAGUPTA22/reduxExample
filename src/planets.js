import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Planet from './planet';
import fetchPlanets from './actions';

class Planets extends Component {

    constructor(props){
        super(props);
        this.allResults=[];
        // this.filterData= this.filterData.bind(this);
    }  

    componentDidMount(){
       this.props.dispatch(fetchPlanets());
    //    this.allResults = this.props.results;
    
    }
    inputChanged(event){
        // this.filterData(event.target.value);
    }
    // filtering api data on basis of population
    filterData(searchString){
        var results =[];
            results = this.allResults.filter(function(value){
                return (value.name.toLowerCase()).match(searchString.toLowerCase());  
            });
            this.filteredResults = results;
    }
   
    render() {
        var _this= this; 
        if(!(localStorage.getItem("status"))){
                this.props.history.push('/login');
        }    
        return ( 
            <div >
            <div className="autocomplete-container">
                <div class="autocompleteCenter">
                    <div className="searchContainer">
                        <input type="text"  name="search" id="search" placeholder = "Search a Planet" onChange={this.inputChanged.bind(this)} />
                    </div>                               
                    {this.props.open && 
                    <ul className="autocomplete-menu" >
                        <li className="firstLi"></li>
                        {this.props.results.map(function(value,index){                           
                            return(
                                <li key={index} className={"autocomplete-menu-item "}  >
                                    {value.name}                            
                                </li>
                            )
                            })
                        }
                    </ul>}
                </div>
                {this.props.isFetching && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}

                {/* <div className="logoutButton">
                        <span onClick={this.logout.bind(this)}> Logout</span>
                </div>          */}
                
            </div>
            {this.props.open &&
            <div >
                {/* <p className='mask'  id ="mask" onClick={this.maskClicked.bind(this)}> </p> */}
            </div> }   
        </div>
        );
    }
}

function mapStateToProps (state){
    return{
        results:state.results || [],
        isFetching:state.isFetching,
        open:true
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchResults: (status) =>
          dispatch({
            type: 'REQUEST_RESULTS'
          }),
          dispatch:dispatch
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Planets);
// export default Planets;
