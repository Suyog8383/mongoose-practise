const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://indian:suyog8383@cluster0.adjp1pm.mongodb.net/"
  );
  const productSchema = new mongoose.Schema({ name: String, price: Number }); //validation
  const productModel = mongoose.model("records", productSchema);
  const data = new productModel({ name: "FootBall", price: 45 });
  let result = await data.save();
  console.log("@SN running", result);
};
main();
