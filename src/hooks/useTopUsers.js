import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTopUsersAction, setTopUsersErr} from '../redux/actions/topUsersActions';

export default () => {

  const dispatch = useDispatch();
  const {topUsers, err} = useSelector(state => state.topUsersReducer);

  useEffect(()=>{
    if(topUsers.length === 0){
      getTopUsersAction(dispatch, (err) => dispatch(setTopUsersErr(`${err}. Try to refresh the page`)))
      };
  },[])

  return {topUsers, err}
}