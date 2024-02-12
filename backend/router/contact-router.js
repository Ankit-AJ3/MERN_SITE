const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-contr`oller");

router.route("/contact").post(contactForm);

module.exports = router;