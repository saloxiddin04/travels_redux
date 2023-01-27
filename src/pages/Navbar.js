import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {

    return (
        <div>
            <nav className="bg-black">
                <div className="container">
                    <div className="d-flex align-items-center py-2">
                        <Link className="text-decoration-none me-3 text-white" to="/">Travel</Link>
                        <ul className="mb-0 d-flex">
                            <li className="d-flex justify-content-between">
                                <Link className="text-decoration-none text-white" to="/add">Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
