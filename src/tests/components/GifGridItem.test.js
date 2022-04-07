import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('GifGridItem test', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(
        <GifGridItem title={ title } url={ url }/>)

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo por el title', () => { 
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

     });

     test('Debe de tener la imagen igual al url y alt de los props', () => { 

        const img = wrapper.find('img');
        // console.log(img.props());
        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
         
      })

      test('Debe tener animate__fadeIn', () => { 
          
        const div = wrapper.find('div');
        const divClass = div.props().className;

        expect( divClass.includes('animate__fadeIn') ).toBe(true);
       })
})
