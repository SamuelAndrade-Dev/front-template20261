import { useParams } from "react-router";
import { useForm } from "react-hook-form"

function Perfil() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const salvar = (data) => console.log(data)

    //register() => {name="", onChange"", onBlur=""}
    // handleSubmit() => dispara a validacao, 
    //informa ao React que mudou os campos

    const regras = {
        nome: { required: "Nome é obrigatório" },
        email: { required: "E-mail é obrigatório" },
        nascimento: {},
        telefone: {}
    }

    return <>
        <h1>Perfil do usuário {id}</h1>
        <form onSubmit={handleSubmit(salvar)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text"
                    id="nome"
                    {...register("nome", regras.nome)} />
                {errors?.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email"
                    id="email"
                    {...register("email", regras.email)} />
                {errors?.email && <p>{errors.email.message} </p>}
            </div>
            <div>
                <label htmlFor="nascimento">Nascimento</label>
                <input type="date"
                    id="data"
                    {...register("nascimento", regras.nascimento)} />
            </div>
            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="number"
                    id="telefone"
                    {...register("telefone", regras.telefone)} />
            </div>
            <button type="submit">Salvar</button>
        </form>
    </>
}

export default Perfil;