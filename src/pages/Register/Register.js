import {useAutenticacao} from "../../hooks/useAutenticacao.js";
import style from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
    const [displayName, setdisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("")
    const {createUsuario,error:authError,loading} = useAutenticacao('')
    const handleSubmitLucas = async (e) => {
        e.preventDefault()
        setError ('')
        const userDRM = {
            displayName,email,password
        }
        if (password !== confirmPassword) {
            setError ('Redigite a senha, Senhas precisam se iguais.')
            return
        }
        const resUseAutenticacao = await createUsuario (userDRM)
        console.log("Conteudo de userDRM: ", userDRM)
        console.log("Conteudo de resUseAutenticacao: ", resUseAutenticacao)
    };
    useEffect(() => {
        if (authError) {
            setError (authError)
        }
    },[authError])
    return (
        <div className={style.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu Usuario e compartilhe suas experiencias.</p>
            <form onSubmit={handleSubmitLucas}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setdisplayName (e.target.value)}/>
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Senha do usuário" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="password" required placeholder="Confirme senha do usuário" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </label>
                <label>
                    {!loading && <button className="botao">
                        Cadastrar
                    </button>}
                    {loading && <button className="botao" disabled>
                        Aguarde...
                    </button>}
                    {error && <p className="error">{error}</p>}
                </label>
            </form>
        </div>
    )
}
export default Register;