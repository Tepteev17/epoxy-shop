module.exports = {
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        prependData:'@import "@/style/style.scss";'
      }
    }
  }
}
