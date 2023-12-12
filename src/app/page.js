'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./global.css"

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
 
  const { push, refresh} = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no email ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      refresh(); 
    }
  }
  return (
    <body>
    <div>
      <form onSubmit={handlerLogin}>
      <div>
      </div>
    
      <h1>Tela de login</h1>

      <div>
        <input
          placeholder='Insira seu E-mail' type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
        </div>
        <div>
        <input className="inputs" placeholder='Insira sua senha'  type='password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>
      
        <button>Entrar</button>
      
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}