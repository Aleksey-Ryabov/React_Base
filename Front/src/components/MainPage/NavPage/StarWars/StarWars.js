import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AddHero} from "../../../../store/actions/StarWarsAction";
import { ErrorStar } from "./Error/error";
import { Hero } from "./Hero/Hero";
import './img/battle.jpg';
import './starwars.css'


export const StarWars =()=> {

    const history = useHistory();
    const selector = useSelector(state => state.starWarsReduce.heroes);
    const error = useSelector(state => state.starWarsReduce.status);
    const dispatch = useDispatch();
    const getNewHero = ()=> {
        dispatch(AddHero())
    }

    return (
        <div className='star-wars-page'>

             <Button onClick={()=> history.push('/')} variant="outlined" style={{'marginTop': '30px'}} >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button><br/>

             <h1 className='star-wars-page-head'>Star Wars API Request</h1>

            {!error && <div className='star-wars-window'>
                
                {selector?.length && selector.map((elem)=> {
                    return (
                        <div key={elem.name}>
                            <Hero hero={elem}/>
                        </div>
                    )
                })}
        
            </div>}
            {error &&<ErrorStar/>}
            {!error && <button className='star-wars-page-btn' onClick={()=> getNewHero()}>REFRESH</button>}
        </div>
    )
}