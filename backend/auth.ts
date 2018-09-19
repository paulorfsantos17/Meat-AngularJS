import { Request, Response} from  'express'
import {User, users} from './user'

export const handleAuthentication = (req: Request, res: Response) =>{
	 const user:User = req.body
	 if(isValid(user)){
	 	const DbUser : User = users [user.email]
	 	res.json({name: "users.name", email: "users.email"})

	 } else {
	 	res.status(403).json({message :'Dados Invalido'})
	 }

	 function isValid(user):boolean{
	 	if(!User){
	 	return false
	 }
	 const DbUser = users[user.email]
	 return DbUser !== undefined && DbUser.matches(user)


	 }

}