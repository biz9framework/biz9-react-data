// -- biz9
import {Log,Obj,Status_Type,Response_Field,Response_Logic} from "biz9-utility";
import {Review_Url} from "biz9-review";
import {Config} from "../../config";
import {Remote_Logic,Remote_Data} from "biz9-react-remote";
const async = require('async');
class Review_Service {
    // - 9_post
    static post = (review,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let form_data = {review:review,option:option};
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Review_Url.POST,form_data);
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
    // - 9_delete
    static delete = (parent_table,parent_id,review_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    let form_data = {parent_table:parent_table,parent_id:parent_id,review_id:review_id};
                    let service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Review_Url.DELETE,form_data);
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
export {Review_Data};
