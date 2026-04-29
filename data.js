// -- biz9
import {Log,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import async from 'async';
class Data_Service {
    /* - 9_define
     *  -- copy
     *  -- delete
     *  -- delete_search
     *  -- get
     *  -- post
     *  -- post_items
     *  -- search
    */
    static get = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                    call();
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
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
    // - 9_post
    static post = (url,table,id,post_data,option) => {
       return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {delete_page_cache:false};
            async.series([
               async function(call){
                    const form_data = {table:table,id:id,data:post_data,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    Log.w('rrrrr',data);
                    Log.w('cool',response);
                    /*

                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_DATA,Status_Type.OK,post_data));
                    */
                    call();

                },

            ],
                function(error, result){
                    //callback([response,data]);
                });
        });
    };
    // - 9_post_items
    static post_items = (url,items,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_DATA,Status_Type.OK,items));
                    call();
                },
                async function(call){
                    const form_data = {data:items,option:option};
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
    // - 9_delete
    static delete = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = Data_Logic.get(table,id);;
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                    call();
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
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
    // - 9_search
    static search = (url,search,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_SEARCH,Status_Type.OK,search));
                    call();
                },
                async function(call){
                    let form_data = {search:search,option:option};
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
    // - 9_delete_search
    static delete_search = (url,search,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_SEARCH,Status_Type.OK,search));
                    call();
                },
                async function(call){
                    let form_data = {search:search,option:option};
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
    // - 9_copy
    static copy = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                    call();
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
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
    // - 9_blank
    static blank = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
                    const [biz_response,biz_data] = await Remote.post(url,form_data);
                    response = biz_response;
                    data = biz_data;
                }
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
export {
    Data_Service
}
