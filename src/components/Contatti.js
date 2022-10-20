function Contatti() {
    return (
        <div className="contatti">
            <div className="container mt-5 pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h2 className="text-center">Contatti</h2>
                        <form method="POST" action="../functions/sendmail.php">
                            <div className="mb-3">
                                <label for="nome" className="form-label">Il tuo nome</label>
                                <input name="nome" type="text" className="form-control" id="nome" aria-describedby="nome"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">La tua mail</label>
                                <input name="email" type="email" className="form-control" id="email"/>
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
    )
}

export default Contatti;