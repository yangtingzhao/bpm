var model_org = require("../models/user_model");
var Promise = require("bluebird");

var mysql_pool_promise = require("../../../../lib/mysql_pool_athena");
var fs = require('fs');
var config = require('../../../../config');

var org_sync_data_from_Athena_url = config.org_sync_data_from_Athena_url;

exports.sync_data_from_Athena = function () {
    sync_data_from_Athena();
}

//sync_data_from_Athena()

async function sync_data_from_Athena() {
    await sync_grid_data(5);
    await sync_channel_data(6);
}


/**
 * 同步区县
 * @returns {bluebird}
 */

/*function update_country_data() {
    return new Promise(async (resolve, reject) => {
        let sql = "SELECT " +
            " TRIM(district_code) district_code, " +
            " TRIM(district_name) district_name, " +
            " TRIM(city_code) city_code,TRIM(city_name) city_name " +
            "FROM " +
            " hall_manager_info " +
            "WHERE " +
            " channel_id IS NOT NULL " +
            "AND grid_coding IS NOT NULL " +
            "AND district_code IS NOT NULL " +
            "GROUP BY " +
            " district_code";
        let condition = {};
        let result = await mysql_pool_promise.queryPromise(sql, condition);
        if (!result) {
            console.log("获取mysql区县数据总数失败");
        } else {



        }
    });
}*/

/**
 *  更新网格数据到工单系统
 * @returns {bluebird|exports|module.exports}
 */
function sync_grid_data(type) {
    return new Promise(async (resolve, reject) => {
        let sql = "SELECT " +
            " TRIM(grid_coding) area_code, " +
            " TRIM(grid_name) area_name, " +
            " TRIM(district_code) p_code,TRIM(district_name) p_name " +
            "FROM " +
            " hall_manager_info " +
            "WHERE " +
            " channel_id IS NOT NULL " +
            "AND grid_coding IS NOT NULL " +
            "AND district_code IS NOT NULL " +
            "GROUP BY " +
            " grid_coding  ";
        let condition = {};
        let result = await mysql_pool_promise.queryPromise(sql, condition);
        if (!result) {
            console.log("获取mysql网格数据总数失败");
        } else {
            await synchrodata(result, type);
            resolve();
            console.log("=================================网格数据处理结束==============================");

        }
    });
}

/**
 *  从雅典娜更新渠道数据到工单系统
 * @returns {bluebird|exports|module.exports}
 */
function sync_channel_data(type) {
    return new Promise(async (resolve, reject) => {
        let sql = "SELECT " +
            " TRIM(channel_id) area_code, " +
            " TRIM(channel_name) area_name, " +
            " TRIM(grid_coding) p_code,TRIM(grid_name) p_name " +
            "FROM " +
            " hall_manager_info " +
            "WHERE " +
            " channel_id IS NOT NULL " +
            "AND grid_coding IS NOT NULL " +
            "AND district_code IS NOT NULL " +
            "GROUP BY " +
            " channel_id  ";
        let condition = {};
        let result = await mysql_pool_promise.queryPromise(sql, condition);
        if (!result) {
            console.log("获取mysql渠道数据总数失败");
        } else {
            console.log(result);
            await synchrodata(result, type);
            resolve();
            console.log("=================================渠道数据处理结束==============================");
        }
    });
}

function synchrodata(result, type) {
    return new Promise((resolve, reject) => {
        let count = 0;
        for (let i = 0; i < result.length; i++) {
            //此处为最开始同步OA信息与雅典娜组织进行名字匹配正确
            // var porgname = result[i].areadesc.replace("(县级名)","").replace("县","").replace("市","").replace("特区","").replace("区","").replace("公司","").replace("自治","");
            // var orgname = new RegExp(porgname);
            // var parm = {"org_name":orgname,"level" : 4};

            let area_code = result[i].area_code;
            let p_code = result[i].p_code;
            model_org.$CommonCoreOrg.find({"company_code": area_code}, function (err, res) {
                //查找所属地州
                model_org.$CommonCoreOrg.find({"company_code": p_code}, function (err, resp) {
                    let org = {};
                    org.org_name = result[i].area_name;
                    org.org_fullname = result[i].area_name;
                    org.company_code = area_code;
                    if (type == 5) {
                        org.level = 5;
                        org.org_type = '网格';
                    } else if (type == 6) {
                        org.level = 6;
                        org.org_type = '渠道';
                    }

                    org.org_belong = '0';
                    org.midifytime = new Date();
                    org.org_code = area_code;
                    if (resp.length > 0) {
                        org.org_pid = resp[0]._id;
                    } else {
                        org.org_pid = "";
                    }
                    //存在则修改
                    if (res.length > 0) {
                        model_org.$CommonCoreOrg.update({"_id": res[0]._id}, {$set: org}, function (err, res) {
                            count++;
                            if (count == result.length) {
                                resolve();
                            }
                        })
                    } else {
                        let orgModel = new model_org.$CommonCoreOrg(org)
                        orgModel.save(function (err) {
                                count++;
                                if (count == result.length) {
                                    resolve();
                                }
                            }
                        );
                    }

                })

            })
        }
    })
}


function writeFile(file, result) {
    fs.writeFile(file, result, function (err) {
        if (err)
            console.log("fail " + err);
        else {
            console.log("写入文件ok");
            // fs.close();
        }
    })
}
