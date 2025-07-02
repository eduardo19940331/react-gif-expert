import { GifItem } from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import { validateProps } from '../utils/validateProps';
import { isStringRequired } from '../utils/validators';


export const GifGrid = ({ category }) => {

    validateProps({category}, {category: isStringRequired });

    const {images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="carg-grid">
                {
                    images.map((image) => (
                        <GifItem key={ image.id } image={image} />
                    ))
                }
            </div>
        </>
    )
}
