module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send("please log in man");
    }
    next();
  },
  adminsOnly: (req, res, next) => {
    if (!req.session.user.isAdmin) {
      return res.status(403).send("naw dog");
    }
    next();
  }
};
