/**
 * Created by zhaojing on 2016/5/03.
 */
// 引入mongoose工具类
var mongoUtils  = require('../../core/mongodb/mongoose_utils');

var mongoose = mongoUtils.init();
mongoose.set("debug",true)
var Schema = mongoose.Schema;

//构造系统公告Schema对象
var commonNoticeSchema = new Schema(
    {
        notice_title : String,// 公告标题
        notice_role : {type: Schema.Types.ObjectId,ref: 'CommonCoreRole'},//公告所属角色
        notice_system : {type: Schema.Types.ObjectId},//公告所属系统
        notice_status : Number,// 公告状态
        notice_info : String,// 公告内容
        notice_time : Date,//公告发布时间
        notice_author : String//公告发布人
    },
    {collection: "common_notice_info"}// mongodb集合名
);

// 公告model
exports.$ = mongoose.model('CommonCoreNotice', commonNoticeSchema);