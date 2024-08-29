import { Button } from "../button";

export function FormsLogin(){
   return(
    <>
      <h1> Logar </h1>
      <form action="">
        <input type="text" placeholder="Email ou username" />
        <input type="password" placeholder="Senha" />
        <Button title={"logar-se"}/>
      </form>
    </>
   )
}


