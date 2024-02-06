import { sql } from "../db.js";
import bcrypt from 'bcryptjs'

//контроллер регистрации
export const register = async (req, res) => {
    //вытаскиваем json и сразу вытаскиваем из нее переменные
    const {username, email, phone_number, password} = req.body;
    
    //кандидат это переменная в которую попытаемся найти и записать пользователя с таким никнеймом
    const candidate = await sql`select * from Users where name = ${username} limit 1`
    //если мы нашли пользователя с таким ником, то отправляем пользователю обратно ошибку что пользователь уже существует
    if (candidate[0]) {
        res.status(400).send({ message: "Пользователь уже существует" })
    }
    //хешируем пароль
    console.log(req.body);
    const hashPassword = bcrypt.hashSync(password, 7)
    //вытаскиваем из базы роль для пользователя так как у нас связка таблиц
    const userRole = await sql`select * from Roles where role = 'USER'`
    //создаем нового пользователя
    await sql`insert into Users(name, email, phone_number, role, password) values(${username}, ${email}, ${phone_number}, ${userRole[0].role}, ${hashPassword})`
    //отправляем пользователю 200 статус код (это значит что всё успешно)
    return res.send({message: "Пользователь успешно зарегистрирован"})
}