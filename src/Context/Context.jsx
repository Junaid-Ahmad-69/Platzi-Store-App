import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const StoreContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    isLoading: false,
    storeData: [],
    error: "",
    productData: [],
    filterCategory: "",
    isOpen: false,
    item: [],
    productQuantity: 1,
    offset: 0,
    limit: 10,
    // Get the all data of api
    productAllData: [],
    activeButton: 0,
}


function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {...state, isLoading: true};

        case "fetching":
            return {
                ...state, isLoading: false, storeData: action.payload.paginateData,
                productAllData: action.payload.length,
            }
        case "productDetail":
            return {
                ...state, isLoading: false, productData: action.payload,
            }
        case "productCategory":
            return {
                ...state, isLoading: false, filterCategory: action.payload,
            }

        case "toggle":
            return {
                ...state, isOpen: (prevSate) => !prevSate
            }

        case "closeModal":
            return {
                ...state, isOpen: false
            }
        case "itemData":
            const removeDuplication = state.item.some((item) => item.id === action.payload.id)
            if (!removeDuplication) {
                return {...state, item: [...state.item, action.payload]}
            }
            return {
                ...state
            }
        case "increaseProduct":
            return {
                ...state,
                item: state.item.map((item) => action.payload === item.id ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: item.price * (item.quantity + 1),
                } : item)
            }
        case "decreaseProduct":
            return {
                ...state,
                item: state.item.map((item) => action.payload === item.id ? {
                    ...item,
                    quantity: item.quantity - 1,
                    total: item.price * (item.quantity - 1),
                } : item)
            }

        case "offsetPaginate": {
            return {
                ...state, offset: action.payload * state.limit, activeButton: action.payload
            }
        }
        case 'removeProduct':
            return {
                ...state, item: state.item.filter((cartItems) => cartItems.id !== action.payload)
            }

        case "rejected":
            return {
                ...state, isLoading: false, error: action.payload,
            }
        default :
            throw new Error("Unknown action type")
    }
}


const ContextProvider = ({children}) => {
    const [{
        isLoading,
        storeData,
        productData,
        filterCategory,
        isOpen,
        item,
        productQuantity,
        limit,
        offset,
        productAllData,
        activeButton
    }, dispatch] = useReducer(reducer, initialState);


    /* Calculate Cart Total Amount */
    const totalAmount = item.reduce((acc, total) => {
        return acc + total.total
    }, 0);

    const productId = useLocation();
    const id = productId.pathname.split("/")[2];

    // let categoryParam = '';
    // if (filterCategory) {
    //     categoryParam = `/${filterCategory}`;
    // }
    const fetchingData = async (offset, limit) => {
        dispatch({type: "loading"})
        const URL = `${BASE_URL}/api/v1/products?offset=${offset}&limit=${limit}`;
        try {
            const response = await axios.get(URL)
            const paginateData = response.data
            dispatch({type: "fetching", payload: {paginateData, length: 70}})
        } catch (e) {
            dispatch({type: "rejected", payload: 'There was an error while fetching the data'})
        }
    }
    const singleProduct = async () => {
        dispatch({type: "loading"})
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/products/${id}`)
            if (response.status !== 200) {
                throw new Error("Failed to fetch the data...");
            }
            dispatch({type: "productDetail", payload: response.data})
        } catch (e) {
            dispatch({type: "rejected", payload: 'There was an error while fetching the data'})
        }
    }

// FETCHING THE STORE DATA
    useEffect(() => {
        fetchingData(offset, limit)

    }, [filterCategory, limit, offset])

    // FETCHING SINGLE PRODUCT DATA
    useEffect(() => {
        singleProduct()
    }, [id])

    return (
        <StoreContext.Provider
            value={{
                isLoading,
                productData,
                storeData,
                dispatch,
                filterCategory,
                isOpen,
                item,
                productQuantity,
                totalAmount,
                limit,
                offset,
                productAllData,
                activeButton
            }}>
            {children}
        </StoreContext.Provider>
    )

}

function useStore() {
    const context = useContext(StoreContext)
    if (context === undefined) throw new Error("StoreContext are used outside of provider")
    return context
}

export {ContextProvider, useStore}