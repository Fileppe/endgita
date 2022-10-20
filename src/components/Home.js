import Caurosel from "./Caurosel";
function Home() {
    return (
        <div className="home">
            <Caurosel/>
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
                <div className="container mt-5 pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <h2 className="text-center">Contatti</h2>
                            <form method="POST" action="functions/send.php">
                                <div className="mb-3">
                                    <label for="nome" className="form-label">Il tuo nome</label>
                                    <input name="nome" type="text" className="form-control" id="nome" aria-describedby="nome" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">La tua mail</label>
                                    <input name="email" type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="massaggio" className="form-label">Messaggio</label>
                                    <textarea name="messaggio" id="messaggio" className="form-control" cols="30" rows="10"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Invia</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;