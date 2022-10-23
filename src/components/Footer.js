import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="container pb-5 pt-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h2>SiteMap</h2>
                            <ul style={{ listStyle: "none"}}>
                                <li><Link to="/" href="#" className="link">Home</Link></li>
                                <li><Link to="/chisiamo" href="#" className="link">Chi Siamo</Link></li>
                                <li><Link to="/attivita" href="#" className="link">Attività</Link></li>
                                <li><Link to="/contatti" href="#" className="link">Contatti</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>I nostri social</h2>
                            <div className="container-icon">
                                <i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i>
                                <i className="bi bi-instagram" style={{ fontSize: "2rem", marginLeft: "20px" }}></i>
                                <i className="bi bi-whatsapp" style={{ fontSize: "2rem", marginLeft: "20px" }}></i>
                                <i className="bi bi-linkedin" style={{ fontSize: "2rem", marginLeft: "20px" }}></i>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus rerum aliquam, expedita, amet quaerat ea voluptates sed
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus rerum aliquam, expedita, amet quaerat ea voluptates sed
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <p>
                                Copyright - Filippo Ballotta
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;