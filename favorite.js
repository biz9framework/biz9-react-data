// -- biz9
import {Log,Obj,Status_Type,Response_Logic} from "biz9-utility";
import {Favorite_Url,Favorite_Logic} from "biz9-favorite";
import {Config} from "../../config";
import {Remote_Logic,Remote_Data} from "biz9-react-remote";
const async = require('async');
class Favorite_Service {
    // -- define
    // --- post
    // --- get
    // --- user_search
    // - 9_post 9_favorite_post
    static post = (parent_table,parent_id,user_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let favorite = Favorite_Logic.get(parent_table,parent_id,user_id);
                    let form_data = {favorite:favorite};
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Favorite_Url.POST,form_data);
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
    // - 9_delete 9_favorite_delete
    static delete = (parent_table,parent_id,user_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let favorite = Favorite_Logic.get(parent_table,parent_id,user_id);
                    let form_data = {favorite:favorite};
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Favorite_Url.DELETE,form_data);
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
    //9_user_search 9_favorite_user_search
    static user_search = (parent_table,user_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let form_data = {parent_table:parent_table,user_id:user_id};
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Favorite_Url.USER_SEARCH,form_data);
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
export {Favorite_Data};
