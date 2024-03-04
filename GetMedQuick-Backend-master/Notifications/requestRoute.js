const { sendCustomMail } = require("../helperFunctions/MailSenderFunction");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const { Hospital } = require("../schema/hospitalSchema");
const Request = require("../schema/RequestSchema");
const router = require("express").Router();

router.route("/makerequest").post(AuthMiddleware, (req, res) => {
  console.log(req.body);
  const newRequest = new Request({ ...req.body, fromhospital: req.id });

  newRequest.save().then(() => {
    Hospital.findById(req.id)
      .then((response) => {
        sendCustomMail(
          req.body.to,
          `you have a request form a hospital :- ${response.name}
            conatct : +91${response.contact} email : ${response.email}`
        )
          .then(() => {
            res.json({
              isError: false,
              message: "resource successfully requested",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(404).json({ isError: true, message: err.message });
          });
      })

      .catch((err) => {
        console.log(err);
        res.status(404).json({ isError: true, message: "error" });
      });
  });
});



router.route("/acceptrequest").post(AuthMiddleware, (req, res) => {
    console.log(req.body);

          sendCustomMail(
            req.body.to,
            `your request accepted by ${req.body.name}
            from itemnmae : ${req.body.itemname}
            price : ${req.body.price}`
          )
            .then(() => {
              res.json({
                isError: false,
                message: "request successfully accepted",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(404).json({ isError: true, message: err.message });
            });
    
  
  });
  


router.route("/getRequests").get(AuthMiddleware,(req, res) => {
    console.log(req.id);
  Request.find({ 
    tohospital: req.id })
    .populate("tohospital").populate("fromhospital")
    .then((response) => {
      res.json({ response, message: "Success" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "error",
      });
    });
});

module.exports = router;
