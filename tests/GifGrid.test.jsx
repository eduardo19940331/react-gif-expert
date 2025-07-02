import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/components/GifGrid";
import useFetchGifs from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Pice';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [], isLoading: true
        });
        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...')).toBeTruthy();

        expect(screen.getByText( category )).toBeTruthy();
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },{
            id: 'zxc',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs, isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
