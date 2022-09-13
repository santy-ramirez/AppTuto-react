import React from 'react';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">AppTuto</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="/tutorials">tutorials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="add">add</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;