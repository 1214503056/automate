var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
var appPath = '/Users/lucy/Desktop/zhulux_signed_aligned.apk';
var platformName = 'Android';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('tap: 请输入手机号 ( //*[@text="请输入手机号"] )', async function(){
        await driver.wait('//*[@text="请输入手机号"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 15101058801{ESCAPE}', async function(){
        await driver.sendKeys(_(`15101058801{ESCAPE}`));
    });

    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){
        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){
        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 123456{ESCAPE}', async function(){
        await driver.sendKeys(_(`123456{ESCAPE}`));
    });

    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){
        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){
        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 123456{ESCAPE}', async function(){
        await driver.sendKeys(_(`123456{ESCAPE}`));
    });

    it('tap: 登录 ( //*[@text="登录"] )', async function(){
        await driver.wait('//*[@text="登录"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('drag: 657, 776, 520, 1441, 0.69', async function(){
        await driver.sendActions('drag', {fromX: 657, fromY:776, toX:520, toY:1441, duration: 0.69});
    });

    it('drag: 929, 245, 386, 1847, 1.52', async function(){
        await driver.sendActions('drag', {fromX: 929, fromY:245, toX:386, toY:1847, duration: 1.52});
    });

    it('drag: 225, 222, 0, 2155, 2.06', async function(){
        await driver.sendActions('drag', {fromX: 225, fromY:222, toX:0, toY:2155, duration: 2.06});
    });

    it('tap: 一美一拍 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: 云帮派 ( //*[@text="云帮派"] )', async function(){
        await driver.wait('//*[@text="云帮派"]', 30000).sendElementActions('tap');
    });

    it('tap: 联系逐鹿客服 ( //*[@text="联系逐鹿客服"] )', async function(){
        await driver.wait('//*[@text="联系逐鹿客服"]', 30000).sendElementActions('tap');
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 一美一拍 ( //*[@text="一美一拍"] )', async function(){
        await driver.wait('//*[@text="一美一拍"]', 30000).sendElementActions('tap');
    });

    it('tap: 向项目FA直接咨询项目... ( //*[@text="向项目FA直接咨询项目情况"] )', async function(){
        await driver.wait('//*[@text="向项目FA直接咨询项目情况"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 你好，哈哈😄{ESCAPE}', async function(){
        await driver.sendKeys(_(`你好，哈哈😄{ESCAPE}`));
    });

    it('drag: 566, 1366, 1076, 747, 0.92', async function(){
        await driver.sendActions('drag', {fromX: 566, fromY:1366, toX:1076, toY:747, duration: 0.92});
    });

    it('drag: 677, 1530, 713, 1281, 0.76', async function(){
        await driver.sendActions('drag', {fromX: 677, fromY:1530, toX:713, toY:1281, duration: 0.76});
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 一美一拍 ( //*[@text="一美一拍"] )', async function(){
        await driver.wait('//*[@text="一美一拍"]', 30000).sendElementActions('tap');
    });

    it('tap: 向项目FA直接咨询项目... ( //*[@text="向项目FA直接咨询项目情况"] )', async function(){
        await driver.wait('//*[@text="向项目FA直接咨询项目情况"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 哈哈{ESCAPE}', async function(){
        await driver.sendKeys(_(`哈哈{ESCAPE}`));
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: 448, 242', async function(){
        await driver.sendActions('tap', {x: 448, y: 242});
    });

    it('tap: 1214503056-00000000图... ( //*[@text="1214503056-00000000图腾柱好"] )', async function(){
        await driver.wait('//*[@text="1214503056-00000000图腾柱好"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 哈哈{ESCAPE}', async function(){
        await driver.sendKeys(_(`哈哈{ESCAPE}`));
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: Allow ( //*[@resource-id="com.android.packageinstaller:id/permission_allow_button"] )', async function(){
        await driver.wait('//*[@resource-id="com.android.packageinstaller:id/permission_allow_button"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: 一美一拍 ( //*[@text="一美一拍"] )', async function(){
        await driver.wait('//*[@text="一美一拍"]', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 1 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 1 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 天使/种子轮、PreA/A轮... ( //*[@text="天使/种子轮、PreA/A轮、B轮、C轮"] )', async function(){
        await driver.wait('//*[@text="天使/种子轮、PreA/A轮、B轮、C轮"]', 30000).sendElementActions('tap');
    });

    it('tap: C轮 ( //*[@text="C轮"] )', async function(){
        await driver.wait('//*[@text="C轮"]', 30000).sendElementActions('tap');
    });

    it('tap: D轮及以上 ( //*[@text="D轮及以上"] )', async function(){
        await driver.wait('//*[@text="D轮及以上"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap: 社交网络、硬件、电子... ( //*[@text="社交网络、硬件、电子商务、汽车交通、本地生活、文化娱乐、房产服务、广告营销、医疗健康、体育运动、企业服务"] )', async function(){
        await driver.wait('//*[@text="社交网络、硬件、电子商务、汽车交通、本地生活、文化娱乐、房产服务、广告营销、医疗健康、体育运动、企业服务"]', 30000).sendElementActions('tap');
    });

    it('tap: 本地生活 ( //*[@text="本地生活"] )', async function(){
        await driver.wait('//*[@text="本地生活"]', 30000).sendElementActions('tap');
    });

    it('tap: 汽车交通 ( //*[@text="汽车交通"] )', async function(){
        await driver.wait('//*[@text="汽车交通"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('drag: 782, 1549, 841, 806, 1.20', async function(){
        await driver.sendActions('drag', {fromX: 782, fromY:1549, toX:841, toY:806, duration: 1.20});
    });

    it('tap: 人民币、美元 ( //*[@text="人民币、美元"] )', async function(){
        await driver.wait('//*[@text="人民币、美元"]', 30000).sendElementActions('tap');
    });

    it('tap: 美元 ( //*[@text="美元"] )', async function(){
        await driver.wait('//*[@text="美元"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap: 0 一 0万 ( //*[@text="0 一 0万"] )', async function(){
        await driver.wait('//*[@text="0 一 0万"]', 30000).sendElementActions('tap');
    });

    it('tap: 454, 1723', async function(){
        await driver.sendActions('tap', {x: 454, y: 1723});
    });

    it('tap: 500 万 ( //*[@text="500 万"] )', async function(){
        await driver.wait('//*[@text="500 万"]', 30000).sendElementActions('tap');
    });

    it('tap: 0 万 ( //*[@text="0 万"] )', async function(){
        await driver.wait('//*[@text="0 万"]', 30000).sendElementActions('tap');
    });

    it('tap: 1000 万 ( //*[@text="1000 万"] )', async function(){
        await driver.wait('//*[@text="1000 万"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap: 北京、上海、广州、深... ( //*[@text="北京、上海、广州、深圳、杭州"] )', async function(){
        await driver.wait('//*[@text="北京、上海、广州、深圳、杭州"]', 30000).sendElementActions('tap');
    });

    it('tap: 杭州 ( //*[@text="杭州"] )', async function(){
        await driver.wait('//*[@text="杭州"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2] )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]', 30000).sendElementActions('tap');
    });

    it('tap: 问题反馈 ( //*[@text="问题反馈"] )', async function(){
        await driver.wait('//*[@text="问题反馈"]', 30000).sendElementActions('tap');
    });

    it('tap: 感谢使用逐鹿X，任何问... ( //*[@text="感谢使用逐鹿X，任何问题和建议都请及时告诉我们，我们十分重视你的意见。"] )', async function(){
        await driver.wait('//*[@text="感谢使用逐鹿X，任何问题和建议都请及时告诉我们，我们十分重视你的意见。"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 反馈一个问题{ESCAPE}', async function(){
        await driver.sendKeys(_(`反馈一个问题{ESCAPE}`));
    });

    it('tap: 发送反馈 ( //*[@text="发送反馈"] )', async function(){
        await driver.wait('//*[@text="发送反馈"]', 30000).sendElementActions('tap');
    });

    it('tap: 去评分 ( //*[@text="去评分"] )', async function(){
        await driver.wait('//*[@text="去评分"]', 30000).sendElementActions('tap');
    });

    it('tap: OK ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    it('tap: 关于我们 ( //*[@text="关于我们"] )', async function(){
        await driver.wait('//*[@text="关于我们"]', 30000).sendElementActions('tap');
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 退出登录 ( //*[@text="退出登录"] )', async function(){
        await driver.wait('//*[@text="退出登录"]', 30000).sendElementActions('tap');
    });

    it('tap: 退出登录 ( //*[@text="退出登录"] )', async function(){
        await driver.wait('//*[@text="退出登录"]', 30000).sendElementActions('tap');
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var config = require(rootPath + '/config.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var testVars = config.vars;

    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    var arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    arrDeviceList.forEach(function(device){
        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);

        if(doScreenshot){
            mkdirs(path.dirname(screenshotPath + '/' + caseName));
        }

        describe(caseName, function(){

            var stepId = 1;

            this.timeout(600000);
            this.slow(1000);

            before(function(){
                var self = this;
                var driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                self.driver = driver.session({
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                return self.driver;
            });

            module.exports();

            afterEach(function(){
                if(doScreenshot){
                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){
                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');
                    }) + '_' + (stepId++);
                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){
                        fs.writeFileSync(filepath + '.json', code);
                    }).catch(function(){});
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    var rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function getEnvList(){
    var strEnvList = process.env.devices;
    if(strEnvList){
        return strEnvList.split(/\s*,\s*/).map(function(udid){
            return {udid: udid};
        });
    }
}

function getDeviceList(platformName){
    var arrDeviceList = [];
    var strText, match;
    if(platformName === 'Android')
    {
        // for android
        strText = cp.execSync('adb devices').toString();
        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){
            arrDeviceList.push({
                udid: deviceName
            });
        });
    }
    else{
        // ios real device
        strText = cp.execSync('idevice_id -l').toString();
        strText.replace(/(.+)\r?\n/g, function(all, udid){
            var deviceName = cp.execSync('idevice_id -d '+udid).toString();
            deviceName = deviceName.replace(/\r?\n/g, '');
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
        // ios simulator
        strText = cp.execSync('xcrun simctl list devices').toString();
        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
    }
    return arrDeviceList;
}

