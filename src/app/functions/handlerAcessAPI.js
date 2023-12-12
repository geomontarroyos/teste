'use server'
const url = "https://aula-17-10-eight.vercel.app";

const getUserAuthenticated = async (userLogin) => {
    console.log(userLogin)
const responsepOfApi = await fetch(url + "/user/authenticated", 
{
    method:"POST",
    headers:{"content-Type": "application/json"},
    body: JSON.stringify(userLogin)
});

const userAuth = await responsepOfApi.json();
console.log(userAuth)
return userAuth;
}

const postUser = async (user) => {
    try {
        const responseOfApi = await fetch(url + "/user", {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(user)
        });
 
    const userSave = await responseOfApi.json();
      return userSave;
    } catch (error) {
        return null;
    }};

const getUsers = async () =>{
    try {
        const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
        const userAuth = await responseOfApi.json();
        console.log(userAuth)
        return userAuth;
    } catch (error) {
        console.log(error);
        return "Erro ao mostrar usuários";
    }
}

const UpdateUser = async(user, id)=>{
    try{
       const responseOfApi = await fetch(url + "/user/" + id, {
          method: "PUT",
          headers: {'Content-Type': 'Application/json'},
          body: JSON.stringify(user)
       });
       const userUpdate = await responseOfApi.json();
       return userUpdate
    }
    catch{
       return null
    }
  }

export { getUsers, getUserAuthenticated, postUser, UpdateUser  };