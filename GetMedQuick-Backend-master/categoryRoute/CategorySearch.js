const AuthMiddleware = require('../middleware/AuthMiddleware');
const { Organ , Blood ,Equipment,Medicine } = require('../schema/categorySchema');
const router = require("express").Router();


router.route("/searchhospital/:category/:query").get(AuthMiddleware,(req, res) => {

    console.log(req._id);

    const Arr={"organ":Organ,"blood":Blood, "equipment" :Equipment, "medicine": Medicine}
  
       Arr[req.params.category].find({name :{
        $regex : req.params.query , $options : "i"
       } , hospitalId: { $ne:req.id} }).populate('hospitalId').then((response) => {
            if (response.length>0) {
                res.json({ response,  isError : false, message: "Success" });
            }
            else {
                res.status(400).json({
                    isError : true,
                    message: "error",
                });
            }
        }).catch(err => res.status(404).json({
            isError : true,
            message: "error",
        }))
     
});



module.exports = router;