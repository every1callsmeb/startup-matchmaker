var User = function() {

};

router.get('/',function(req,res){
  UserController.fetchUsers(req,res);
});

router.post('/',function(req,res,next){
    UserController.createUser(req,res);
});

router.get('/:user_id',function(req,res){
  UserController.fetchUser(req,res);
});

router.put('/:user_id', UserController.updateUser);

router.delete('/:user_id', UserController.deleteUser);

router.get('/find/:username',UserController.findUserByUsername);

module.exports = router;
