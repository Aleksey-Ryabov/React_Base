import { useDispatch, useSelector } from 'react-redux';
import { AddHero } from '../../../../../store/actions/StarWarsAction';
import '../starwars.css';

export const ErrorStar = ()=> { 
    const message = useSelector(state => state.starWarsReduce.message);
    const dispatch = useDispatch();
        return (
          <div className='star-error-wrap'>
            <h3 className='star-error' style={{'color': 'red'}}>ERROR : {message}</h3>
            <button className='star-error-btn' onClick={()=> dispatch(AddHero())}>NEW REQUEST</button><br/>
          </div>
        );
}