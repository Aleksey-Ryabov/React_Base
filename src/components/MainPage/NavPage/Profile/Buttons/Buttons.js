import {useDispatch} from 'react-redux';

const Buttons =({text, id})=> {

    const dispatch = useDispatch();
    const handlerDelete = ()=> {
        dispatch({type : "DELETE_TODO_ITEM", payload: id})
        //dispatch(deleteButton(id));
        console.log('Удаление')
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handlerDelete}>DELETE</button>
        </div>
    )
}

export default Buttons;