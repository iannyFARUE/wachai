"use server";
import prisma from "@/lib/prisma";
import { Prisma } from "../app/generated/prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addressSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(1, "Country is required"),
});

const userSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
});

export async function createBooking(formData: FormData) {
  try {
    const booking: Prisma.UserCreateInput = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      phoneNumber: formData.get("phone") as string,
      address: {
        create: {
          streetAddress: formData.get("streetAddress") as string,
          city: formData.get("city") as string,
          state: formData.get("state") as string,
          zipCode: formData.get("zipCode") as string,
          country: formData.get("country") as string,
        },
      },
      dropoff: {
        create: {
          separateWash: formData.get("separateWash") == "true",
          handDried: formData.get("handDried") == "true",
          notes: formData.get("additionalInfo") as string,
        },
      },
    };

    await prisma.user.create({
      data: booking,
    });
    revalidatePath("/");
    redirect("/");
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      throw new Error("Email already exists");
    }
    throw err; // unexpected error
  }
}
