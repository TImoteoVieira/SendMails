import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
    async handle({data}){
        const {user} = data;
        await Mail.sendMail({
            subject: 'Primeiro teste',
            from: 'Sistema de notificação',
            to: `${user.name} <${user.email}>`,
            html: `${user.name}, bem vindo ao sistema de filas de email`
        })
    }
}