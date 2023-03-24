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

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/videos/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
