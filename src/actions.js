// import fetch from 'isomorphic-fetch';
export default function fetchPlanets (){
    return dispatch =>{
        var url = "https://swapi.co/api/planets/";
        dispatch(
            {
                type:'FETCH_PLANETS_REQUESTED',
                data:true
            }
        )
        fetch(url).then(function(response){
            response.json().then(function(response){                
                dispatch({
                    type:'FETCH_PLANETS_RECEIVED',
                    data:response
                })
            })
        }
            ,function(error){
                
            });

    }
}
