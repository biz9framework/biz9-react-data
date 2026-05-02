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
 *  post / (cart)
 *  -- ORDER_SERVICE --
 *  post / (order,order_payments)
 *  get / (order_number)
*/
class Cart_Service {
    static post = (url,cart,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {cart:cart,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
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
class Order_Service {
    // -- 9_post
    static post = (order,order_payments,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {order:order,order_payments:order_payments};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Store_Url.ORDER_POST,form_data);
                    const biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                },
                async function(call){
                    let app = Data_Logic.get(Project_Table.APP,0,
                        {data:{
                            order_number:data.order_number,
                            user_id:data.user_id,
                            app_id:Title.APP_ID+Num.get_id(99999),
                            status_type:App.get_app_status_by_title(Title.APP_STATUS_NEW).value,
                            title:'App Title',
                            template:order[Field.PRODUCT_TITLE],
                            cms:order[Field.PRODUCT_CMS],
                            hosting:order[Field.PRODUCT_HOSTING],
                            user_status_type:App.get_user_app_status_by_title(Title.USER_APP_STATUS_PENDING).value
                        }});
                    const form_data = {table:app.table,id:0,data:app,option:{}};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.POST,form_data);
                    const biz_data = await Remote_Data.post(service_data);
                    response.messages.push(Response_Logic.get_message(Response_Field.RESPONSE_RESULT,Status_Type.OK,biz_data.response));

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
