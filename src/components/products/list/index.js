const Product = () =>{
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-3">
                    <img src={"https://m.media-amazon.com/images/I/81vzENc0i2L._AC_UF1000,1000_QL80_.jpg"} className="img-fluid"/>
                </div>
                <div className="col-6">
                    <smal>
                        <b>Nome do produto</b>
                    </smal>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary roundes-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product