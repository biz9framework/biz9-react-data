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
import {Cart_Service,Order_Service} from "./store";
import async from 'async';
class Test_More {
    //9_store_post_cart
    static store_post_cart = async () => {
        // -- NEW-USER-PRODUCT--
        let post_cart = {};
        let cart = {};
        let user = User_Logic.get_test_user();
        let product_1 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let sub_product_1 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let sub_product_2 = Store_Logic.get_test_product({title:'Product '+Str.get_id()});
        let products = [product_1,sub_product_1,sub_product_2];
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let data = {};
            async.series([
                async function(call){
                    // -- test-post--get-products --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST_ITEMS);
                    [biz_response,biz_data] = await Data_Service.post_items(url,products);
                    product_1 = Obj.find('title',product_1.title,biz_data);
                    sub_product_1 = Obj.find('title',sub_product_1.title,biz_data);
                    sub_product_2 = Obj.find('title',sub_product_2.title,biz_data);
                    console.log('product_1'+"--id= "+product_1.id + "--title="+product_1.title);
                    console.log('sub_product_1'+"--id= "+sub_product_1.id + "--title="+sub_product_1.title);
                    console.log('sub_product_2'+"--id= "+sub_product_2.id + "--title="+sub_product_2.title);
                    call();
                },
                async function(call){
                    // -- test-post--get-user --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST);
                    [biz_response,biz_data] = await Data_Service.post(url,user.table,user);
                    user = biz_data;
                    console.log('user'+"--id= "+user.id + "--email="+user.email);
                    console.log('user'+"--firstname= "+user.firstname + "--lastname="+user.lastname);
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
                    /*
                    Log.w('33_biz_data_cart_items',cart.cart_items[0]);
                    Log.w('33_biz_data_cart_items_count',cart.cart_items[0].cart_sub_items.length);
                    Log.w('33_biz_data_cart_number',cart.cart_number);
                    */
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART_POST);
                    const [biz_response,biz_data] = await Cart_Service.post(url,cart);
                    Log.w('99_biz_response',biz_response);
                    Log.w('99_biz_data',biz_data);
                    call();
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
                async function(call){
                    // -- post-cart --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART_POST);
                    const [biz_response,biz_data] = await Cart_Service.post(url,cart);
                    post_cart = biz_data;
                    call();
                },
                async function(call){
                    // -- get-cart --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART);
                    const [biz_response,biz_data] = await Cart_Service.get(url,post_cart.cart_number);
                    cart = biz_data;
                    Log.w('99_biz_response_get_cart',biz_response);
                    Log.w('99_biz_data_get_cart',biz_data);
                    Log.w('11_biz_data_cart_items',biz_data.cart_items);
                    Log.w('22_biz_data_cart_items',biz_data.cart_items[0]);
                    Log.w('33_biz_data_cart_sub_items',biz_data.cart_items[0].cart_sub_items);
                    Log.w('44_biz_data_cart_sub_items_count',biz_data.cart_items[0].cart_sub_items.length);
                    Log.w('55_biz_data_cart_sub_items_count',post_cart.cart_items[0].cart_sub_items.length);
                    Log.w('66_biz_datat_cart_number',cart.cart_number);
                    Log.w('77_biz_data_post_cart_number',post_cart.cart_number);
                    Log.w('88_biz_data_cart_number',biz_data.cart_number);
                    call();
                },
            ]).then(result => {
                callback([response,data]);
            }).catch(err => {
                Log.error("Store-Post-Cart",err);
            });
        });
    };
    //9_cart_delete
    static store_delete_cart = async () => {
        // -- cart-delete --
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let cart_number  = 'CA-16361';
            let data = {};
            async.series([
                async function(call){
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART_DELETE);
                    const [biz_response,biz_data] = await Cart_Service.delete(url,cart_number);
                    Log.w('99_biz_response',biz_response);
                    Log.w('99_biz_data',biz_data);
                    data = biz_data;
                    response = biz_response;
                   call();
                },
                async function(call){
                    response = Response_Logic.get_status(response);
                    call();
                },
            ]).then(result => {
                callback([response,data]);
            }).catch(err => {
                Log.error("Blank-Data",err);
            });
        });
    };

    //9_cart_get
    static store_get_cart = async () => {
        // -- cart-get --
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let cart_number = 'CA-10809';
            let data = {};
            async.series([
                async function(call){
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART);
                    const [biz_response,biz_data] = await Cart_Service.get(url,cart_number);
                    response = biz_response;
                    data = biz_data;
                    call();
                },
                async function(call){
                    response = Response_Logic.get_status(response);
                    call();
                },
            ]).then(result => {
                callback([response,data]);
            }).catch(err => {
                Log.error("Store-Get-Cart-Data",err);
            });
        });
    };
    //9_store_post_order
    static store_post_order = async () => {
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let cart_number = 'CA-69704';
            let cart = {};
            let post_order = {};
            let post_order_payment = {};
            let order = {};
            let data = {};
            async.series([
                async function(call){
                    // -- get-cart, get-post-order --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.CART);
                    [biz_response,biz_data] = await Cart_Service.get(url,cart_number);
                    cart = biz_data;
                    call();
                },
                async function(call){
                    // -- get-post-order, get-post-order-payments
                    post_order = Order_Logic.get(cart,{cart_code:'OR'});
                    post_order_payment = Order_Logic.get_order_payment(post_order.order_number,Store_Type.ORDER_PAYMENT_METHOD_TEST,Num.get_id());
                    Log.w('33_post_order',post_order);
                    Log.w('33_order_payment',post_order_payment);
                    call();
                },
                async function(call){
                    // -- post-order --
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.ORDER_POST);
                    Log.w('33_post_order_url',url);
                    [biz_response,biz_data] = await Order_Service.post(url,post_order,[post_order_payment]);
                    order = biz_data;
                    Log.w('88_get_post_order_biz_response',biz_response);
                    Log.w('88_get_post_order_biz_data',biz_data);
                    call();
                },
                async function(call){
                    //Log.w('111111',cart);
                }
                /*
                async function(call){
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Store_Url.POST_ORDER);
                    [biz_response,biz_data] = await Order_Service.post(url,user.table,user);
                    data = biz_data;
                    response = biz_response;
                    call();
                },
                async function(call){
                    response = Response_Logic.get_status(response);
                    call();
                },
                */
            ]).then(result => {
                //callback([response,data]);
            }).catch(err => {
                Log.error("Store-Post-Order-Test",err);
            });
        });
    };
       //9_blank
    static blank = async () => {
        // -- blank --
        return new Promise((callback) => {
            let response=Response_Logic.get();
            let data = {};
            async.series([
                async function(call){
                    const url = Remote_Logic.get_url(Config.APP_ID,Config.URL,Data_Url.POST);
                    [biz_response,biz_data] = await Data_Service.post(url,user.table,user);
                    data = biz_data;
                    response = biz_response;
                    call();
                },
                async function(call){
                    response = Response_Logic.get_status(response);
                    call();
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
