var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/breddit2');
require('../models/Comments.js');
require('../models/Posts.js');