"use server";
export async function createBooking(formData: FormData) {
  console.log(formData);
  const booking = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    streetAddress: formData.get("streetAddress"),
    apartment: formData.get("apartment"),
    city: formData.get("city"),
    state: formData.get("state"),
    zipCode: formData.get("zipCode"),
    country: formData.get("country"),
    additionalInfo: formData.get("additionalInfo"),
    separateWash: formData.get("separateWash"),
    handDried: formData.get("handDried"),
  };

  console.log(booking);
}
