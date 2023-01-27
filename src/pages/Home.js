import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTravels, deleteTravel } from "../redux/actions";
import { toast } from "react-toastify";

function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { travels } = useSelector((state) => state.data.travels)

    useEffect(() => {
        const fetchTravels = () => {
            setLoading(true)
            try {
                dispatch(getTravels())
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchTravels()
    }, [])

    const handleDelete = (id) => {
        setLoading(true)
        try {
            dispatch(deleteTravel(id))
            toast.error("Post deleted successfully!")
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return (
        <div className="my-3">
            <span>Loading...</span>
        </div>
    )

    return (
        <>
            <div className="mt-5">
                <div className="container d-flex justify-content-between flex-wrap">
                    {travels && travels.reverse().map((travel) => (
                        <div className="col-md-4 mb-3" key={travel._id}>
                            <div className="border p-2">
                                <img className="w-100" src={travel.image} alt={travel.title} style={{ height: "200px" }} />
                                <h1>{travel.title}</h1>
                                <p>{travel.desc}</p>
                                <div className="buttons">
                                    <Link className="btn btn-primary me-1" to={`/edit/${travel._id}`}>
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(travel._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
