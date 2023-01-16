const sequelize = require('../services/database-setup');
const { Comment } = require('../models');
const commenctService = require('../services/comment');


exports.create = async (req, res, next) => {
    try {
      const { user } = req;
      const comment = commentService.create(req.body, user.id);
      const newComment = await Offer.create(offer);
  
      res.status(201).json({
        message: 'Comment created',
        data: {
          offer: newComment,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  // DA LI UBACITI GET COMMENT BY SPECIFIC USER ???