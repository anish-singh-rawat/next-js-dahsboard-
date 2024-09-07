import CredentialsProvider from "next-auth/providers/credentials";
import {User} from "../../../../model/User.js"
import { connect } from "../../../../database/mongo.config";


export const authOptions = {
    pages :{
        signIn : '/login'
    },
    providers: [
        CredentialsProvider({
            name : "next-auth",
            credentials: {
                email : {
                    label : "email",
                    type : 'email',
                    placeholder : "Please enter your email"
                },
                password : {
                    label : "password",
                    type : 'password',
                }
            },
            async authorize(credentials , req){
                connect()
                const user = await User.findOne({email: credentials?.email});
                if (user) {
                    return user
                  } 
              else {
                    return null
                  }
            }
        })
    ],
  }
  