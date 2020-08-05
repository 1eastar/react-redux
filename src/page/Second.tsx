import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import navigator from '../component/navigator';

interface IProps {
    
}

interface RootState {
    first: any,
    second: any,
}

const Second: React.FC<IProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const first = useSelector((state: RootState) => state.first);
    const second = useSelector((state: RootState) => state.second);

    const setFirst = useCallback(() => {
        console.log('re-make first');
        dispatch({
            type: 'first',
            first: first + 1,
        });
    }, [dispatch, first]);

    const setSecond = useCallback(() => {
        console.log('re-make second');
        dispatch({
            type: 'second',
            second: second + 1,
        });
    },[dispatch, second]);

    return (
        <div>
            this is second page !
            <p style={{color: 'red'}}>first: {first}</p>
            <p style={{color: 'blue'}}>second: {second}</p>
            <button style={{width: 100, height: 100}} onClick={setFirst}>first +1</button>
            <button style={{width: 100, height: 100}} onClick={setSecond}>second +1</button>
            <br/><br/>
            <button style={{width: 100, height: 100}} onClick={()=>navigator(history, '/')}>go first</button>
        </div>
    )
}

export default Second;