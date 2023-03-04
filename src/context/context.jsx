import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

//creating Context
//provider
//consumer ==> useContext hook
//** for manage  state ==> useReducer

const context = createContext();
const initialState = {
    query: "",
    photoData: null,
    loading : false
}

const FLICKR_API_ENDPOINT = 'https://api.flickr.com/services/rest/';
const FLICKR_API_KEY = '18f7c0694a51347ff29084950026182f';
const FLICKR_API_METHOD = 'flickr.photos.search';
const NUM_PHOTOS_TO_DISPLAY = 40;

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        ApiCall()
    }, [state.query])

    const ApiCall = () => {
        // console.log("api call is triggered");
        // console.log(state.query);

        const flickrApiUrl = `${FLICKR_API_ENDPOINT}?method=${FLICKR_API_METHOD}&api_key=${FLICKR_API_KEY}&text=${state.query}&per_page=${NUM_PHOTOS_TO_DISPLAY}&format=json&nojsoncallback=1`;
        axios.get(flickrApiUrl)
            .then((data) => {
                dispatch({
                    type: "fetchData",
                    payload: data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const Search = (searchedText) => {
        // console.log(searchedText);
        dispatch({
            type: "searchResult",
            payload: {
                query: searchedText
            }
        })
    }

    const MountainBtn = () => {
        console.log("mountain btn triggered")
        dispatch({
            type: "directSearch",
            payload: {
                query: "Mountain"
            }
        })
    }

    const Beaches = () => {
        dispatch({
            type: "directSearch",
            payload: {
                query: "Beaches"
            }
        })
    }

    const Birds = () => {
        dispatch({
            type: "directSearch",
            payload: {
                query: "Birds"
            }
        })
    } 

    const Food = () => {
        dispatch({
            type: "directSearch",
            payload: {
                query: "Food"
            }
        })
    } 

    return (
        <context.Provider value={{ ...state, Search, MountainBtn , Beaches , Birds , Food}}>
            {children}
        </context.Provider>
    )
}

export { context, Provider };