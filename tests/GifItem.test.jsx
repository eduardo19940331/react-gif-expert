
import { render, screen } from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'One Pice';
    const url = 'https://test-url.one-pice.jpg/';
    const image = {title:title, url: url, id:'asdasd'};

    test('Match SnapShot del componente', () => {
        const {container} = render(<GifItem image={image}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem image={image}/>);
        // screen.debug();

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });
    
    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem image={image}/>);

        expect(screen.getByText(title)).toBeTruthy();
    });
    
})
