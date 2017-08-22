import axios from 'axios';

export const pageRepo = (searchText) => {
      console.log("Inside action index.js");
      var api_url = "https://graph.facebook.com/search?access_token=1973829529516418|43009bb9fd636ca211b389639201bbca&q="+searchText+"&type=page";
      return axios.get(api_url)
          .then(function(response){
              console.log("Data in action index.js"+JSON.stringify(response.data));
              return {
                     type: 'PAGE_SEARCH_REDUCER',
                     payload: response.data.data
              }
      });

  };

export const showFav = () => {
    var fav = JSON.parse(localStorage.getItem('favList'));
    console.log('Inside showFav action: '+fav);
    return {
         type: 'SHOW_FAV_REDUCER',
         payload: fav
     }
}
