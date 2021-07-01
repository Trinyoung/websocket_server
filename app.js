const express = require('express');
const path = require('path');
const app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());
// app.use(indexRouter);
app.get('/api/haha', (req, res) => {
    res.send('收到哈哈请求！');
});
app.get('/api/hehe', (req, res) => {
    res.send('收到呵呵请求！');
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({code: 500, message: `下载文件失败, ${err.message}`})
});
module.exports = app;
// 