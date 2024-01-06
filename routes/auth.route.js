const express = require('express');

const router = express.Router();


router.post("/login", () => {
 res.send('login route')
})

router.post("/register", () => {
 res.send('resgister route')
})

router.post("/refresh-token", () => {
 res.send('refresh-token route')
})

router.delete("/logout", () => {
 res.send('logout route')
})

module.exports = router