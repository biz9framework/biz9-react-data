// -- biz9
import {Log,Num,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Favorite_Url,Favorite_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-favorite/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import {Store_Logic,Cart_Logic,Order_Logic,Store_Type,Store_Url} from "/home/think1/www/doqbox/biz9-framework/biz9-store/source";
import {User_Logic,User_Url} from "/home/think1/www/doqbox/biz9-framework/biz9-user/source";
import {Config,Project_Table} from "./constant";
import async from 'async';
// -- other
/*  - METHODS -
 *  -- CART_SERVICE --
 *  delete / (cart_number) /
 *  get / (cart_number) /
 *  post / (cart) /
 *  -- ORDER_SERVICE --
 *  delete / (order_number)
 *  get / (order_number)
 *  post / (order,order_payments)
 *  search / (search_filter,search_sort_by,search_page_current,search_page_size)
*/
class Cart_Service {
    static delete = (url,cart_number,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {cart_number:cart_number,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    static get = (url,cart_number,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {cart_number:cart_number,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    static post = (url,cart,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {cart:cart,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_data;
                    data = biz_data;
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
class Order_Service {
    // -- 9_post
    static post = (url,order,order_payments,option) => {
        console.log('44444444');
        console.log('44444444');
        console.log('44444444');
        return new Promise((callback) => {
            console.log('5555555');
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    console.log('11111');
                    const form_data = {order:order,order_payments:order_payments};
                    console.log('2222222');
                    const biz_data = await Remote.post(url,form_data);
                    console.log('333333');
                    response = biz_data.response;
                    data = biz_data.data;
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_get_order
    static get = (order_number,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            option = Obj.merge(option,{id_field:Form_Field.TITLE_URL});
            let form_data = {order_number:order_number,option:option};
            let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Store_Url.ORDER,form_data);
            async.series([
                async function(call){
                    const biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
export {Cart_Service,Order_Service};
