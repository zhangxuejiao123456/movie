import loading from "./index.vue";
import Vue from "vue";
export default ()=>{
    // 通过extend注册的组件可以在 div#app 外的地方插入
    let loadingComponent = Vue.extend(loading);
    console.log(loadingComponent)
    let vm=new loadingComponent({
        el:document.createElement("div"),
        methods:{
            handlemount(){
                document.body.appendChild(vm.$mount().$el)
            },
            handleDestory(){
                document.body.removeChild(vm.$mount().$el)
            }
        }
    })

    
    return vm
}