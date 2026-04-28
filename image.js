// -- biz9
import {Log,Obj,Status_Type,Response_Field,Response_Logic} from "biz9-utility";
import {Data_Url} from "biz9-data-logic";
import {Image_Url} from "biz9-image";
import {Config} from "../../config";
import {Remote_Logic,Remote_Data} from "biz9-react-remote";
const async = require('async');
class Image_Service {
    // - 9_post_image 9_image
    static post = (images,option) => {
        return new Promise((callback) => {
            let response = Response_Logic.get();
            let data = {};
            option = !Obj.check_is_empty(option) ? option : {};
            async.series([
                async function(call){
                    const form_data = {data:images,option:option};
                    const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Image_Url.POST,form_data);
                    let biz_data = await Remote_Data.post(service_data);
                    response = biz_data.response;
                    data = biz_data.data.images;
                },
                async function(call){
                    if(option.data_post && response.status == Status_Type.SUCCESS){
                        const form_data = {data:data,option:option};
                        const service_data = Remote_Logic.get_connect(Config.APP_ID,Config.URL,Data_Url.POST_ITEMS,form_data);
                        let biz_data = await Remote_Data.post(service_data);
                        response = biz_data.response;
                        data = biz_data.data;
                        response = Response_Logic.get_message(Response_Field.RESPONSE_RESULT,biz_data.response.status,biz_data.response.message);
                        response = Response_Logic.get_status(response);
                        data = biz_data.data;
                    }
                },
            ],
                function(error, result){
                    callback([response,data]);
                });
        });
    };
}
export {Image_Service};
