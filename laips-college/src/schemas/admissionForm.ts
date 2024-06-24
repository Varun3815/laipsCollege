import { z } from 'zod';
export const usernameValidation = z
    .string()
    .min(2, "User must be atleast 2 characters")
    .max(20, "user must be more than 20 characters")
    .regex(/^[a-zA-Z\s]+$/, "username must not contain special characters")



export const admissionFormSchema = z.object({
    name: usernameValidation,
    mobileNo: z.string().min(10, { message: "Mobile number must be atleast 10 characters" }).max(10, { message: "Mobile number must be atleast 10 characters" }),
    email: z.string().email({ message: "Invalid Email" }),
    address: z.string(),
    course: z.enum(["MBA", "LAW"], { message: "Course must be either MBA or LAW" })
}) 