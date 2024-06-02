import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Michael from './Michael';

export default function Dashboard() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='w-full h-full'>
            <h1 className="text-2xl font-bold">Faces</h1>
            <Carousel responsive={responsive}
                itemClass="carousel-item-padding-40-px"
                infinite={true}>
                <Michael />
                <Michael />
                <Michael />
                <Michael />
                <Michael />
                <Michael />
                <Michael />
            </Carousel>
        </div>
    )
}
