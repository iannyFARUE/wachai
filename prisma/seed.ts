import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    email: "iannyfarai@gmail.com",
    name: "Ian Farai Madhara",
    phoneNumber: "2017364158",
    address: {
      create: {
        streetAddress: "13107 160th",
        city: "Jamaica",
        state: "New York",
        zipCode: "13107",
        country: "United States",
      },
    },
    dropoffs: {
      create: {
        separateWash: true,
        handDried: true,
        notes: "Please do not use any detergent",
      },
    },
  },
  {
    email: "naomimaguraz@gmail.com",
    name: "Naomi Madhara",
    phoneNumber: "2017364159",
    address: {
      create: {
        streetAddress: "13107 160th",
        city: "Brooklyn",
        state: "New York",
        zipCode: "11007",
        country: "United States",
      },
    },
    dropoffs: {
      create: {
        separateWash: true,
        handDried: false,
        notes: "Please do not use any detergent",
      },
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
