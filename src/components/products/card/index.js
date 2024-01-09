
import './style.css';

const Product = () =>{

    return (
        <div className="product col-3">
            <img src="https://images.tcdn.com.br/img/img_prod/724553/racao_para_cachorro_filhote_gran_plus_carne_e_arroz_15kg_551_1_20200319192342.jpg"
            className="img-fluid align-center"/>
            <button className='btn btn-primary rounded-circle'>+</button>
            <h4>
                <label className="badge badge-primary">R$90,00</label>
            </h4>
            <small>
                <b>
                    ração qualquer 15kg
                </b>
            </small>
        </div>
    );
}
export default Product;