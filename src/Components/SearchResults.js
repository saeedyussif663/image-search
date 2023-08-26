
import Form from "./Form"
import Image from "./Image";
import Loader from "./Loader";
import { useGlobalContext } from "../Context";

const SearchResults = () => {
    const { state, incresePage, decreasePage } = useGlobalContext();
    const { images, page } = state;


    const decreasedisable = page === 1 ? true : false;
    const Increasedisable = page === 5 ? true : false;
    const decreaseCursor = decreasedisable ? 'cursor-not-allowed' : 'cursor-pointer';
    const IncreaseCursor = Increasedisable ? 'cursor-not-allowed' : 'cursor-pointer';

    return (
        <section className="section-background py-4 min-h-screen flex flex-col">
            <Form />
            {state.isLoading && <Loader />}
            <div className="grid grid-cols-1 gap-3 mt-6  md:grid-cols-3">
                {images.map((image) => {
                    return < Image   {...image} key={image.id}/>
                })
                }
            </div>
            {images.length > 1 && <div className="flex flex-row justify-center gap-4 mt-3">
                <button className={`bg-white px-3 py-2 rounded-lg uppercase ${decreaseCursor}`}
                    onClick={decreasePage}
                    disabled={decreasedisable}
                >prev
                </button>
                <h1 className="bg-white px-3 py-2 rounded-lg uppercase">{page}</h1>
                <button className={`bg-white px-3 py-2 rounded-lg uppercase ${IncreaseCursor}`}
                    onClick={incresePage}
                    disabled={Increasedisable}
                >next
                </button>
            </div>
            }
        </section>
    )
}

export default SearchResults