const router = require('express').Router();

const{getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../switches/user_switches');

router.route('/').get(getAllUsers).post(createUser);

router.router('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;