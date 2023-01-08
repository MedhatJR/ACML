const router= require("express").Router();
const { Register }=require("../Controllers/AuthControllers");
router.post("/");

router.post("/Register",Register);
// router.post("/LogIn",LogIn);

module.exports= router;