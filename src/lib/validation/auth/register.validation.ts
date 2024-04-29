import { z } from "zod";

const registerSchemaValidation = z.object({
    name: z.string({
        message:"Name is required"
    }),
    email: z.string({
        message: "Email is required"
    }).email(),
    password: z.string({
        message: "Password is required"
    }),
    contactNumber: z.string({
        message: "Contact number is required"
    }),
    profilePhoto: z.string({
        message:"Profile photo is required"
    })
});


export default registerSchemaValidation