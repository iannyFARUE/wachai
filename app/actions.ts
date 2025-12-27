"use server";
import prisma from "@/lib/prisma";
import { Prisma } from "../app/generated/prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
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
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return { ok: false, error: "Email already exists" };
      }
    }
    throw err; // unexpected error
  }
}
