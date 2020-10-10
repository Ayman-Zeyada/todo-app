const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-header-token");

  if (!token) res.status(401).json({ msg: "No token, authorization denied" });
  else {
    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }
}

module.exports = auth;
