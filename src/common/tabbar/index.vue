<template>
    <div class="box1">
        <router-link v-for="(item,index) in navs" 
        :key="index" 
        :to="item.path"
        tag="li"
        >
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:'tabbar',
        data(){
            return {
                navs:[
                    {
                        icon:"&#xe717",
                        text:"电影",
                        path:"/movie"
                    },
                    {
                        icon:"&#xe61d",
                        text:"影院",
                        path:"/cinema"
                    },
                    {
                        icon:"&#xe605",
                        text:"我的",
                        path:'/mine'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.box1{
    width:100%;
    height:1rem;
    display:flex;
    position: fixed;
    bottom:0px;
    left: 0px;
    border-top: 1px solid #cccccc;
    li{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            font-size: 0.3rem;
        }

    }

}
.router-link-active{
    color: red;
}
// .router-link-exact-active{
//     color: yellow;
// }
</style>