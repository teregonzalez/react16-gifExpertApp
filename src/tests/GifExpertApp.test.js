import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';
describe('Test en GifExpertApp', () => { 
    test('Debe mostrarse correctamente', () =>{

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot()

    });
    test('Debe de mostrar una lista de categorias', () => { 
        
        const categories = ['HunterxHunter', 'Full Metal Alchemist'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe( categories.length );
    })
 });