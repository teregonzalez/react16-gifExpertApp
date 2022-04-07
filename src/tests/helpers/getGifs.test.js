import { getGifs } from '../../helpers/getGifs'

describe('pruebas en getGifs', () => { 

    test('Debe de traer 10 elementos', async () => { 
        
        const gifs = await getGifs('One punch');

        expect(gifs.length).toBe(10);
     })

     test('Debe de traer 10 elementos', async () => { 
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
     })
    
 })
 