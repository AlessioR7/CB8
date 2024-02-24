const checkUser = (req, res, next) => {
  const { user } = req.query;

  if (user === "admin") {
    req.user = { name: "admin" };
    next();
  } else {
    res.status(401).send(`L'utente ${user} non è autorizzato`);
  }
};

module.exports = checkUser;
