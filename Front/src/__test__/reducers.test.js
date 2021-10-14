import { createSlice } from '@reduxjs/toolkit'
import { addUser } from '../store/actions/messageAddAction';
import messageReduce from '../store/reducers/messages';


const initialState = [
    {
        user: '', 
        comment: ''
    }
  ]

it('returns correct state after ADD_USER action', () => {
    const userStore = messageReduce(initialState, addUser('new User'));
    expect(userStore).toMatchSnapshot();
  });

