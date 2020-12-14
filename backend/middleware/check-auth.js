const { JitEmitterVisitor } = require("@angular/compiler/src/output/output_jit");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        // if we get no authorization, it will fail. So we use try catch

        // you can choose the way you get the token, for example: url or headers
        const token = req.headers.authorization.split(" ")[1];    // typically use the name authorization, the pattern is "Bearer (token)"
        jwt.verify(token, "secret_password_to_create_token_this_should_be_longer");
        next(); // if it doesn't fail, let the execution continue
    }catch(error){
        res.status(401).json({
            message: 'Auth failed'
        });
    }
}