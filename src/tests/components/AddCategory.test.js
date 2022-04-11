import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto', () => {
    //Arrange
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    //Act
    input.simulate('change', { target: { value } });

    //Assert
    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('No debe de postear la información con submit', () => {

    //Act
    wrapper.find('form').simulate('submit', { preventDefault() { } })

    //Assert
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => { 

    const value = 'Hola Mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() { } })

    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    expect( wrapper.find('input').props().value ).toBe('')


   })
});
