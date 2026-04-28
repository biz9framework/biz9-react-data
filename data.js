// -- biz9
import {Log,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import async from 'async';
class Data_Service {
    // - 9_get
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
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_DATA,Status_Type.OK,post_data));
                    call();
                },
                async function(call){
                    const form_data = {table:table,id:id,data:post_data,option:option};
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
            let image_gallerys = [];
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
                },
                async function(call){
                    let form_data = {search:search,option:option};
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
    // - 9_copy
    static copy = (url,table,id,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            let parent_image_gallerys = [];
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.COPY,form_data);
                    let biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
                    call();
                },
                //copy image_gallerys
                async function(call){
                    let search_image_gallery = Data_Logic.get_search(Website_Table.IMAGE_GALLERY,{parent_id:id},{},1,0);
                    const form_data = {search:search_image_gallery};
                    const service_data_image_gallery = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.SEARCH,form_data);
                    let biz_data_image_gallery = await Remote_Data.post(service_data_image_gallery);
                    parent_image_gallerys = biz_data_image_gallery.data.items;
                    response.messages.push(Response_Logic.get_message(Response_Field.RESPONSE_RESULT,biz_data_image_gallery.response.status,biz_data_image_gallery.response));
                    call();
                },
                //post copy_image_gallerys
                async function(call){
                    if(parent_image_gallerys.length> 0){
                        let new_image_gallerys = [];
                        for(const src_image_gallery of parent_image_gallerys){
                            let copy_image_gallery = Data_Logic.copy(src_image_gallery.table,src_image_gallery);
                            copy_image_gallery.parent_table = data.table;
                            copy_image_gallery.parent_id = data.id;
                            new_image_gallerys.push(copy_image_gallery);
                        }
                        const form_data_copy_image_gallerys = {data:new_image_gallerys};
                        const service_data_copy_image_gallerys = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.POST_ITEMS,form_data_copy_image_gallerys);
                        let biz_data_copy_image_gallerys = await Remote_Data.post(service_data_copy_image_gallerys);
                    }
                    call();
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
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_URL,Status_Type.OK,url));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_ID,Status_Type.OK,id));
                },
                async function(call){
                    const form_data = {table:table,id:id,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.GET,form_data);
                    let biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data;
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
