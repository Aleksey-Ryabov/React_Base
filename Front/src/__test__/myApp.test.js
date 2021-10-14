import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { Messages } from '../components/MainPage/NavPage/Messages/Messages';
import App from '../App';
import { MainPage } from '../components/MainPage/MainPage';
import { Profile } from '../components/MainPage/NavPage/Profile/Profile';

test('render App Component', ()=> {
    const component = render(<App />)
});

test('render MainPage Component', ()=> {
    const component = render(<MainPage />);
    const profileEl = component.getByTestId('profile');
    expect(profileEl.textContent).toBe('PROFILE PAGE')
})
