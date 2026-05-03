// -- biz9
import {Log,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Favorite_Url,Favorite_Logic,Favorite_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-favorite/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
// --other
import {Config} from "./constant";
const async = require('async');
class Favorite_Service {
    /* -- 9_DEFINE --
     * --- METHODZ ---
     * delete / (url,favorite_obj)
     * get / (url,favorite_obj)
     * post / (url,favorite_obj)
     * user_search / (url,parent_table,user_id)
     * --- HELPERZ ---
     * Favorite_Logic.get / (parent.table,parent.id,user.id);
     */
    // -- 9_get 9_favorite_get
    static get = (url,favorite,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {favorite:favorite};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Favorite_Response_Field.PARAM_FAVORITE,Status_Type.OK,favorite,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_post 9_favorite_post
    static post = (url,favorite,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {favorite:favorite};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Favorite_Response_Field.PARAM_FAVORITE,Status_Type.OK,favorite,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_delete 9_favorite_delete
    static delete = (url,parent_table,parent_id,user_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const favorite = Favorite_Logic.get(parent_table,parent_id,user_id);
                    const form_data = {favorite:favorite};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_PARENT_TABLE,Status_Type.OK,parent_table,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_PARENT_ID,Status_Type.OK,parent_id,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_USER_ID,Status_Type.OK,user_id,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_user_search 9_favorite_user_search
    static user_search = (url,parent_table,user_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {parent_table:parent_table,user_id:user_id};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_PARENT_TABLE,Status_Type.OK,parent_table,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_USER_ID,Status_Type.OK,user_id,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
export {Favorite_Service};
