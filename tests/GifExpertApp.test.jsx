import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    test('debe de validar onAddCategory enviando valor vacio y un elmento a buscar', () => {
        const inputSearch = "Manga";
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputSearch}} );
        fireEvent.submit( form );

        expect(screen.getByText(inputSearch)).toBeTruthy();
    });
    
})
