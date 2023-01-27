import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleTravel, updateTravel} from "../redux/actions";
import {toast} from "react-toastify";

function Edit() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const {travel} = useSelector((state) => state.data.travel)

    useEffect(() => {
        dispatch(getSingleTravel(id))
    }, [])

    useEffect(() => {
        if (travel) {
            setTitle(travel.title)
            setDesc(travel.desc)
            setImage(travel.image)
        }
    }, [travel])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !desc || !image) {
            toast.error("Please input all input field")
        } else {
            dispatch(updateTravel({title, desc, image}, id))
            toast.success("Travel edited successfully!")
            navigate("/")
        }
    }


    return (
        <>
            <div className="container text-center">
                <h1>Edit Travel</h1>
                <div className="row">
                    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-2">
                        <input
                            className="border p-1 rounded col-md-6 form-control"
                            type="text"
                            placeholder="Country name"
                            value={title || ""}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className="border p-1 rounded col-md-6 form-control"
                            type="text"
                            placeholder="Description"
                            value={desc || ""}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <input
                            className="border p-1 rounded col-md-6 form-control"
                            type="text"
                            placeholder="Image link"
                            value={image || ""}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">Edit Post</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Edit;
