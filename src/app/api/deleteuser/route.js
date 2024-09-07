import {User} from '../../../model/User.js'
import {connect} from '../../../database/mongo.config.js'
import { NextResponse } from "next/server";

connect();
export async function DELETE (request){
    try {
        const id = request.nextUrl.searchParams.get("id");
        await User.findByIdAndDelete(id);
        return NextResponse.json({message: "User Deleted successfuly" }, {status : 200})
    } 
    catch (error) {
        console.error(error);
        return NextResponse.json({
            status : 500,
            errors : {
              password : "some error occured while trying to delete the users "
            }
        },{
            status : 500
        })
    }
}