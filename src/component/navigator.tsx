import React from 'react';

interface IProps { 
    history: any,
    url: string,
    data?: any,
}

const navigator = (
    history: any, url: string, data?: any
) => {
    window.scrollTo(0, 0);
    history.push(url, data);
}

export default navigator;