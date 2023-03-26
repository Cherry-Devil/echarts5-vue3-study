module.exports={
    lintOnSave:false,
    // 判断是生产模式还是开发模式
    publicPath:process.env.NODE_ENV="production"?"./":"/"
}