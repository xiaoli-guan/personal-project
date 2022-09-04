//js
Page({
  data:{
    image:[],
    image_url:'',
    text_temp:"",
    index:0
  },
  uploadImage(){
    var that =this
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success:(res)=>{
        console.log(res.tempFiles[0].tempFilePath);
        that.setData({
          image_url:res.tempFiles[0].tempFilePath,
          index:that.data.index+1
        })
      }
    })
  },

  getText:function(e){
    this.setData({text_temp:e.detail.value})
  },
  setText(){
    this.setData({
      image:this.data.image.concat({url:this.data.image_url,text:this.data.text_temp})
    })
    wx.setStorage({
      key:'image',
      data:this.data.image,
      success:res=> {
        console.log('个人信息缓存成功')
      },
      fail:res=> {
        console.log('个人信息缓存出错')
      }
    })
  }
})
