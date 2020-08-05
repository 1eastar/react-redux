const INIT_STATE = {
    isFirst: false,
    first: 0,
    isSecond: false,
    second: 0,
    isThird: false,
    third: 3,
    firstfirst: '11',
    firstsecond: 12
}

const reducers = (state = INIT_STATE, action: any) => {
    switch(action.type){
        case 'first':
            return Object.assign({}, state, {
                first: action.first,
                isFirst: true,
            });
        case 'second':
            return Object.assign({}, state, {
                second: action.second,
                isSecond: true,
            });
        case 'third':
            return Object.assign({}, state, {
                third: action.third,
                isThird: true,
            });
        case 'firstfirst':
            return Object.assign({}, state, {
                firstfirst: action.firstfirst,
            });
        case 'firstsecond':
            return Object.assign({}, state, {
                firstsecond: action.firstsecond,
            });
        default:
            return state;
    }
}

export default reducers;