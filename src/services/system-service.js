/**
 * Created by zhangyuanyuan031 on 17/7/6.
 */
import ajax from 'util/ajax';

export const getMenueService=()=>ajax("/getAllMenus.do");
// export const getMenueService=()=>ajax("/json/page-home.json");

