const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/secrets');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'token invalid' });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'token required' });
  }
};

const checkIfString = (req, res, next) => {
  if (typeof req.body.username === 'string') {
    next();
  } else {
    res.status(422).json({ message: 'username must be a string' });
  }
};

const checkRegistration = (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.role) {
    res.status(422).json({ message: 'username, role, and password required' });
  } else {
    next();
  }
};

const validateRoleName = (req, res, next) => {
  if (req.body.role === 'instructor' || req.body.role.trim() === 'instructor') {
    next();
  } else if (req.body.role === 'client' || req.body.role.trim() === 'client') {
    next();
  } else if (req.body.role.trim().length > 32) {
    next({ status: 422, message: 'Role name can not be longer than 32 chars' });
  } else {
    next({ status: 422, message: 'Must be a instructor or client' });
  }
};

module.exports = {
  restricted,
  checkIfString,
  checkRegistration,
  validateRoleName,
};
