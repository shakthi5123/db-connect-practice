
import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  hotelid: String,
  name: String,
  image: String,
  description: String,
  address: String,
  phone: String,
  phoneLink: String,
  whatsup: String,
  email: String,
  emailLink: String,
  locationLink: String,
  location: String,
  website: String,
  websiteLink: String,
  socials: {
    linkedin: String,
    facebook: String,
    instagram: String,
    youtube: String,
  },
});

export default mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);
