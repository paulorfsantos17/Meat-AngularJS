import { Request, Response} from  'express'
import {User, users} from './user'
import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, res: Response) =>{
	 const user:User = req.body
	 if(isValid(user)){
	 	const DbUser  = users[user.email]
	 	const token = jwt.sign({sub:DbUser.email , iss:"meat-api" }, "meat-api-password")

	 	res.json({name: DbUser.name ,email: DbUser.email , acessToken: token })

	 } else {
	 	res.status(403).json({message :'Dados Invalido'})
	 }

	 function isValid(user:User):boolean{
	 	if(!user){
	 	return false
	 }
	 
	 const DbUser = users[user.email]
	 return DbUser !== undefined && DbUser.matches(user)

	 }

}