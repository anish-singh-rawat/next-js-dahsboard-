import {User} from '../../../model/User.js'
import {connect} from '../../../database/mongo.config.js'
import { NextResponse } from "next/server";

connect();
export async function GET() {
    try {
        const users = await User.find();
        return NextResponse.json(
            {users},
            {status: 200}
            );       
    } 
    catch (error) {
        console.error(error);
        return NextResponse.json({
            status : 500,
            errors : { password : "some error occured while trying to fetch the users " }
        },{
            status : 500
        })
    }
}

