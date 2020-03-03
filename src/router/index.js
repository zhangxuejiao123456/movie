import Vue from "vue";
import VueRouter from "vue-router";
import movie from "./movie";
import mine from "./mine";
import cinema from "./cinema";
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        movie,
        cinema,
        mine
    ]
})