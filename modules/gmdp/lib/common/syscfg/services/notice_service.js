// 字典model
var model = require('../../core/models/notice_model');
var utils = require('../../core/utils/app_utils');

/**
 * 获取公告列表
 * @param page
 * @param size
 * @param conditionMap
 * @param cb
 */
exports.getNoticeList = function(page, size, conditionMap, cb) {
    utils.pagingQuery4Eui(model.$, page, size, conditionMap, cb, 'notice_role');
};

/**
 * 新增公告
 * @param data
 * @param cb
 */
exports.saveNotice = function(data, cb) {
    // 实例模型，调用保存方法
    model.$(data).save(function(error){
        if(error) {
            cb(utils.returnMsg(false, '1000', '新增公告时出现异常。', null, error));
        }
        else {
            cb(utils.returnMsg(true, '0000', '新增公告成功。', null, null));
        }
    });
}

/**
 * 修改公告信息
 * @param id
 * @param data
 * @param cb
 */
exports.updateNotice = function(id, data, cb) {
    var conditions = {_id: id};
    var update = {$set: data};

    var options = {};
    model.$.update(conditions, update, options, function (error) {
        if(error) {
            cb(utils.returnMsg(false, '1002', '修改公告时出现异常。', null, error));
        }
        else {
            cb(utils.returnMsg(true, '0000', '修改公告成功。', null, null));
        }
    });
}

exports.getNewest = function(cb){

    var query = model.$.find({});

    query.where("notice_status","1");

    query.limit(1);

    query.sort({notice_time:-1});

    query.exec(function(err,rs){
        if(err){
            cb(utils.returnMsg(false, '1004', '查询信息时出现异常。', null, error));
        }else{
            cb(utils.returnMsg(true, '0000', '查询信息成功。', rs, null));
        }
    });
}


/**
 * 查询详情
 * @param id
 * @param fields
 * @param cb
 */
exports.getNoticeById = function(id, fields, cb) {
    var query = model.$.find({});
    query.where('_id', id);
    query.exec(function(err,rs){
        if(err){
            cb(utils.returnMsg(false, '1001', '查询详情出现异常。', null, err));
        }else{
            cb(utils.returnMsg(true, '0000', '查询详情成功。', rs, null));
        }
    });
};