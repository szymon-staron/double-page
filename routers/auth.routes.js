const express = require("express");
let User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/register",
  [
    check("username", "Username is empty").not().isEmpty(),
    check("password", "Password is empty").not().isEmpty(),
    check("email", "E-mail rejection").isEmail(),
  ],
  async (req, res) => {
    try {
      const { username, password, email } = req.body;

      let user = await User.findOne({ email });
      const errors = validationResult(req);

      if (user) {
        return res.status(401).json({ msg: "User already exists" });
      }

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      user = new User({
        email,
        password,
        username,
      });

      let salt = await bcryptjs.genSalt(8);
      user.password = await bcryptjs.hash(password, salt);

      await user.save();

      let payload = {
        user: {
          _id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error..." });
    }
  }
);

router.post(
  "/login",
  [
    check("password", "Password is empty").not().isEmpty(),
    check("email", "E-mail rejection").isEmail(),
  ],
  async (req, res) => {
    try {
      const { password, email } = req.body;

      let user = await User.findOne({ email });
      const errors = validationResult(req);

      if (!user) {
        return res.status(404).json({ msg: "User does not exist" });
      }

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ msg: "Passwords don't match" });
      }

      await user.save();

      let payload = {
        user: {
          _id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error..." });
    }
  }
);

module.exports = router;
