//-env-test - start //
const APP_ID = "test-stage-april";
const URL = "http://localhost:1904";
const PORT_ID = "1904";
//-env-test - end //
const Config = {
    TITLE:'React-Data-Test',
    APP_ID:APP_ID,
    PORT_ID:PORT_ID,
    URL:URL,
    HAS_MONGO_DB:'true',
    MONGO_IP:"0.0.0.0",
    MONGO_USERNAME_PASSWORD:"",
    MONGO_PORT_ID:"27019",
    MONGO_SERVER_USER:"admin",
    MONGO_CONFIG_FILE_PATH:'/etc/mongod.conf',
    MONGO_SSH_KEY:"",
    REDIS_URL:"0.0.0.0",
    REDIS_PORT_ID:"27020"
}
class Title {
    static PRODUCT = 'Product';
}
class Project_Table {
    static BLANK='blank_biz';
    static CONTENT='content_biz';
    static FAQ='faq_biz';
    static BLOG_POST='blog_post_biz';
    static PRODUCT='product_biz';
    static TYPE='type_biz';
    static CUSTOM_FIELD='custom_field_biz';
    static CATEGORY='category_biz';
    static IMAGE_GALLERY='image_gallery_biz';
    static IMAGE='image_biz';
}
module.exports = {
    Config,
    Title,
    Project_Table
}
