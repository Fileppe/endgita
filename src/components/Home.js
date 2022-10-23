import Caurosel from "./Caurosel";
function Home() {
    return (
        <div className="home">
            <Caurosel />
            <div className="chisiamo">
                <div className="container mt-5 pt-5 mb-5 pb-5">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <img src="https://picsum.photos/200/305" className="img-fluid" alt="immagine" />
                        </div>
                        <div className="col-lg-8 my-auto">
                            <h2 className="mb-4">Chi Siamo</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempora nulla doloribus est labore ducimus cumque omnis dolore, accusamus alias, officiis deserunt, ratione molestias voluptatem ea. Dolor recusandae consequuntur eum?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus omnis illum dolorem dicta excepturi nostrum voluptatem aperiam velit, porro atque praesentium? Veritatis possimus consequatur placeat commodi maxime sapiente magnam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="attivita">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Attività</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 text-center">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi ipsa similique a molestiae dolor voluptatem ratione. </p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi ipsa similique a molestiae dolor voluptatem ratione. </p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi ipsa similique a molestiae dolor voluptatem ratione. </p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi ipsa similique a molestiae dolor voluptatem ratione. </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contatti">
                <div className="container-fluid px-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="col-12 text-center mb-5">
                                <h2>Contatti</h2>
                            </div>
                            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-sm-6 d-none d-sm-block bg-image"></div>
                                        <div className="col-sm-6 p-4">
                                            <div className="text-center">
                                                <div className="h3 fw-light">Form di contatto</div>
                                                <p className="mb-4 text-muted">Split layout contact form</p>
                                            </div>


                                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                                    <label for="name">Nome</label>
                                                    <div className="invalid-feedback" data-sb-feedback="name:required">Il nome è obbligatorio.</div>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                                    <label for="emailAddress">Email</label>
                                                    <div className="invalid-feedback" data-sb-feedback="emailAddress:required">L'indirizzo Email è obbligatorio</div>
                                                    <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: "10rem;"}} data-sb-validations="required"></textarea>
                                                    <label for="message">Messaggio</label>
                                                    <div className="invalid-feedback" data-sb-feedback="message:required">Il messaggio è obbligatorio</div>
                                                </div>

                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Invia</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </div>
        </div>


    )
}

export default Home;