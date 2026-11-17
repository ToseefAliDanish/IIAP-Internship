const bcrypt = require("bcryptjs");

bcrypt.hash("12345678", 12).then(console.log);