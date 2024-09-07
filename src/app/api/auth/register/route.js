import { NextResponse } from "next/server";
import { registerSchema } from "../../../../validator/authSchema";
import vine from "@vinejs/vine";
import bcrypt from "bcrypt"
import {User} from "../../../../model/User"
import { connect } from "../../../../database/mongo.config";
import ErrorReporter from "../../../../validator/ErrorReporter";

connect()
export async function POST(request) {
    try {
        const body = await request.json();
        const validator = vine.compile(registerSchema)
        validator.errorReporter = () => new ErrorReporter()
        const output = await validator.validate(body);
        //* check that the email is already exis
        const user =  await User.findOne({email : output.email })
        if (user) {
            return NextResponse.json({
                status : 400,
                error :{
                    email : "Email already exists"
                }
            },{status : 200})
        }

        //* Encrypt the password
        const salt = bcrypt.genSaltSync(10)
        output.password = bcrypt.hashSync(output.password, salt);
        await User.create(output)
        return NextResponse.json(
            { output, status: 200, message: "User created successfully, Please login to your account... " },
            { status: 200 })
    } catch (error) {
        if (error) {
            return NextResponse.json(
                { status: 400, error: error.messages },
                { status: 200 })
        }
    }
}
