// -- biz9
import {Log,Obj,Status_Type,Response_Field,Response_Logic} from "biz9-utility";
import {Review_Url} from "biz9-review";
import {Config} from "../../config";
import {Remote_Logic,Remote_Data} from "biz9-react-remote";
const async = require('async');
class Review_Service {
    /* - 9_DEFINE -
     * -- METHODS --
     * post / (database,parent_table,parent_id,user_table,user_id,post_review,option)
     * parent_search / (database,user_table,parent_table,parent_id,sort_by,page_current,page_size)
     * delete / (database,parent_table,parent_id,review_id)
     * cacul;ate / (database,parent_table,parent_id)
    */
    // - 9_post_review 9_review_post
    static post = (url,parent_table,parent_id,user_table,user_id,post_review,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {
                        parent_table:parent_table,
                        parent_id:parent_id,
                        user_table:user_table,
                        user_id:user_id,
                        post_review:post_review,
                        option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                 async function(call) {
                    // -- respopnse-param --
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_APP_ID,Status_Type.OK,database.data_config.APP_ID,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_PARENT_ID,Status_Type.OK,parent_id,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_USER_ID,Status_Type.OK,user_id,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_PARENT_TABLE,Status_Type.OK,parent_table,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Review_Response_Field.PARAM_REVIEW,Status_Type.OK,post_review,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_OPTION,Status_Type.OK,option,{title:Config.TITLE}));
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
    // - 9_delete
    static delete = (url,parent_table,parent_id,review_id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {parent_table:parent_table,parent_id:parent_id,review_id:review_id,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };


    // - 9_blank
    static blank = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {table:table,id:id,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id,{title:Config.TITLE}));
                    call();
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
export {Review_Data};
