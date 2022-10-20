import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" /* style={{backgroundColor: "#494949"}} */>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="https://picsum.photos/200/306" alt="logo" width="80" height="60"/>
                    </a>

                    <Link className="navbar-brand" href="#" to="/">ENDG</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/chisiamo">Chi Siamo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="/attivita">Attività</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#" to="/contatti">Contatti</Link>
            </li>
        </ul>
            </div >
        </div >
    </nav >
        </div >
    )
}

export default Header;