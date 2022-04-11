import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs.js');

describe('Test en GifGrid', () => { 

    const category = 'HunterxHunter'
    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe retornar ítems cuando se cargan imágenes con useFetch', () => {

        const gifs = [{
            id: 'ABC',
            url:'http://cualquiercosa.com',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url:'http://cualquiercosa.com',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
 })