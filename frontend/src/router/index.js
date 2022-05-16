/*
 * @Author: symbol
 * @Date: 2022-04-30 11:18:03
 * @LastEditors: symbol
 * @LastEditTime: 2022-04-30 19:13:05
 * @FilePath: /todb/frontend/JS/src/router/index.js
 * @Description:路由
 *
 * Copyright (c) 2022 by symbol, All Rights Reserved.
 */
import Default from "../Welcome.vue"
import NewConnect from "../views/NewConnection.vue"
import Status from "../views/redis/Content_status.vue"
import StringInfo from "../views/redis/Content_string_info.vue"
import ListInfo from "../views/redis/Content_list_info.vue"
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    // {
    //   // 主页
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    // },
    {
        // 新建连接
        path: "/newConnection",
        name: "newConnection",
        component: NewConnect
    },
    {
        // 右侧默认页面
        path: "/rightContent/default",
        name: "default",
        component: Default
    },
    {
        // 右侧状态页面
        path: "/rightContent/status",
        name: "status",
        component: Status
    },
    {
        // 右侧详情页面string类型
        path: "/rightContent/value_string",
        name: "stringInfo",
        component: StringInfo
    },
    {
        // 右侧详情页面list类型
        path: "/rightContent/value_list",
        name: "listInfo",
        component: ListInfo
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
