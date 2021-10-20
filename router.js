const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
	multipart: true,  // 允许上传多个文件
});

//登录
router.post('/login/user', async (ctx) => {
	let requestData = ctx.request.body;
	ctx.body = {
		code: 200,
        data: {
            token: requestData.userName + '&' + requestData.password,
            message: '登录成功！'
        }
	}
});
// 获取角色
router.post('/login/getRoles', async (ctx) => {
	let request = ctx.request.body;
	if (request.userName === 'admin') {
		ctx.body = {
			code: 200,
			 data: {
                message: '获取角色成功！',
                roles: ['admin']
            }
		}
    } else {
		ctx.body = {
			 code: 200,
            data: {
                message: '获取角色成功！',
                roles: ['user']
            }
		}
    }
	
});


// 根据角色获取路由
router.post('/login/permission', async (ctx) => {
	let request = ctx.request.body;
	if (request.roles === 'admin') {
        ctx.body = {
            code:200,
            data: {
                accessRoutes: [
                    {
                        path: '/admin',
                        name: 'admin',
                        title: '管理员',
                        component: 'layout/index',
                        redirect: '/admin/index',
                        children: [
                            {

                                path: '/admin/index',
                                name: 'adminIndex',
                                title: '管理员权限页面',
                                component: 'permission/admin'

                            },
                            {

                                path: '/admin/index2',
                                name: 'adminIndex2',
                                title: '管理员权限页面2',
                                component: 'permission/admin2'

                            }
                        ]

                    }
                    , {
                        path: '/realTime',
                        name: 'realTime',
                        title: '实时监控',
                        component: 'layout/index',
                        redirect: '/realTime/headerFeng',
                        children: [
                            {

                                path: '/realTime/headerFeng',
                                name: 'headerFeng',
                                title: '风电',
                                component: 'realTime/headerFeng',
                                redirect: '/realTime/farmIndex',
                                children: [
                                    {

                                        path: '/realTime/farmIndex',
                                        name: 'farmIndex',
                                        title: '风电首页',
                                        component: 'realTime/farmIndex'

                                    }, {
                                        path: '/realTime/viewDistribute',
                                        name: 'viewDistribute',
                                        title: '分布视图',
                                        component: 'realTime/viewDistribute'
                                    }, {
                                        path: '/realTime/viewJzt',
                                        name: 'viewJzt',
                                        title: '矩阵视图',
                                        component: 'realTime/viewJzt'
                                    }, {
                                        path: '/realTime/viewList',
                                        name: 'viewList',
                                        title: '列表视图',
                                        component: 'realTime/viewList'
                                    }, {
                                        path: '/realTime/viewControl',
                                        name: 'viewControl',
                                        title: '成组控制',
                                        component: 'realTime/viewControl'
                                    }, {
                                        path: '/realTime/viewMap',
                                        name: 'viewMap',
                                        title: '主接线图',
                                        component: 'realTime/viewMap'
                                    }, {
                                        path: '/realTime/viewTower',
                                        name: 'viewTower',
                                        title: '测风塔',
                                        component: 'realTime/viewTower'
                                    }, {
                                        path: '/realTime/viewEmeter',
                                        name: 'viewEmeter',
                                        title: '电度表',
                                        component: 'realTime/viewEmeter'
                                    }, {
                                        path: '/realTime/viewAgcAvc',
                                        name: 'viewAgcAvc',
                                        title: 'AGC/AVC',
                                        component: 'realTime/viewAgcAvc'
                                    }, {
                                        path: '/realTime/viewContrast',
                                        name: 'viewContrast',
                                        title: '对比视图',
                                        component: 'realTime/viewContrast'
                                    }
                                ]

                            },
                            {

                                path: '/realTime/headerGuang',
                                name: 'headerGuang',
                                title: '光伏',
                                component: 'realTime/headerGuang',
                                // redirect: '/realTime/farmIndex',
                                // children: [
                                //     {

                                //         path: '/realTime/farmIndex',
                                //         name: 'farmIndexGuang',
                                //         title: '光伏首页',
                                //         component: 'realTime/farmIndex'

                                //     }, {
                                //         path: '/realTime/viewDistribute',
                                //         name: 'viewDistributeGuang',
                                //         title: '分布视图',
                                //         component: 'realTime/viewDistribute'
                                //     }
                                // ]
                            }
                        ]

                    }
                    // ,{
                    //     // 将404通配放在最后，否则前面匹配跳到404，就无法向后匹配准确路由
                    //     path: '/*',
                    //     name: 'NotFound',
                    //     title: '404',
                    //     hidden: true,
                    //     component: 'layout/index',
                    //     redirect: '/page404',
                    //     children: [
                    //         {

                    //             path: '/page404',
                    //             name: 'page404',
                    //             title: '页面不存在',
                    //             component: 'page404'

                    //         }
                    //     ]

                    // }
                ],
                message: '获取权限成功'
            }
        }
    } else {
       ctx.body = {
            code:200,
            data: {
                accessRoutes: [
                    {
                        path: '/user',
                        name: 'user',
                        title: '普通用户',
                        component: 'layout/index',
                        redirect: '/user/index',
                        children: [
                            {

                                path: '/user/index',
                                name: 'userIndex',
                                title: '普通用户权限页面',
                                component: 'permission/user'

                            }
                        ]

                    }
                    // ,{
                    //     // 将404通配放在最后，否则前面匹配跳到404，就无法向后匹配准确路由
                    //     path: '/*',
                    //     name: 'NotFound',
                    //     title: '404',
                    //     hidden: true,
                    //     component: 'layout/index',
                    //     redirect: '/page404',
                    //     children: [
                    //         {

                    //             path: '/page404',
                    //             name: 'page404',
                    //             title: '页面不存在',
                    //             component: 'page404'

                    //         }
                    //     ]

                    // }
                ],
                message: '获取权限成功'
            }
        }
    }
	
});

 // 获取双击曲线
 router.post('/login/getLine', async (ctx) => {
	let request = ctx.request.body;
	if (request.type === 'month') {
         ctx.body = {
            code: 200,
            type: request.type,
            data: {
                charData: {
                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '50px',
                        bottom: '50px'
                    },
                    tooltip: {
                        show: true,
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        "axisLabel": {
                            "rotate": 0,
                            "color": "#c0c3c7"
                        },
                        axisTick: {
                            show: true
                        },
                        "axisLine": {
                            "lineStyle": {
                                "color": "#016688"
                            }
                        },

                        data: ['1月', '2月', '3月份', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        type: 'value',
                        "splitLine": {
                            "lineStyle": {
                                "color": "#004d6e",
                                "type": "dashed"
                            }
                        },
                    },
                    series: [
                        {
                            data: [150, 230, 224, 218, 135, 147, 260, 300, 120, 110, 100, 90],
                            type: 'line'
                        }
                    ]
                }
            }
        }
    } else {
         ctx.body = {
            code: 200,
            type: request.type,
            data: {
                charData: {
                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '50px',
                        bottom: '50px'
                    },
                    tooltip: {
                        show: true,
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        "axisLabel": {
                            "rotate": 0,
                            "color": "#c0c3c7"
                        },
                        axisTick: {
                            show: true
                        },
                        "axisLine": {
                            "lineStyle": {
                                "color": "#016688"
                            }
                        },

                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value',
                        "splitLine": {
                            "lineStyle": {
                                "color": "#004d6e",
                                "type": "dashed"
                            }
                        },
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true
                        }
                    ]
                }
            }
        }
    }
	
});	


let id = 3
let data = [
	{
		name: '张三',
		tel: '13000000000',
		id: 1
	},
	{
		name: '李四',
		tel: '13000000001',
		id: 2
	},
	{
		name: '王五',
		tel: '13000000002',
		id: 3
	}
];
router.get('/contactList', async (ctx) => {
	ctx.body = {
		code: 200,
		data: data
	}
});
function getQueryVariable(url,variable)
{
	var query = url.split('?')[1];
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
//form-data
router.post('/contact/new/form', koaBody, async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	id++
	newData.id = id
	data.push(newData)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.put('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.patch('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.del('/contact', async (ctx) => {
	let id =getQueryVariable(ctx.request.url,'id')
	data = data.filter(item => item.id != id)
	console.log(id)
	ctx.body = {
		code: 200,
		message: '删除成功'
	}
});
router.get('/longtime', async (ctx) => {
	let query = ()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(function () {
				resolve('请求成功');
			},5000)
		})
	}
	let result = await query();
		ctx.body = {
			code: 200,
			message: result
		}
});
module.exports = router;