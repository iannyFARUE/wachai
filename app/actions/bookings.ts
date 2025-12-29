"use server";
import prisma from "@/lib/prisma";
import { Prisma } from "../generated/prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { success, z } from "zod";
import { formDataToObject } from "@/app/lib/utils";
import { ActionResponse, DropOffFormData } from "../types/dropoff";
import { log } from "console";

const bookingFormSchema = z.object({
  email: z.email(),
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone is required"),

  streetAddress: z.string().min(1, "Street is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().regex(/^\d{5}$/, "Invalid zip code"),
  country: z.string().min(3, "Country is required"),

  separateWash: z.coerce.boolean().default(false),
  handDried: z.coerce.boolean().default(false),

  additionalInfo: z.string().optional().default(""),
});

export async function createBooking(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = formDataToObject(formData);

  try {
    const validatedData = bookingFormSchema.safeParse(rawData);
    if (!validatedData.success) {
      console.log(z.flattenError(validatedData.error).fieldErrors);
      return {
        success: false,
        message: "Please fix the errors in form",
        errors: z.flattenError(validatedData.error).fieldErrors,
      };
    }

    const data = validatedData.data;

    const booking: Prisma.UserCreateInput = {
      email: data.email,
      name: data.name,
      phoneNumber: data.phone,
      address: {
        create: {
          streetAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          country: data.country,
        },
      },
      dropoff: {
        create: {
          separateWash: data.separateWash,
          handDried: data.handDried,
          notes: data.additionalInfo,
        },
      },
    };

    await prisma.user.create({
      data: booking,
    });
    revalidatePath("/");
    redirect("/");
  } catch (err) {
    return {
      success: false,
      message: "An unexpected error occured",
    };
  }
}
