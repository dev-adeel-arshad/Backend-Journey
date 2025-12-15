
    /*

        THAT IS STATEFULL AUTHENTICATION: and when the
        broewser is refresshed all users are logged out
        and the browser has limited memory for that so we
        preffer stateless Authentication
    */
    //const sessionIdToUserIdMap=new Map();

    // function setUser(id,user){
    //     sessionIdToUserIdMap.set(id,user);
    // }

    // function getUser(id){
    //   return  sessionIdToUserIdMap.get(id);
    // }

    // module.exports={
    //     setUser,
    //     getUser
    // }


    //  STATELESS AUTHENTICATION: In this we will use Token that will
    //  be preserevd for users and we can use these tokens for managing the states 

    const jwt=require("jsonwebtoken")
    const secret="adeel.dev"
    function setUser( user) {
      const payload={
        _id:user._id,
        email:user.email
      }
      return jwt.sign(payload,secret)
    }

    function getUser(token) {
      if(!token) return null
      return jwt.verify(token,secret)
    }

    module.exports = {
      setUser,
      getUser
    }