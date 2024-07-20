/* 
Pacotes a instalar 
npm install react-hook-form zod @hookform/resolvers  react-router-dom


*/

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import z, { string } from 'zod'
const schema=z.object({
    email:z.string().email(),
    password:string().min(8)
})
type Inputs=z.infer<typeof schema>
/* type Inputs = {
    email: string
    password: string
} */

function Forms() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
    } = useForm<Inputs>({defaultValues:{
        email:"acheltonzuzi@gmail.com",
        password:'123445678'
    },resolver:zodResolver(schema)})


    const onSubmit:SubmitHandler<Inputs>=async(data)=>{
        await new Promise((resolve)=>setInterval(resolve,1000))
        console.log(data);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='email' {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
                <input type="password" placeholder='password' {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}

                <button disabled={isSubmitting}>{isSubmitting?'carregando...':'submit'}</button>
            </form>
        </div>
    )
}

export default Forms