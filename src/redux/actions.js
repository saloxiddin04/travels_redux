import {
    GET_TRAVELS,
    DELETE_TRAVEL,
    ADD_TRAVEL,
    UPDATE_TRAVEL,
    GET_SINGLE_TRAVEL
} from './constants'
import axios from "axios";

export const getTravels = () => async (dispatch) => {
    try {
        const travels = await axios.get("https://travels-7b04.onrender.com/api/travel")
        dispatch({
            type: GET_TRAVELS,
            payload: travels.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const addTravel = ({title, desc, image}) => async (dispatch) => {
    try {
        const {data} = await axios.post("https://travels-7b04.onrender.com/api/travel/add", {
            title,
            desc,
            image
        })
        dispatch({
            type: ADD_TRAVEL,
            payload: data
        })
    } catch (e) {
        console.log(e)
    }
}

export const deleteTravel = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://travels-7b04.onrender.com/api/travel/${id}`)
        dispatch({
            type: DELETE_TRAVEL,
            payload: data
        })
        dispatch(getTravels())
    } catch (e) {
        console.log(e)
    }
}

export const getSingleTravel = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://travels-7b04.onrender.com/api/travel/${id}`)
        dispatch({
            type: GET_SINGLE_TRAVEL,
            payload: data
        })
    } catch (e) {
        console.log(e)
    }
}

export const updateTravel = ({title, desc, image}, id) => async (dispatch) => {
    try {
        const {data} = await axios.put(`https://travels-7b04.onrender.com/api/travel/${id}`, {
            title,
            desc,
            image
        })
        dispatch({
            type: UPDATE_TRAVEL,
            payload: data
        })
    } catch (e) {
        console.log(e)
    }
}
