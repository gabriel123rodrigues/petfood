
import React from "react";
import Header from "../../components/header";
import illustration from '../../assets/illustration.png'

const Cadastro = ()=>{
    return (<div className="container-fluid h-100 bg-primary">
        <Header whiteVersion hideCart />
        <div className="row">
        <div className="col-6 text-right my-auto">
            <img src={illustration}></img>
        </div>
        <div className="col-6">
            <div className="box col-8">
                <h2 className="text-center">Falta pouco para fazer seu pet feliz</h2>
                <br></br>
                <input type="text" 
                className="form-control form-control-lg mb-3" 
                placeholder="Nome completo"></input>
                <input type="email" 
                className="form-control form-control-lg mb-3" 
                placeholder="E-mail"></input>
                <input type="text" 
                className="form-control form-control-lg mb-3" 
                placeholder="CPF"></input>
                <input type="text" 
                className="form-control form-control-lg mb-3" 
                placeholder="Telefone"></input>
                <input type="date" 
                className="form-control form-control-lg mb-3" 
                placeholder="Data nascimento"></input>
                <button className="btn btn-lg btn-block btn-secondary col-12">Finalizar pedido</button>
            </div>
            
        </div>
        </div>
      

    </div>)
}

export default Cadastro;