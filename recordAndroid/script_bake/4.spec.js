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

    it('tap: 574, 846', async function(){
        await driver.sendActions('tap', {x: 574, y: 846});
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

    it('tap: FA ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('tap: 安排会议 ( //*[@text="安排会议"] )', async function(){
        await driver.wait('//*[@text="安排会议"]', 30000).sendElementActions('tap');
    });

    it('tap: 请选择会议开始时间 ( //*[@text="请选择会议开始时间"] )', async function(){
        await driver.wait('//*[@text="请选择会议开始时间"]', 30000).sendElementActions('tap');
    });

    it('tap: 27 ( //*[@text="27"] )', async function(){
        await driver.wait('//*[@text="27"]', 30000).sendElementActions('tap');
    });

    it('tap: OK ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    it('tap: OK ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入详细地址 ( //*[@text="请输入详细地址"] )', async function(){
        await driver.wait('//*[@text="请输入详细地址"]', 30000).sendElementActions('tap');
    });

    it('tap: 点击输入 ( //*[@text="点击输入"] )', async function(){
        await driver.wait('//*[@text="点击输入"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入您的地址 ( //*[@text="请输入您的地址"] )', async function(){
        await driver.wait('//*[@text="请输入您的地址"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 东直门{ESCAPE}', async function(){
        await driver.sendKeys(_(`东直门{ESCAPE}`));
    });

    it('tap: 东直门枢纽站(公交站) ( //*[@text="东直门枢纽站(公交站)"] )', async function(){
        await driver.wait('//*[@text="东直门枢纽站(公交站)"]', 30000).sendElementActions('tap');
    });

    it('tap: 东直门枢纽站(公交站) ( //*[@text="东直门枢纽站(公交站)"] )', async function(){
        await driver.wait('//*[@text="东直门枢纽站(公交站)"]', 30000).sendElementActions('tap');
    });

    it('tap: 选填, 如: 13层1205室 ( //*[@text="选填, 如: 13层1205室"] )', async function(){
        await driver.wait('//*[@text="选填, 如: 13层1205室"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 丙门31号{ESCAPE}', async function(){
        await driver.sendKeys(_(`丙门31号{ESCAPE}`));
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('tap: 安排会议 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView', 30000).sendElementActions('tap');
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

