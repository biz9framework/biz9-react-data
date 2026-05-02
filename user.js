// -- biz9
import {Log,Str,Obj,Status_Type,Response_Field,Response_Logic} from "biz9-utility";
import {Data_Url,Data_Logic,Data_Response_Field} from "biz9-data-logic";
import {User_Url,User_Stat,User_Type,User_Response_Field} from "biz9-user";
import {Stat_Logic} from "biz9-stat";
import {Remote_Field,Remote,Remote_Logic} from "biz9-react-remote";
// --other
import {Config} from "./constant";
const async = require('async');
class User_Service {
    /* - 9_DEFINE -
    * -- METHODS --
    * login / (user_obj)
    * post / (post_obj)
    * register / (user_obj)
    * -- LOGIC --
    * let user_obj = Data_Logic.get(User_Table.USER,0);
    */
    // -- 9_login
    static login = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    // -- user-validate
                    const form_data = {user:user,option:option}
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.LOGIN,form_data);
                    const biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(User_Response_Field.PARAM_USER,Status_Type.OK,user,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_register
    static register = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    // -- user-validate
                    let form_user_data = {user:user,option:option}
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.REGISTER,form_user_data);
                    let biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_logout
    static logout = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {user:user,option:option}
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.LOGOUT,form_data);
                    const biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                },
                async function(call){
                    Storage.delete_storage_all();
                }
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // -- 9_post
    static post = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {user:user,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.POST,form_data);
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
export {User_Service};
