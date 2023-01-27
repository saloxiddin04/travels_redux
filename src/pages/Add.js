import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTravel} from "../redux/actions";
import {toast} from "react-toastify";

function Add() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    // const [image, setImage] = useState("")
    const [imgBb, setImgBb] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !desc || !imgBb) {
            toast.error("Please input all input field")
        } else {
            dispatch(addTravel({title, desc, image: imgBb}))
            toast.success('Post added successfully!')
            navigate("/")
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        let fileList = []
        Array.from(e.target.files).forEach((file) => {
          const formData = new FormData()
          formData.append("key", "15020f1ccc907ca25830614ae71e0579");
          formData.append("image", file);
    
          axios.post('https://api.imgbb.com/1/upload', formData)
            .then((res) => {
              fileList.push(res.data.data.url)
            })
            .catch((err) => {
              console.log(err)
            })
        })
        setImgBb(fileList)
    }


    return (
        <>
            <div className="container text-center">
                <h1>Add Travel</h1>
                <div className="row">
                    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-2">
                        <input
                            className="border p-1 rounded form-control"
                            type="text"
                            placeholder="Country name"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className="border p-1 rounded form-control"
                            type="text"
                            placeholder="Description"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        {/* <input
                            className="border p-1 rounded form-control"
                            type="text"
                            placeholder="Image link"
                            onChange={(e) => setImage(e.target.value)}
                        /> */}
                        <input type="file" onChange={(e) => handleUpload(e)} multiple={true} />
                        <button type="submit" className="btn btn-primary">Add Post</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add;
