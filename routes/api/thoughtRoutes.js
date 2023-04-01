const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// routing API request for retrieving all thoughts and creating new thoughts
router.route('/').get(getthoughts).post(createthought);

// routing API request for retrieving, updating and deleting thoughts by id
router
  .route('/:thoughtId')
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);

// routing API request for creating new reaction under a selected thought
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// routing API request deleting a selected reaction from a selected thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
