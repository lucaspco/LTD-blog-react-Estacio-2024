import style from "./Login.module.css";
import { useAutenticacao } from "../../hooks/useAutenticacao";
import { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {login,error:authError,loading} = useAutenticacao()
    const handleSubmitLucas = async (e) =>{
        e.preventDefault()
        setError ("")
        const userDRM = {
            email,password
        }
        const resUseAutenticacao = await login (userDRM)
        console.log("Conteudo de userDRM: ",userDRM)
        console.log("Conteudo de resUseAutenticacao: " , resUseAutenticacao)
    };
 
    useEffect(() => {
        if (authError){
            setError (authError)
        }
    },[authError])
    return (
        <div className={style.login}>
            <h1> Entrar </h1>
            <p> Faça o login para usar o sistema</p>
            <form onSubmit={handleSubmitLucas}>
                <label>
                    <span>E-mail:</span>
                    <input type='email' name='email' required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type='password' name='password' required placeholder='Senha do usuário' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {!loading && <button className='botao'>Entrar</button>}
                {loading && <button className='botao' disabled>Aguarde ...</button>}
                {error && <p className='error' > {error} </p>}
            </form>
        </div>
    )
}
export default Login