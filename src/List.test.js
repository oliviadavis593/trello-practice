import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List Component', () => {
    it('renders without crashing', () => {
        const section = document.createElement('section')
        ReactDOM.render(<List />, section)
        ReactDOM.unmountComponentAtNode(section)
    });

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<List />, div)
        ReactDOM.unmountComponentAtNode(div)
    });
})