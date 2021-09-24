import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeState from "../../../../../actions/CheckBoxAction/CheckBoxAction";


export const ProfileCheckBox = ()=> {
     
    const[profile, setProfile] = useState([
            {id: 1, profile: 'Профиль' },
            {id: 2, profile: 'Профиль' },
            {id: 3, profile: 'Профиль' },
            {id: 4, profile: 'Профиль' },
            {id: 5, profile: 'Профиль' }
    ])    

    const dispatch = useDispatch();    
    const checkBoxChange = (id)=> {
        dispatch(ChangeState(id))
    }

    return (
        <>
                {profile.map((elem)=> {
                        return (
                          <div key={elem.id}>
                            <label key={elem.id}>
                              <input onChange={()=> checkBoxChange(elem.id)} type="checkbox" id={elem.id} name="scales" />
                              <span>{elem.profile}, {elem.id} </span>
                            </label>
                            <br />
                          </div>
                        );
                })

                }
        </>
    )
} 