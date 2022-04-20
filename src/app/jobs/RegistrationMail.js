import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
    async handle({data}){
        const {user} = data;
        await Mail.sendMail({
            subject: 'Primeiro teste',
            from: 'Timóteo <timoteo.vieira@linkcariri.com>',
            to: `${user.name} <${user.email}>`,
            html: `${user.name}, bem vindo ao sistema de filas de email`
        })
    }
}