import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import { exportAllDeclaration } from '@babel/types';

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

    it('renders the UI as expected 1' , () => {
        const tree = renderer 
            .create(<List />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });
})