function createUserSession(req, user, action) {
  req.session.uid = user._id.toString();
  req.session.save(action); //save methon from express session package
}


module.exports = {
    createUserSession: createUserSession
}