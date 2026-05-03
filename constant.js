const Config = {
    TITLE:'BiZ9-React-Data',
    APP_ID:"test-stage-april",
    PORT_ID: "1904",
    URL:"http://localhost:1904",
}
const Data_Config = {
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
module.exports = {
    Config,
    Data_Config,
    Title,
}
