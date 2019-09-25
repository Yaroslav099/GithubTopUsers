
import {getTopUsers} from '../../api/index';

const getTopUsersAction = async (dispatch, errCb) => {
 const json = await getTopUsers();
 if(json.data){
   const res = json.data.search.edges;
   const resWithStars = res.map(el => {
      return {...el.node , stars: el.node.repositories.nodes.reduce((a,b) => {
      return a + b.stargazers.totalCount },0), repositories: null}
   })
   .sort((a,b) => b.stars - a.stars);
  dispatch({ type: "SAVE_TOP_USERS", payload: resWithStars})
 }else{
   errCb(json.message)
 }
} 

const setTopUsersErr = (payload) => ({ type: "SET_TOP_USERS_ERR", payload});

export {getTopUsersAction, setTopUsersErr}