import { useDispatch, useSelector } from 'react-redux';

export const ErrorAuth = ()=> { 
   
    const dispatch = useDispatch();
        return (
          <div className='star-error-wrap'>
            <h3 className='star-error'>ДЛЯ ДОСТУПА К СТРАНИЦЕ ЧАТОВ ВВЕДИТЕ ЛОГИН И ПАРОЛЬ!</h3>
          </div>
        );
}