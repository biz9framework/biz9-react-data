/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Data - Test
*/
import {Log,Num,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Favorite_Url,Favorite_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-favorite/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import {Store_Logic,Cart_Logic,Order_Logic,Store_Type} from "/home/think1/www/doqbox/biz9-framework/biz9-store/source";
import {User_Logic,User_Url} from "/home/think1/www/doqbox/biz9-framework/biz9-user/source";
import {Config,Project_Table,Data_Config} from "./constant";
import {Data_Service} from "./data";
import {Test_More} from "./test_more";
import {Favorite_Service} from "./favorite";
//
const async = require('async');
import series from 'async/series';

/*
 * - 9_DEFINE -
 * -- TESTS --
 * --- DATA ---
 * data_copy
 * data_delete
 * data_delete_search
 * data_get
 * data_post
 * data_post_items
 * data_search
 * --- FAVORITE ---
 * favorite_delete
 * favorite_post
 * favorite_user_search
 * --- USER ---
 * user_login //
 * user_post //
 * user_register //
 * --- STORE ---
 *  store_get_cart
 *  store_post_cart
 *  store_delete_cart
 *  store_get_order
 *  store_post_order
 *  store_delete_order
 * --- REVIEW ---
 *  review_delete //
 *  review_post //
 *  review_parent_search //
 */
//9_delete - 9_test_delete
test('data_delete', async () => {
    console.log('DELETE-START');
    let response={};
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69f356eb877ecbb2fbba06ef';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.DELETE);
    [biz_response,biz_data] = await Data_Service.delete(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('DELETE-SUCCESS');
    console.log('DELETE-DONE');
}, 99999);
//9_post - 9_test_post 9_data_post
test('data_post', async () => {
    console.log('POST-START');
    let response={};
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
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69f20dcf3e553abe771c212f';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.GET);
    const [biz_response,biz_data] = await Data_Service.get(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('GET-SUCCESS');
    console.log('GET-DONE');
}, 99999);
//9_post_items - 9_test_post_items
test('data_more_post_items', async () => {
    console.log('POST-ITEMS-START');
    let response={};
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
    let data = {};
    let table = Project_Table.PRODUCT;
    let id = '69f356eb877ecbb2fbba06ef';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.COPY);
    [biz_response,biz_data] = await Data_Service.copy(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('COPY-SUCCESS');
    console.log('COPY-DONE');
}, 99999);
//9_favorite_post - 9_test_favorite_post
test('favorite_post', async () => {
    console.log('FAVORITE-POST-START');
    let response={};
    let data = {};
    let parent_table = Project_Table.PRODUCT;
    let parent_id = '69f20dcf3e553abe771c2130';
    let user_id = '69f18a8d94953a568b894178';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Favorite_Url.POST);
    [biz_response,biz_data] = await Favorite_Service.post(url,parent_table,parent_id,user_id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('FAVORITE-POST-SUCCESS');
    console.log('FAVORITE-POST-DONE');
}, 99999);
//9_favorite_user_search - 9_test_user_search
test('favorite_user_search', async () => {
    console.log('FAVORITE-USER-SEARCH-START');
    let response={};
    let data = {};
    let parent_table = Project_Table.PRODUCT;
    let user_id = '69f117bffd2c4642efcaa912';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Favorite_Url.USER_SEARCH);
    [biz_response,biz_data] = await Favorite_Service.user_search(url,parent_table,user_id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('FAVORITE-USER-SEARCH-SUCCESS');
    console.log('FAVORITE-USER-SEARCH-DONE');
}, 99999);
//9_favorite_delete - 9_test_favorite_delete
test('favorite_delete', async () => {
    console.log('FAVORITE-DELETE-START');
    let response={};
    let data = {};
    let parent_table = Project_Table.PRODUCT;
    let parent_id = '69f117bffd2c4642efcaa8b9';
    let user_id = '69f117bffd2c4642efcaa912';
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Favorite_Url.POST);
    [biz_response,biz_data] = await Favorite_Service.delete(url,parent_table,parent_id,user_id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('FAVORITE-POST-SUCCESS');
    console.log('FAVORITE-POST-DONE');
}, 99999);
//9_store_cart_cart - 9_test_cart_cart
test('store_get_cart', async () => {
    console.log('GET-STORE-CART-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_get_cart();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('GET-STORE-CART-SUCCESS');
    console.log('GET-STORE-CART-DONE');
}, 99999);
//9_store_post_cart - 9_test_post_cart
test('store_post_cart', async () => {
    console.log('POST-STORE-CART-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_post_cart();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    Log.w('99_biz_data_cart_number',biz_data.cart_number);
    console.log('POST-STORE-CART-SUCCESS');
    console.log('POST-STORE-CART-DONE');
}, 99999);
//9_store_delete_cart - 9_test_delete_cart
test('store_delete_cart', async () => {
    console.log('DELETE-STORE-CART-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_delete_cart();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('DELETE-STORE-CART-SUCCESS');
    console.log('DELETE-STORE-CART-DONE');
}, 99999);
//9_store_order_post - 9_test_order_post
test('store_post_order', async () => {
    console.log('POST-STORE-ORDER-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_post_order();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    Log.w('99_biz_data_order_number',biz_data.order_number);
    console.log('POST-STORE-ORDER-SUCCESS');
    console.log('POST-STORE-ORDER-DONE');
}, 99999);
//9_store_order_delete - 9_test_order_delete
test('store_delete_order', async () => {
    console.log('DELETE-STORE-ORDER-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_delete_order();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('DELETE-STORE-ORDER-SUCCESS');
    console.log('DELETE-STORE-ORDER-DONE');
}, 99999);
//9_store_order_get - 9_test_order_get
test('store_get_order', async () => {
    console.log('GET-ORDER-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_get_order();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('GET-ORDER-SUCCESS');
    console.log('GET-ORDER-DONE');
}, 99999);
//9_store_search_order_get - 9_test_order_search
test('store_search_order', async () => {
    console.log('SEARCH-STORE-ORDER-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.store_search_order();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('SEARCH-STORE-ORDER-SUCCESS');
    console.log('SEARCH-STORE-ORDER-DONE');
}, 99999);
//9_review_post - 9_postt_review
test('review_post', async () => {
    console.log('REVIEW-POST-START');
    let response={};
    let data = {};
    let parent_table = Store_Table.PRODUCT;
    let user = Data_Logic.get(User_Table.USER,'69f356eb877ecbb2fbba0745');
    let parent = Data_Logic.get(Store_Table.PRODUCT,'69f356eb877ecbb2fbba06f2');
    let review = Review_Logic.get_test();
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Review_Url.POST);
    const [biz_response,biz_data] = await Review_Service.post(url,parent.table,parent.id,User_Table.USER,user.id,review);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('REVIEW-POST-SUCCESS');
    console.log('REVIEW-POST-DONE');
}, 99999);
//9_review_delete - 9_delete_review
test('review_delete', async () => {
    console.log('REVIEW-DELETE-START');
    let response={};
    let data = {};
    let parent_table = Store_Table.PRODUCT;
    let parent_id = '69f356eb877ecbb2fbba06f2';
    let review_id = "69f3853116612605a9ddd76b";
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Review_Url.DELETE);
    const [biz_response,biz_data] = await Review_Service.delete(url,parent_table,parent_id,review_id);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('REVIEW-DELETE-SUCCESS');
    console.log('REVIEW-DELETE-DONE');
}, 99999);
//9_review_parent_search - 9_review_search
test('review_parent_search', async () => {
    console.log('REVIEW-PARENT-SEARCH-START');
    let response={};
    let data = {};
    let parent_id = '69f356eb877ecbb2fbba06f2';
    let parent_table = Project_Table.PRODUCT;
    let user_table = Project_Table.USER;
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Review_Url.PARENT_SEARCH);
    const [biz_response,biz_data] = await Review_Service.delete(url,user_table,parent_table,parent_id,{},1,0);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('REVIEW-PARENT-SEARCH-SUCCESS');
    console.log('REVIEW-PARENT-SEARCH-DONE');
}, 99999);
//9_blank - 9_test_blank
test('blank', async () => {
    console.log('BLANK-START');
    let response={};
    let data = {};
    let table = Project_Table.PRODUCT;
    let parent = Data_Logic.get(table,0,{data:{title:Num.get_id()+"_title",sub_note:Num.get_id()+"_sub_note"}});
    let option = {};
    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST);
    const [biz_response,biz_data] = await Data_Service.get(url,table,id,option);
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('GET-SUCCESS');
    console.log('GET-DONE');
}, 99999);

//9_blank_2 - 9_test_blank_2
test('blank', async () => {
    async.series([
        async function(call){
            console.log('BLANK-START');
        },
        async function(call){
            [biz_response,biz_data] = await Data_Service.post(url,parent.table,parent.id,parent,option);
            Log.w('99_biz_response',biz_response);
            Log.w('99_biz_data',biz_data);
            console.log('BLANK-SUCCESS');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(x);
                }, 2000);
            });
        },
    ]).then(result => {
        console.log('BLANK-DONE');
        callback([response,data]);
    }).catch(err => {
        Log.error("Blank-Data",err);
    });
}, 99999);
//9_blank_3
test('blank_3', async () => {
    console.log('BLANK-START');
    let response={};
    let data = {};
    const [biz_response,biz_data] = await Test_More.blank();
    Log.w('99_biz_response',biz_response);
    Log.w('99_biz_data',biz_data);
    console.log('BLANK-SUCCESS');
    console.log('BLANK-DONE');
}, 99999);





