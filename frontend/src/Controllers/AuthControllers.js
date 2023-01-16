const Corporate = require("../../../Backend/src/Routes/CorporateController");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "Password Encrypted", {
    expiresIn: maxAge,
  });
};
// const handleErrors = (err) => {
//     let errors = { Email: "", Password: "" };
//     if (err.code === 11000) {
//         errors.Email = "Email is already registered";
//         return error;
//     }
//     if (err.message.includes("Users validation failed")) {
//         Object.values(err.errors).forEach(({ properties }) => {
//             errors[properties.path] = properties.message;
//         });
//     }
//     return errors;
// };
module.exports.Register = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const user = await Corporate.create({ Email, Password });

    const token = createToken(user._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(200).json({ user: user._id, created: true });
    //res.status(200).send(res);
  } catch (err) {
    console.log(err);
    const erros = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.LogIn = async (req, res, next) => {};
