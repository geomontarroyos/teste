import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Listar from "@/app/componentes/listar";
import "../../global.css"

export default async function Dashboard() {

    const users = await getUsers();
    return (
        <div> 

<h1>Usuários cadastrados </h1>

<div>

            <Suspense fallback={ <p> Carregando usuarios...</p> }>
                <Listar className="body" users={users}/>
            </Suspense>
</div>
        </div>
    );
};