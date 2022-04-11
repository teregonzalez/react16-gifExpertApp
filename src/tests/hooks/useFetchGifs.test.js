import { useFetch, useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook, RenderHook } from '@testing-library/react-hooks';
describe('Test en useFetchGifs', () => { 
    test('Debe retornar el estado inicial', async() => { 

        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('HunterxHunter') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        // const { data, loading } = useFetchGifs('HunterxHunter');

        console.log( data, loading );
        expect(data).toEqual([]);
        expect(loading).toBe(true);

     })

     test('Debe de retornar un arreglo de imgs y loading en false', async() => { 
         
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('HunterxHunter') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        // console.log( data, loading );
        
        expect(data.length).toBe( 10 );
        expect(loading).toBe( false );

      })
 })