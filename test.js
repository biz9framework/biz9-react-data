/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Data - Test
*/
import {Log,Num,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import async from 'async';
import {Config,Project_Table} from "./constant";
import {Data_Service} from "./data";
/*
 * 9_define
 * -- DATA --
 *  - data_get
 *  - data_post
 *  - data_post_items
 *  - data_delete
 *  - data_search
 *  - data_delete_search
 *  - data_copy
 *
 */
//9_delete - 9_test_delete
test('data_delete', async () => {
    console.log('DELETE-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69ee2d5978cd999df60cc2bd';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.DELETE);
    [biz_response,biz_data] = await Data_Service.delete(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('DELETE-SUCCESS');
    console.log('DELETE-DONE');
}, 99999);


//9_post - 9_test_post
test('data_post', async () => {
    console.log('POST-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let parent = Data_Logic.get(table,0,{data:{title:Num.get_id()+"_title",sub_note:Num.get_id()+"_sub_note"}});
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST);
    [biz_response,biz_data] = await Data_Service.post(url,parent.table,parent.id,parent,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('POST-SUCCESS');
    console.log('POST-DONE');
}, 99999);

//9_get - 9_test_get
test('data_get', async () => {
    console.log('GET-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69ee2d5978cd999df60cc2bd';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.GET);
    [biz_response,biz_data] = await Data_Service.get(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('GET-SUCCESS');
    console.log('GET-DONE');
}, 99999);
//9_post_items - 9_test_post_items
test('data_post_items', async () => {
    console.log('POST-ITEMS-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let parents = Data_Logic.get(table,0,{count:3,data:{title:Num.get_id()+"_title",sub_note:Num.get_id()+"_sub_note"}});
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST_ITEMS);
    [biz_response,biz_data] = await Data_Service.post_items(url,parents,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('POST-ITEMS-SUCCESS');
    console.log('POST-ITEMS-DONE');
}, 99999);

//9_search - 9_test_search
test('data_search', async () => {
    console.log('SEARCH-START');
    let response={};
    let database = {};
    let data = {};
    let search = Data_Logic.get_search(Project_Table.PRODUCT,{},{},1,0);
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.SEARCH);
    [biz_response,biz_data] = await Data_Service.search(url,search,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('BLANK-SUCCESS');
    console.log('BLANK-DONE');
}, 99999);
//9_delete_search - 9_test_delete_search
test('data_delete_search', async () => {
    console.log('DELETE-SEARCH-START');
    let response={};
    let database = {};
    let data = {};
    let search = Data_Logic.get_search(Project_Table.PRODUCT,{},{},1,0);
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.DELETE_SEARCH);
    [biz_response,biz_data] = await Data_Service.delete_search(url,search,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('DELETE-SEARCH-SUCCESS');
    console.log('DELETE-SEARCH-DONE');
}, 99999);

//9_copy - 9_test_copy
test('data_copy', async () => {
    console.log('COPY-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69f117bffd2c4642efcaa8b8';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.COPY);
    [biz_response,biz_data] = await Data_Service.copy(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('COPY-SUCCESS');
    console.log('COPY-DONE');
}, 99999);

//9_blank - 9_test_blank
test('blank', async () => {
    console.log('BLANK-START');
    let response={};
    let database = {};
    let data = {};
    let table = Project_Table.PRODUCT;
    let parent = Data_Logic.get(table,0,{data:{title:Num.get_id()+"_title",sub_note:Num.get_id()+"_sub_note"}});
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST);
    [biz_response,biz_data] = await Data_Service.post(url,parent.table,parent.id,parent,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('BLANK-SUCCESS');
    console.log('BLANK-DONE');
}, 99999);


