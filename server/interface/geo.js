import Router from 'koa-router'
import axios from './utils/axios'
import Menu from '../dbs/models/menu'
import Province from '../dbs/models/province'
import { async } from 'q'
let router = new Router({prefix:'/geo'})
// 获取城市坐标
router.get('/getPosition',async (ctx)=>{
  let {status,data:{province,city}} = await axios.get("http://cp-tools.cn/geo/getPosition")
  if(status===200){
    ctx.body={
      province,
      city
    }
  }else{
    ctx.body = {
      province:'',
      city:''
    }
  }
})
// 获取菜单
router.get('/menu',async(ctx)=>{
  const result = await Menu.findOne()
  ctx.body = {
    menu:result.menu
  }
})
// 获取城市
router.get("/province", async(ctx)=>{
  const result  = await Province.find()
  let province = result.map((item) =>({
    id:item.id,
    name:item[0].value
  }))
  ctx.body={
    province
  }
})
export default router
