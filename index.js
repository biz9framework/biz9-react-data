/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Blank
*/
const {Scriptz}=require("biz9-scriptz");
const {Log}=require("biz9-utility");
import {Config,Project_Table} from "./constant";
class Blank {
    //9_blank
    static blank = async (database,table) => {
        // -- blank --
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let data = {};
            async.series([
                async function(call) {
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_APP_ID,Status_Type.OK,database.data_config.APP_ID,{title:Config.TITLE}));
                    response.messages.push(Response_Logic.get_message(Data_Response_Field.PARAM_TABLE,Status_Type.OK,table,{title:Config.TITLE}));
                },
                async function(call){
                    const [biz_response,biz_data] = await get(database,table,items);
                    data = biz_data;
                    response = biz_response;
                },
                async function(call){
                    response = Response_Logic.get_status(response);
                },
            ]).then(result => {
                callback([response,data]);
            }).catch(err => {
                Log.error("Blank-Data",err);
            });
        });
    };
}
module.exports = {
    Blank
};
