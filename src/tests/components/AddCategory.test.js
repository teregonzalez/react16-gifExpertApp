import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe('Test en <AddCategory />', () => { 

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
    
    test('Debe mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot();
     });

     test('Debe cambiar la caja de texto', () => { 
         
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text().trim()).toBe(value);
      })
 });
