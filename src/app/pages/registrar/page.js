'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css";
import { useRouter } from "next/navigation";
import { postUser } from "@/app/functions/handlerAcessAPI";
import { useState } from "react";

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

const { push } = useRouter();

  const handlerFormSubmit = async (event) =>{
    event.preventDefault();
    try{
      console.log(user)
      await postUser(user);
      return push("/pages/dashboard/")
    }catch{
      toast.error("erro ao cadastrar");
    }
  }


  return (
    <div>
      <h1>Página de registro</h1>
      <form onSubmit={handlerFormSubmit }>   

  <div>
      <input  placeholder='nome' type="nome" className= "inputs"  onChange={(e) => { setUser({ ...user, name: e.target.value }) }} > </input>
        </div>

        <div>
        <input  placeholder='E-mail' type="email" className= "inputs"onChange={(e) => { setUser({ ...user, email: e.target.value }) }} >
        </input>
  </div>

  <div>
        <input placeholder='Senha'  type='password' className= "inputs" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>

        <button>Registrar</button>
        <button><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Register; 

