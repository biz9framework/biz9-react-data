// -- biz9
import {Log,Str,Obj,Status_Type,Response_Field,Response_Logic} from "biz9-utility";
import {Data_Url} from "biz9-data-logic";
import {User_Url,User_Stat,User_Type} from "biz9-user";
import {Stat_Logic} from "biz9-stat";
import {Config} from "../../config";
import {User,System} from "../../project";
import {Remote_Logic,Remote_Data} from "biz9-react-remote";
// -- other
const async = require('async');
class User_Service {
    // - 9_login
    static login = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    //user-validate
                    let form_data = {user:user,option:option}
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.LOGIN,form_data);
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
    // - 9_register
    static register = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    //user-validate
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
    // - 9_blank
    static blank = (table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {table:table,id:id,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.GET,form_data);
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
    // - 9_logout
    static logout = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let form_data = {user:user,option:option}
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.LOGOUT,form_data);
                    let biz_data = await Remote_Data.post(service_data);
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
    // - 9_post
    static post = (user,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {user:user,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,User_Url.POST,form_data);
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
}
export {User_Service};
