'use client'

import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { React, Suspense, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Alter({params}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter()
        const enviado = () => {
        }

        const handlerSubmit = async (event) => {
            event.preventDefault();
            try {
                await UpdateUser(user, params.id);
                await new Promise((resolve) => {
                    toast.success("Alterado com sucesso!");
                    setTimeout(resolve, 5000);
                    enviado();
                });
                return push("/pages/dashboard");
            } catch {
                return toast.error("Erro");
            }
        };
    
    return (
        <div>
      
        <div>
           <div>
            <form method="post" onSubmit={handlerSubmit}>

              <h1>Alterar Usuário</h1>

                <input type="text" placeholder="Digite o novo nome" name="nome" required onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/>
                <input type="email" placeholder="Digite o novo E-mail" name="email" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
                <input type="password" placeholder="Digite uma nova senha" name="senha" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/> 
                <button>Alterar</button>         
            </form></div>
        
            <ToastContainer/>
        </div>
     
        </div>
    );
};



