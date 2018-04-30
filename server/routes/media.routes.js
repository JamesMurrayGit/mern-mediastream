import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import mediaCtrl from '../controllers/media.controller'

const router = express.Router()

router.route('/api/media/new/:userId')
    .post(authCtrl.requireSignin, mediaCtrl.create)

router.route('/api/media/video/:mediaId')
    .get(mediaCtrl.video)

router.route('/api/media/popular')
    .get(mediaCtrl.listPopular)

router.route('/api/media/by/:userId')
    .get(mediaCtrl.listByUser)

router.route('/api/media/:mediaId')
    .get( mediaCtrl.incrementViews, mediaCtrl.read)
    .put(authCtrl.requireSignin, mediaCtrl.isPoster, mediaCtrl.update)

router.param('userId', userCtrl.userByID)
router.param('mediaId', mediaCtrl.mediaByID)

export default router
