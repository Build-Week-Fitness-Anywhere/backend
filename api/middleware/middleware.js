const checkRole = (roleName) => {
  return function (req, res, next) {
    if (roleName === req.decodedJwt.role) {
      next();
    } else {
      res.status(403).json({
        message: 'you have no power here!',
      });
    }
  };
};

module.exports = { checkRole };
