import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('GifGridItem test', () => {

    test('Debe de mostrar el componente correctamente', () => {

        const wrapper = shallow(
            <GifGridItem />)

        expect(wrapper).toMatchSnapshot();
    })
})