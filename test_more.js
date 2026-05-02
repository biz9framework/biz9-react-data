/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: Blank
*/
import {Log,Num,Str,Obj,Status_Type,Response_Field,Response_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-utility/source";
import {Data_Url,Data_Logic,Data_Response_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source";
import {Favorite_Url,Favorite_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-favorite/source";
import {Website_Table,Form_Field} from "/home/think1/www/doqbox/biz9-framework/biz9-website/source";
import {Remote_Field,Remote,Remote_Logic} from "/home/think1/www/doqbox/biz9-framework/biz9-react-remote/source";
import {Store_Logic,Cart_Logic,Order_Logic,Store_Type,Store_Url} from "/home/think1/www/doqbox/biz9-framework/biz9-store/source";
import {User_Logic,User_Url} from "/home/think1/www/doqbox/biz9-framework/biz9-user/source";
import {Config,Project_Table} from "./constant";
import {Data_Service} from "./data";
import {Cart_Service} from "./store";
import async from 'async';
class Test_More {
    //9_store_post_cart
    static store_post_cart = async () => {
        // -- NEW-USER-PRODUCT--
        let user = User_Logic.get_test_user();
        let product_1 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let sub_product_1 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let sub_product_2 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let post_products = [product_1,sub_product_1,sub_product_2];

        return new Promise((callback) => {
            let response=Response_Logic.get();
            let data = {};
            async.series([
                async function(call){
                    // -- test-get-products --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST_ITEMS);
                    [biz_response,biz_data] = await Data_Service.post_items(url,post_products);
                    product_1 = Obj.find('title',product_1.title,biz_data);
                    sub_product_1 = Obj.find('title',sub_product_1.title,biz_data);
                    sub_product_2 = Obj.find('title',sub_product_2.title,biz_data);
                    console.log('product_1'+"--id= "+product_1.id + "--title="+product_1.title);
                    console.log('sub_product_1'+"--id= "+sub_product_1.id + "--title="+sub_product_1.title);
                    console.log('sub_product_2'+"--id= "+sub_product_2.id + "--title="+sub_product_2.title);
                    call();
                },
                async function(call){
                    // -- test-cart-product-post --
                    cart = Cart_Logic.get(user.id,{cart_code:'CA'});
                    let cart_item_1 = Cart_Logic.get_cart_item(product_1.table,product_1.id,1,product_1.title,product_1.cost);
                    let cart_sub_1 = Cart_Logic.get_cart_sub_item(0,Store_Type.CART_SUB_TYPE_STANDARD,sub_product_1.table,sub_product_1.id,1,sub_product_1.title,sub_product_1.cost);
                    let cart_sub_2 = Cart_Logic.get_cart_sub_item(0,Store_Type.CART_SUB_TYPE_STANDARD,sub_product_2.table,sub_product_2.id,1,sub_product_2.title,sub_product_2.cost);
                    cart_item_1.cart_sub_items.push(cart_sub_1);
                    cart_item_1.cart_sub_items.push(cart_sub_2);
                    cart.cart_items.push(cart_item_1);
                    Log.w('33_biz_data_cart',cart);
                    /*
                    Log.w('33_biz_data_cart_items',cart.cart_items[0]);
                    Log.w('33_biz_data_cart_items_count',cart.cart_items[0].cart_sub_items.length);
                    Log.w('33_biz_data_cart_number',cart.cart_number);
                    */

                    console.log('1111111111bb');
                    console.log(Cart_Service);
                    console.log('ccccccc');
                    console.log(url);
                    console.log('ddddddd');
                    console.log(cart);
                    console.log('11111111cccc');
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART_POST);
                    const [biz_response,biz_data] = await Cart_Service.post(url,cart);
                    response = biz_response;
                    data = biz_data;
                    Log.w('99_biz_response',biz_response);
                    Log.w('99_biz_data',biz_data);
                    /*
                    Log.w('99_biz_data',biz_data);
                    Log.w('44a_biz_data_post_cart',post_cart);
                    Log.w('44b_biz_data_post_cart_items',post_cart.cart_items[0]);
                    Log.w('44c_biz_data_cart_sub_items_count',post_cart.cart_items[0].cart_sub_items.length);
                    Log.w('33_biz_data_cart_items_count',cart.cart_items[0].cart_sub_items.length);
                    Log.w('44_biz_data_post_cart_number',post_cart.cart_number);
                    Log.w('33_biz_data_cart_number',cart.cart_number);
                    */
                },
                /*
                async function(call){
                    // -- get-cart --
                    const [biz_response,biz_data] = await Cart_Data.get_cart(database,post_cart.cart.cart_number);
                    //Log.w('55_biz_response',biz_response);
                    Log.w('55_biz_data',biz_data);
                    Log.w('55_biz_data_cart_items',biz_data.cart_items);
                    Log.w('55_biz_data_cart_items',biz_data.cart_items[0]);
                    Log.w('55_biz_data_cart_sub_items',biz_data.cart_items[0].cart_sub_items);
                    Log.w('55_biz_data_cart_sub_items_count',biz_data.cart_items[0].cart_sub_items.length);
                    Log.w('44_biz_data_cart_sub_items_count',post_cart.cart_sub_items.length);
                    Log.w('33_biz_datat_cart_number',cart.cart_number);
                    Log.w('44_biz_data_post_cart_number',post_cart.cart.cart_number);
                    Log.w('55_biz_data_cart_number',biz_data.cart_number);
                },
                async function(call){
                    //user
                    const [biz_response,biz_data] = await Data.post(database,user.table,user);
                    user = biz_data;
                },
                async function(call){
                    // -- NEW-PRODUCT-POST-START --
                    //products
                    const [biz_response,biz_data] = await Data.post_items(database,post_products);
                    post_products = biz_data;
                    product_1 = post_products[0];
                    sub_product_1 = post_products[1];
                    sub_product_2 = post_products[2];
                    // -- NEW-PRODUCT-POST-END --
                },
                */
                async function(call){
                    console.log('aproduct_1_id = '+product_1.id + " --product_1_title-- "+ product_1.title);
                    console.log('bsub_roduct_1_id = '+sub_product_1.id + " -- sub_product_1_title-- "+ sub_product_1.title);
                    console.log('csub_roduct_2_id = '+sub_product_2.id + " -- sub_product_2_title-- "+ sub_product_2.title);
                },
            ]).then(result => {
                callback([response,data]);
            }).catch(err => {
                Log.error("Blank-Data",err);
            });
        });
    };

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
    Test_More
};
