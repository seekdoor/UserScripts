// ==UserScript==
// @name         Pagetual
// @name:zh-CN   东方永页机
// @name:zh-TW   東方永頁機
// @name:ja      東方永頁機
// @name:ru      Пейджетуал
// @name:de      Pagetual
// @name:es      Pagetual
// @name:fr      Pagetual
// @name:it      Pagetual
// @name:ko      東方永頁機
// @namespace    hoothin
// @version      1.9.19
// @description  Perpetual pages - Most powerful Auto Pager script. Auto loading next paginated web pages and inserting into current page.
// @description:zh-CN  自动翻页脚本 - 自动加载并拼接下一分页内容，无需规则驱动支持任意网页
// @description:zh-TW  自動翻頁脚本 - 自動加載並拼接下一分頁內容，無需規則驅動支持任意網頁
// @description:ja     Webページを自動で読み込み継ぎ足し表示を行うブラウザ拡張です
// @description:ru     Просто автоматически загрузите следующую страницу
// @description:de     Laden Sie einfach automatisch die nächste Seite
// @description:es     Carga automática de páginas web paginadas
// @description:fr     Chargement automatique des pages Web paginées
// @description:it     Caricamento automatico di pagine Web impaginate
// @description:ko     다음 페이지를 자동으로 로드하세요
// @author       hoothin
// @match        *://*/*
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAD3VU33VU32VEz8U073VU32VU33VU32VUz0Uk/3VE32VU32VUz2VU32VU32VU32VU33VU33U0z2VU34Wkv3VE32VUz/mpj/nJj2VUz2VU32VE33VEz2VU32VU32VUz3VE32VEz3VE3/mZf2Vkz2VU3/mpilFFolAAAAJXRSTlMA3Lp/GvTBT5YQLuawZ/DOyZwlPQeKc21N04+FX1bqpm9DNoB4T68ePwAAAitJREFUWMPt1tuasiAUBuCFCG5Rs3QybTPV1/1f4v/3PDkyIojn8x5qBrI+ltAfh32/yysmBKvyXb+njb6bDL9kzTd5SzjDAsYT8nFoGSxYe6BVqoNDp2jFDit25BRgVUAODB4YWcETWVTwVNGiGN5iWtBgg4YMCpsoI38dNunmmWyxUTvbPwwbsYR0fIzZLQ0pTG8eieRmBLMmpdH9uimQEf6TNRnXXKLZHixpJtywLzOgMHtFCqdM64DahHRnOE1dsrekm9wr2WtLcAlpdHwcp1pAJySXYnERclzp4+v19jXdmcTvQUJtz+ZaI4i05/V/UGYrCxbaAsOYoNfIKEQxpqQuzCgJJJ/3f42O8ywEZuMVWi/8hODxGj3GW2b0udkbGULLDOjimAG0S3fLGlBnXQM9irG1CiQdVQi0dqQsOSDlyEEz7Vy9OxxfR71VCXsSB23jMrKJYZXSjw57sqgLn5Z0wolsOCz0RyJkyeYjgz7pwwVq20eboZwtVUl2EnN5gJ50dQZFdryATvABRTr/tJXkUMdaAK5pwtCapwtFLskguwuyMh/Sd9WChQ4sIvIUYSk3PYqQvCQlOC04IfN7PkdjOyRKWhdKXMmiAFt9i3sJ5jxoRuR0vqAghxxwHuqfQE5OHGDKOrwEnqs1DgAZ2e4Eev1d45TN7JfhrQLKgfwMFYAsvp33dXII073aVQLI2gN5S58lfmGnKKFtah7nkgnBZB7zlP7Y/QNiTM6sYNzawwAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.addStyle
// @grant        GM.openInTab
// @grant        GM.deleteValue
// @grant        GM.info
// @downloadURL  https://greasyfork.org/scripts/438684-pagetual/code/Pagetual.user.js
// @updateURL    https://greasyfork.org/scripts/438684-pagetual/code/Pagetual.user.js
// @supportURL   https://github.com/hoothin/UserScripts/issues
// @connect      wedata.net
// @connect      githubusercontent.com
// @run-at       document-idle
// @exclude      http://www.toodledo.com/tasks/*
// @exclude      http*://maps.google.com*/*
// @exclude      *://www.google.*/_/chrome/newtab*
// @exclude      *://mega.*/*
// @exclude      *://*.mega.*/*
// @exclude      *://*.youku.com/v_*
// @exclude      *://*pan.baidu.com
// @exclude      *://*.iqiyi.com/v_*
// @exclude      *://*.iqiyi.com/w_*
// @exclude      *://*.iqiyi.com/a_*
// @exclude      *://*.le.com/ptv/vplay/*
// @exclude      *://v.qq.com/x/cover/*
// @exclude      *://v.qq.com/x/page/*
// @exclude      *://v.qq.com/tv/*
// @exclude      *://*.tudou.com/listplay/*
// @exclude      *://*.tudou.com/albumplay/*
// @exclude      *://*.tudou.com/programs/view/*
// @exclude      *://*.mgtv.com/b/*
// @exclude      *://film.sohu.com/album/*
// @exclude      *://tv.sohu.com/v/*
// @exclude      *://*.bilibili.com/video/*
// @exclude      *://*.bilibili.com/bangumi/play/*
// @exclude      *://*.baofeng.com/play/*
// @exclude      *://vip.pptv.com/show/*
// @exclude      *://v.pptv.com/show/*
// @exclude      *://www.le.com/ptv/vplay/*
// @exclude      *://www.wasu.cn/Play/show/*
// @exclude      *://m.v.qq.com/*
// @exclude      *://m.iqiyi.com/*
// @exclude      *://m.youku.com/alipay_video/*
// @exclude      *://m.mgtv.com/b/*
// @exclude      *://m.tv.sohu.com/v/*
// @exclude      *://m.film.sohu.com/album/*
// @exclude      *://m.le.com/ptv/vplay/*
// @exclude      *://m.pptv.com/show/*
// @exclude      *://m.acfun.cn/v/*
// @exclude      *://m.bilibili.com/video/*
// @exclude      *://m.bilibili.com/anime/*
// @exclude      *://m.bilibili.com/bangumi/play/*
// @exclude      *://m.wasu.cn/Play/show/*
// @exclude      *://www.youtube.com
// @exclude      *://www.youtube.com/
// @exclude      *://www.youtube.com/watch*
// @exclude      *://baike.baidu.com/*
// @exclude      *://*.instagram.com/*
// @exclude      *://order.jd.com/*
// @exclude      *://pagetual.hoothin.com/*
// @exclude      *://hoothin.github.io/PagetualGuide/*
// @exclude      *://wenku.baidu.com/view/*
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    if (window.name === 'pagetual-iframe' || (window.frameElement && window.frameElement.name === 'pagetual-iframe')) {
        var domloaded = function (){
            window.scroll(window.scrollX, 999999);
            window.parent.postMessage('pagetual-iframe:DOMLoaded', '*');
        };
        if(window.opera){
            document.addEventListener('DOMContentLoaded', domloaded, false);
        } else {
            domloaded();
        }
        return;
    }

    if(window.top != window.self){
        try{
            if (top.location.hostname != window.location.hostname || window.top != window.parent) {
                return;
            }
        }catch(e){
            return;
        }
    }

    const lang = navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
    let config={};
    switch (lang){
        case "zh-CN":
        case "zh-SG":
            config={
                enableDebug:"调试模式，输出信息至控制台",
                disable:"暂时禁用",
                disableSite:"切换禁用状态",
                disableSiteTips:"已在此站禁用",
                enableSiteTips:"已在此站启用",
                enable:"启用翻页",
                toTop:"回到顶部",
                toBottom:"前往页尾",
                current:"当前页",
                forceIframe:"强制拼接",
                cancelForceIframe:"取消强制拼接",
                configure:"打开配置页",
                firstUpdate:"点击此处初始化规则",
                update:"更新规则",
                click2update:"点击立即更新规则",
                loadNow:"立即翻页",
                loadConfirm:"要翻几页？（0为不间断）",
                noNext:"没有找到下一页，请新建规则",
                passSec:"更新于 #t# 秒前",
                passMin:"更新于 #t# 分钟前",
                passHour:"更新于 #t# 小时前",
                passDay:"更新于 #t# 天前",
                cantDel:"无法删除内置规则",
                confirmDel:"是否确认要删除此规则？",
                updateSucc:"更新成功",
                beginUpdate:"正在更新，请稍候",
                customUrls:"导入规则url，一行一条，AutoPagerize 格式规则需要以\"0|\"开头",
                customRules:"输入【东方永页机】格式的自定义规则",
                save:"保存设置",
                loadingText:"少女祈祷中...",
                opacity:"分页隔条不透明值",
                hideBar:"隐藏分页隔条",
                dbClick2Stop:"空白处双击暂停翻页",
                sortTitle:"排序在下次更新规则后生效",
                autoRun:"自动启用，否则为白名单模式",
                inputPageNum:"输入页码跳转",
                enableHistory:"翻页后写入历史记录",
                initRun:"打开页面后立即尝试翻页，否则滚动至页尾再翻页",
                preload:"翻页前预读下一页，加速浏览",
                click2ImportRule:"点击下方添加特殊规则库，添加后再行更新：",
                forceAllBody:"是否拼接整个页面？",
                openInNewTab:"使拼接页面的内容在新页面打开",
                importSucc:"导入成功",
                editCurrent:"自定义此站规则",
                editBlacklist:"编辑黑名单网址，一行一条，支持? *通配符",
                upBtnImg:"回到页首图标",
                downBtnImg:"前往页尾图标",
                dbClick2StopCtrl:"Ctrl 键",
                dbClick2StopAlt:"Alt 键",
                dbClick2StopShift:"Shift 键",
                dbClick2StopMeta:"Meta 键",
                dbClick2StopKey:"快捷键"
            };
            break;
        case "zh-TW":
        case "zh-HK":
            config={
                enableDebug:"調試模式，輸出信息至控制台",
                disable:"暫時禁用",
                disableSite:"切換禁用狀態",
                disableSiteTips:"已在此站禁用",
                enableSiteTips:"已在此站啟用",
                enable:"啟用翻頁",
                toTop:"回到頂部",
                toBottom:"前往頁尾",
                current:"當前頁",
                forceIframe:"強制拼接",
                cancelForceIframe:"取消强制拼接",
                configure:"打開配置頁",
                firstUpdate:"點擊此處初始化規則",
                update:"更新規則",
                click2update:"點擊立即更新規則",
                loadNow:"立即翻頁",
                loadConfirm:"要翻几頁？（0為不間斷）",
                noNext:"沒有找到下一頁，請新建規則",
                passSec:"更新于 #t# 秒前",
                passMin:"更新于 #t# 分鐘前",
                passHour:"更新于 #t# 小時前",
                passDay:"更新于 #t# 天前",
                cantDel:"無法刪除内置規則",
                confirmDel:"是否確認要刪除此規則？",
                updateSucc:"更新成功",
                beginUpdate:"正在更新，請稍候",
                customUrls:"導入規則url，一行一條，AutoPagerize 格式規則需要以\"0|\"開頭",
                customRules:"輸入【東方永頁機】格式的自定義規則",
                save:"存儲設置",
                loadingText:"少女祈禱中...",
                opacity:"分頁隔條不透明值",
                hideBar:"隱藏分頁隔條",
                dbClick2Stop:"空白處雙擊暫停翻頁",
                sortTitle:"排序在下次更新規則後生效",
                autoRun:"自動啓用，否則為白名單模式",
                inputPageNum:"輸入頁碼跳轉",
                enableHistory:"翻頁后寫入歷史記錄",
                initRun:"打開頁面后立即嘗試翻頁，否則滾動至頁尾再翻頁",
                preload:"翻頁前預讀下一頁，加速瀏覽",
                click2ImportRule:"點擊下方添加特殊規則庫，添加後再行更新：",
                forceAllBody:"是否拼接整個頁面？",
                openInNewTab:"使拼接頁面的内容在新頁面打開",
                importSucc:"導入成功",
                editCurrent:"自定義此站規則",
                editBlacklist:"編輯黑名單網址，一行一條，支持? *通配符",
                upBtnImg:"回到頁首圖標",
                downBtnImg:"前往頁尾圖標",
                dbClick2StopCtrl:"Ctrl 鍵",
                dbClick2StopAlt:"Alt 鍵",
                dbClick2StopShift:"Shift 鍵",
                dbClick2StopMeta:"Meta 鍵",
                dbClick2StopKey:"快捷鍵"
            };
            break;
        case "ja":
            config = {
                enableDebug:"デバッグモード",
                disable: "一時的に無効にする",
                disableSite:"無効状態の切り替え",
                disableSiteTips:"このサイトで既に無効になっています",
                enableSiteTips:"このサイトで既に有効になっています",
                enable: "ページめくりを有効にする",
                toTop: "トップに戻る",
                toBottom: "ページの下部に移動",
                current: "現在のページ",
                forceIframe: "強制ステッチ",
                cancelForceIframe: "強制ステッチをキャンセル",
                configure: "設定ページを開く",
                firstUpdate:"ここをクリックしてルールを初期化します",
                update: "更新ルール",
                click2update:"今すぐルールを更新してください",
                loadNow:"今すぐページをめくる",
                loadConfirm:"数ページめくりたいですか？（0は途切れない）",
                noNext:"次のページが見つかりません、新しいルールを作成してください",
                passSec: "＃t＃秒前に更新",
                passMin: "＃t＃分前に更新",
                passHour: "＃t＃時間前に更新",
                passDay: "＃t＃日前に更新",
                cantDel: "組み込みルールを削除できません",
                confirmDel: "このルールを削除してもよろしいですか？",
                updateSucc: "更新に成功しました",
                beginUpdate: "更新中、お待ちください",
                customUrls: "インポートルールのURL、1行に1つ、AutoPagerizeフォーマットルールは\"0|\"で始まる必要があります",
                customRules: "【東方永頁機】の形式でカスタムルールを入力してください",
                save: "設定を保存",
                loadingText: "少女祈祷中...",
                opacity:"ページネーションバーの不透明値",
                hideBar:"ページ区切り文字を非表示にします",
                dbClick2Stop:"空白部分をダブルクリックしてページめくりを一時停止します",
                sortTitle:"並べ替えは、次のルールの更新後に有効になります",
                autoRun:"自動的に有効",
                inputPageNum:"ジャンプするページ番号を入力",
                enableHistory:"ページめくり後の履歴を書く",
                initRun:"Webページを開いた直後にページをめくる",
                preload:"事前に次のページを読む",
                click2ImportRule:"以下をクリックして、ルールベースを追加します：",
                forceAllBody:"フルページ埋め込み？",
                openInNewTab:"スプライスされたページのコンテンツを新しいページで開きます",
                importSucc:"インポート完了",
                editCurrent:"現在のルールの編集",
                editBlacklist:"ブラックリストのURLを編集し、1行ずつ、サポート? *ワイルドカード",
                upBtnImg:"トップアイコンに戻る",
                downBtnImg:"フッターアイコンに移動",
                dbClick2StopCtrl:"Ctrlキー",
                dbClick2StopAlt:"Altキー",
                dbClick2StopShift:"Shiftキー",
                dbClick2StopMeta:"Metaキー",
                dbClick2StopKey:"Shortcutキー"
            };
            break;
        default:
            config={
                enableDebug:"Enable debug output",
                disable:"Disable",
                disableSite:"Toggle disabled state",
                disableSiteTips:"Disabled on this site",
                enableSiteTips:"Enabled on this site",
                enable:"Enable",
                toTop:"To Top",
                toBottom:"To Bottom",
                current:"Current Page",
                forceIframe:"Force to join",
                cancelForceIframe:"Cancel Force join",
                configure:"Configure",
                firstUpdate:"Click here to initialize the rules",
                update:"Update rules",
                click2update:"Click to update rules from url now",
                loadNow:"Load next now",
                loadConfirm:"How much pages do you want to load? (0 means infinite)",
                noNext:"No next link found, please create a new rule",
                passSec:"Updated #t# seconds ago",
                passMin:"Updated #t# minutes ago",
                passHour:"Updated #t# hours ago",
                passDay:"Updated #t# days ago",
                cantDel:"Can't delete buildin rules",
                confirmDel:"Are you sure you want to delete this rule?",
                updateSucc:"Update succeeded",
                beginUpdate:"Begin update, wait a minute please",
                customUrls:"Import rule url, One url per line, rules on AutoPagerize format need to start with \"0|\"",
                customRules:"Input custom rules with [Pagetual] format",
                save:"Save",
                loadingText:"Shojo Now Loading...",
                opacity:"Pagination spacer opacity",
                hideBar:"hide the paging spacer",
                dbClick2Stop:"Double-click on the blank space to pause",
                sortTitle:"Sorting takes effect after the next rule update",
                autoRun:"Auto run (black list mode)",
                inputPageNum:"Enter page number to jump",
                enableHistory:"Write history after page turning",
                initRun:"Turn pages immediately after opening",
                preload:"Preload next page for speeding up",
                click2ImportRule:"Click to import base rules link, then click to update rules:",
                forceAllBody:"Join full body of page?",
                openInNewTab:"Open urls of additions in new tab",
                importSucc:"Import completed",
                editCurrent:"Edit rule for current",
                editBlacklist:"Edit the blacklist urls, line by line, Support ? * for wildcard",
                upBtnImg:"Icon of back to top",
                downBtnImg:"Icon of go to footer",
                dbClick2StopCtrl:"Ctrl key",
                dbClick2StopAlt:"Alt key",
                dbClick2StopShift:"Shift key",
                dbClick2StopMeta:"Meta key",
                dbClick2StopKey:"Shortcut key"
            };
            break;
    }
    var i18n=(name, param)=>{
        return config[name]?config[name].replace("#t#",param):name;
    };

    var noRuleTest=false;
    var enableDebug=true;
    var debug=str=>{
        if(enableDebug){
            console.log(
                `%c【Pagetual v.${_GM_info.script.version}】 debug`,
                'color: yellow;font-size: x-large;font-weight: bold;'
            );
            console.debug(str);
        }
    };

    var _GM_xmlhttpRequest,_GM_registerMenuCommand,_GM_notification,_GM_addStyle,_GM_openInTab,_GM_info;
    if(typeof GM_xmlhttpRequest!='undefined'){
        _GM_xmlhttpRequest=GM_xmlhttpRequest;
    }else if(typeof GM!='undefined' && typeof GM.xmlHttpRequest!='undefined'){
        _GM_xmlhttpRequest=GM.xmlHttpRequest;
    }else{
        _GM_xmlhttpRequest=(f)=>{fetch(f.url).then(response=>response.text()).then(data=>{let res={response:data};f.onload(res)}).catch(f.onerror())};
    }
    if(typeof GM_registerMenuCommand!='undefined'){
        _GM_registerMenuCommand=GM_registerMenuCommand;
    }else if(typeof GM!='undefined' && typeof GM.registerMenuCommand!='undefined'){
        _GM_registerMenuCommand=GM.registerMenuCommand;
    }else{
        _GM_registerMenuCommand=(s,f)=>{};
    }
    if(typeof GM_info!='undefined'){
        _GM_info=GM_info;
    }else if(typeof GM!='undefined' && typeof GM.info!='undefined'){
        _GM_info=GM.info;
    }else{
        _GM_info={script:1};
    }
    if(typeof GM_notification!='undefined'){
        _GM_notification=GM_notification;
    }else if(typeof GM!='undefined' && typeof GM.notification!='undefined'){
        _GM_notification=GM.notification;
    }else{
        _GM_notification=(s)=>{showTips(s)};
    }
    if(typeof GM_openInTab!='undefined'){
        _GM_openInTab=GM_openInTab;
    }else if(typeof GM!='undefined' && typeof GM.openInTab!='undefined'){
        _GM_openInTab=GM.openInTab;
    }else{
        _GM_openInTab=(s,t)=>{window.open(s)};
    }
    if(typeof GM_addStyle!='undefined'){
        _GM_addStyle=GM_addStyle;
    }else if(typeof GM!='undefined' && typeof GM.addStyle!='undefined'){
        _GM_addStyle=GM.addStyle;
    }else{
        _GM_addStyle=cssStr=>{
            let styleEle=document.createElement("style");
            styleEle.innerHTML=cssStr;
            document.head.appendChild(styleEle);
        };
    }
    var _unsafeWindow=(typeof unsafeWindow=='undefined')?window:unsafeWindow;//兼容 ios userscripts 的寫法
    var storage={
        supportGM: typeof GM_getValue=='function' && typeof GM_getValue('a','b')!='undefined',
        supportGMPromise: typeof GM!='undefined' && typeof GM.getValue=='function' && typeof GM.getValue('a','b')!='undefined',
        mxAppStorage:(function(){
            try{
                return window.external.mxGetRuntime().storage;
            }catch(e){
            }
        })(),
        operaUJSStorage:(function(){
            try{
                return window.opera.scriptStorage;
            }catch(e){
            }
        })(),
        setItem:function(key,value){
            if(this.operaUJSStorage){
                this.operaUJSStorage.setItem(key,value);
            }else if(this.mxAppStorage){
                this.mxAppStorage.setConfig(key,value);
            }else if(this.supportGM){
                GM_setValue(key,value);
                if(value==="" && typeof GM_deleteValue!='undefined'){
                    GM_deleteValue(key);
                }
            }else if(this.supportGMPromise){
                GM.setValue(key,value);
                if(value==="" && typeof GM!='undefined' && typeof GM.deleteValue!='undefined'){
                    GM.deleteValue(key);
                }
            }else if(window.localStorage){
                window.localStorage.setItem(key,value);
            }
        },
        getItem:function(key,cb){
            var value;
            if(this.operaUJSStorage){
                value=this.operaUJSStorage.getItem(key);
            }else if(this.mxAppStorage){
                value=this.mxAppStorage.getConfig(key);
            }else if(this.supportGM){
                value=GM_getValue(key);
            }else if(this.supportGMPromise){
                value=GM.getValue(key).then(v=>{cb(v)});
                return;
            }else if(window.localStorage){
                value=window.localStorage.getItem(key);
            };
            cb(value);
        }
    };
    var rulesData={},ruleUrls,updateDate,configPage="https://github.com/hoothin/UserScripts/tree/master/Pagetual";
    var ruleImportUrlReg=/greasyfork\.org\/.*scripts\/438684[^\/]*(\/discussions|\/?$)|github\.com\/hoothin\/UserScripts\/(tree\/master\/Pagetual|issues)/i;
    var allOfBody="body>*";
    _GM_registerMenuCommand(i18n("configure"), ()=>{
        _GM_openInTab(configPage,{active:true});
    });
    _GM_registerMenuCommand(i18n("editCurrent"), ()=>{
        let editTemp;
        if(ruleParser.curSiteRule.url && !ruleParser.curSiteRule.singleUrl){
            editTemp=ruleParser.curSiteRule;
        }else{
            editTemp={
                name: document.title,
                url: "^"+location.origin.replace(/\./g,"\\."),
                pageElement: ruleParser.curSiteRule.pageElement||""
            };
        }
        rulesData.editTemp=editTemp;
        storage.setItem("rulesData", rulesData);
        _GM_openInTab(configPage,{active:true});
    });

    function getElementByXpath(xpath, contextNode, doc){
        doc = doc || document;
        contextNode = contextNode || doc;
        try {
            var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
        } catch (err) {
            throw new Error(`Invalid xpath: ${xpath}`);
        }
    }

    function getAllElementsByXpath(xpath, contextNode, doc){
        doc = doc || document;
        contextNode = contextNode || doc;
        var result = [];
        try {
            var query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < query.snapshotLength; i++) {
                var node = query.snapshotItem(i);
                if (node.nodeType === 1) result.push(node);
            }
        } catch (err) {
            throw new Error(`Invalid xpath: ${xpath}`);
        }
        return result;
    }

    class RuleParser {
        constructor() {
            this.hpRules=[];
            this.customRules=[];
            this.rules=[];
            this.pageDoc=document;
            this.nextLinkHref=null;
            this.nextTitle="";
            this.oldUrl="";
            this.curUrl=location.href;
            this.curSiteRule={};
        }

        initSavedRules(callback){
            var self=this;
            storage.getItem("hpRules", hpRules=>{
                if(hpRules)self.hpRules=hpRules;
                storage.getItem("customRules", customRules=>{
                    if(customRules)self.customRules=customRules;
                    storage.getItem("rules", rules=>{
                        if(rules)self.rules=rules;
                        callback();
                    });
                });
            });
        }

        saveCurSiteRule(){
            if(!this.curSiteRule || !this.curSiteRule.url || this.curSiteRule.singleUrl || this.curSiteRule.url.length<13)return;
            this.hpRules=this.hpRules.filter(item=>{return item&&item.url!=this.curSiteRule.url});
            this.hpRules.unshift(this.curSiteRule);
            if(this.hpRules.length>30){
                this.hpRules.pop();
            }
            storage.setItem("hpRules", this.hpRules);
        }

        requestJSON(url, callback){
            _GM_xmlhttpRequest({
                url: url,
                method: 'GET',
                timeout: 20000,
                onload: function(res) {
                    let json=null;
                    try{
                        json=JSON.parse(res.response||res.responseText);
                    }catch(e){
                        debug(e);
                    }
                    callback(json);
                },
                onerror: function(e) {
                    callback(null, e);
                },
                ontimeout: function(e) {
                    callback(null, e);
                }
            });
        }

        formatRule(item, type, from){
            switch(type){
                case 0:
                    return {
                        from:from,
                        type:type,
                        name:item.name,
                        action:item.data.forceIframe=="true"?1:0,
                        url:item.data.url,
                        pageElement:item.data.pageElement,
                        nextLink:item.data.nextLink,
                        insert:item.data.insertBefore,
                        insertPos:1,
                        updatedAt:item.data.updated_at,
                        css:item.data.Stylus+item.data.CSS,
                        pageAction:item.data.bookmarklet
                    };
                    break;
                case 1:
                default:
                    item.from=from;
                    if(typeof(item.type) == "undefined")item.type=type;
                    return item;
                    break;
            }
            return null;
        }

        addRuleByUrl(url, type, from, callback) {
            if(url.indexOf("?")==-1){
                url=url+"?"+Date.now();
            }else{
                url=url+"&"+Date.now();
            }
            this.requestJSON(url, (json,err)=>{
                if(!json){
                    debug("Update "+url+" rules fail!");
                    debug(err);
                }
                this.addRules(json, type, from);
                callback(json, err);
            });
        }

        addRules(rules, type, from) {
            if(rules && rules.length>0){
                this.rules=this.rules.filter(item=>{return item.from!=from});
                rules.forEach(item=>{
                    let rule=this.formatRule(item, type, from);
                    if(rule){
                        this.rules.unshift(rule);
                    }
                });
            }
        }

        getRule(callback) {
            if(noRuleTest){
                this.curSiteRule={};
                this.curSiteRule.url=location.origin+location.pathname;
                this.curSiteRule.singleUrl=true;
                callback();
                return;
            }
            if(this.curSiteRule && this.curSiteRule.url){
                return this.curSiteRule;
            }
            var self=this;

            function setRule(r){
                self.curSiteRule=r;
                debug(r);
                callback();
            }

            function ruleMatch(r){
                let pageElement,nextLink,insert;
                if(r.nextLink && r.nextLink!="0" && r.nextLink!=0){
                    nextLink=r.type==0?getElementByXpath(r.nextLink):document.querySelector(r.nextLink);
                    if(!nextLink)return false;
                }
                if(r.pageElement){
                    pageElement=r.type==0?getElementByXpath(r.pageElement):document.querySelector(r.pageElement);
                    if(!pageElement)return false;
                }
                if(r.insert){
                    insert=r.type==0?getElementByXpath(r.insert):document.querySelector(r.insert);
                    if(!insert)return false;
                }
                return true;
            }

            function checkRule(r){
                let urlReg=new RegExp(r.url, "i");
                if(urlReg.test(location.href)){
                    if(r.include){
                        let include=r.type==0?getElementByXpath(r.include):document.querySelector(r.include);
                        if(!include)return false;
                    }
                    if(r.wait){
                        let waitTime=500,checkEval;
                        if(isNaN(r.wait)){
                            try{
                                checkEval=Function("doc",'"use strict";' + r.wait);
                            }catch(e){
                                debug(e);
                            }
                        }else{
                            waitTime=r.wait;
                        }
                        let checkReady=()=>{
                            setTimeout(()=>{
                                if(!ruleMatch(r) || (checkEval && !checkEval(document))){
                                    checkReady();
                                }else{
                                    setRule(r);
                                }
                            },parseInt(waitTime));
                        };
                        checkReady();
                        return true;
                    }
                    if(r.pinUrl){
                        setRule(r);
                        return true;
                    }
                    if(!ruleMatch(r)){
                        return false;
                    }
                    setRule(r);
                    return true;
                }
                return false;
            }

            for(let i in this.hpRules){
                let rule=this.hpRules[i];
                if(!rule || !rule.url)continue;
                if(rule.singleUrl){
                    if(location.origin+location.pathname==rule.url){
                        setRule(rule);
                        return;
                    }
                    continue;
                }
                if(checkRule(rule))return;
            }
            for(let i in this.customRules){
                let rule=this.customRules[i];
                if(!rule || !rule.url)continue;
                if(checkRule(rule))return;
            }
            let r=0;
            function searchByTime(){
                setTimeout(()=>{
                    let end=r+50;
                    end=end>self.rules.length?self.rules.length:end;
                    for(;r<end;r++){
                        let rule=self.rules[r];
                        if(checkRule(rule))return;
                    }
                    if(end>=self.rules.length){
                        self.curSiteRule={};
                        self.curSiteRule.url=location.origin+location.pathname;
                        self.curSiteRule.singleUrl=true;
                        callback();
                        return;
                    }else{
                        searchByTime();
                    }
                },10);
            }
            searchByTime();
        }

        geneSelector(ele){
            let selector=ele.tagName;
            //Google id class都是隨機。百度更過分，style script順序都是隨機的
            //if(ele.id) selector += '#' + ele.id;
            //if(ele.classList) selector += [].map.call(ele.classList,d=>'.'+d).join('');
            if(ele.tagName!="HTML" && ele.tagName!="BODY"){
                if(ele.className) selector += [].map.call(ele.classList,d=>'.'+d).join('');
                let parent = ele.parentElement;
                if(parent){
                    selector = this.geneSelector(parent) + ' > ' + selector;
                    if(!ele.className){
                        let i,j=0;
                        for(i=0;i<parent.children.length;i++){
                            if(parent.children[i].tagName==ele.tagName){
                                j++;
                                if(parent.children[i]==ele){
                                    break;
                                }
                            }
                        }
                        selector += (parent.tagName=="HTML"?"":`:nth-of-type(${j})`);
                    }
                }
            }
            return selector;
        }

        getPageElement(doc, curWin, dontFind) {
            let pageElement=null;
            let self=this;
            let body=doc.body;
            if(this.curSiteRule.pageElement){
                pageElement=this.curSiteRule.type==0?getAllElementsByXpath(this.curSiteRule.pageElement,doc,doc):doc.querySelectorAll(this.curSiteRule.pageElement);
            }else if(!this.curSiteRule.singleUrl && this.curSiteRule.type==0){
                pageElement=[body];
            }
            if(this.curSiteRule.singleUrl && pageElement && pageElement.length>0 && pageElement[0].tagName=="TR"){
                let mainTr=this.insert.parentNode.querySelector('tr'),mainTdNum=0,newTdNum=0;
                [].forEach.call(mainTr.children, el=>{
                    if(el.tagName=="TD" || el.tagName=="TH"){
                        mainTdNum+=el.colSpan||1;
                    }
                });
                [].forEach.call(pageElement[0].children, el=>{
                    if(el.tagName=="TD" || el.tagName=="TH"){
                        newTdNum+=el.colSpan||1;
                    }
                });
                if(mainTdNum!=newTdNum){
                    this.curSiteRule.pageElement=allOfBody;
                    pageElement=[body];
                    this.getInsert(true);
                }
            }
            if((this.curSiteRule.singleUrl || !this.curSiteRule.pageElement) && (!pageElement || pageElement.length==0) && curWin && !dontFind){
                if(!body)return null;
                let bodyHeight=parseInt(body.offsetHeight || body.scrollHeight);
                let curHeight=bodyHeight;
                let windowHeight=window.innerHeight || document.documentElement.clientHeight;
                let needCheckNext=(doc==document && this.initNext);
                function checkElement(ele){
                    if(ele.childNodes && ele.childNodes.length==1)ele=ele.childNodes[0];
                    if(ele.tagName=="PICTURE"){
                        self.curSiteRule.pageElement=self.geneSelector(ele.parentNode)+">"+ele.tagName;
                        debug(self.curSiteRule.pageElement);
                        return [ele];
                    }
                    if(curHeight/bodyHeight<=0.25){
                        self.curSiteRule.pageElement=allOfBody;
                        debug(self.curSiteRule.pageElement);
                        return [body];
                    }
                    if(ele.tagName=="FORM"){
                        self.curSiteRule.pageElement=self.geneSelector(ele)+">*";
                        debug(self.curSiteRule.pageElement);
                        return ele.children;
                    }
                    if(ele.children.length==0 && !self.curSiteRule.pageElement){
                        if(ele.parentNode.tagName=="P")ele=ele.parentNode;
                        self.curSiteRule.pageElement=self.geneSelector(ele.parentNode)+">"+ele.tagName;
                        debug(self.curSiteRule.pageElement);
                        return [ele];
                    }
                    let i,maxHeight=curHeight*0.55,curMaxEle=null,curMaxArea=0,maxWidth=0;
                    let isHori=true;
                    let offsetTop=ele.children[0].offsetTop;
                    for(i=1;i<ele.children.length;i++){
                        if(ele.children[i].offsetTop!=offsetTop){
                            isHori=false;
                            break;
                        }
                    }
                    for(i=0;i<ele.children.length;i++){
                        let curNode=ele.children[i];
                        if(curNode.tagName=="CANVAS")continue;
                        if(curNode.tagName!="IMG" && /^\s*$/.test(curNode.innerText))continue;
                        if(needCheckNext && !curNode.contains(self.initNext) && getElementTop(curNode)>windowHeight){
                            continue;
                        }
                        let comStyle=curWin.getComputedStyle(curNode);
                        let h=parseInt(curNode.offsetHeight || curNode.scrollHeight);
                        let w=parseInt(curNode.scrollWidth);
                        if(isNaN(h) || isNaN(w))continue;
                        if(isHori && h<=50)continue;
                        let a=h*w+h,moreChild=curNode.children[0];
                        while(moreChild){
                            comStyle=curWin.getComputedStyle(moreChild);
                            let ch=parseInt(moreChild.offsetHeight || moreChild.scrollHeight);
                            let cw=parseInt(moreChild.scrollWidth);
                            if(h<ch)h=ch;
                            if(moreChild.innerText!="" && !isNaN(ch) && !isNaN(cw)){
                                a+=ch*cw;
                            }
                            moreChild=moreChild.nextElementSibling;
                        }
                        let isMax=false;
                        if(isHori){
                            if(maxWidth<w){
                                isMax=true;
                            }else if(maxWidth==w && curMaxArea<a){
                                isMax=true;
                            }
                        }else{
                            isMax=curMaxArea<a;
                        }
                        if(curMaxEle==null || isMax){
                            if(h>0 || !isHori)curHeight=h;
                            curMaxArea=a;
                            maxWidth=w;
                            curMaxEle=curNode;
                        }
                    }
                    if(curMaxEle && (isHori || curHeight>maxHeight || (needCheckNext && curHeight>windowHeight && ele.contains(self.initNext)))){
                        return checkElement(curMaxEle);
                    }
                    if(ele.tagName=="P" || ele.tagName=="BR")ele=ele.parentNode;
                    if(ele.tagName=="TBODY"){
                        self.curSiteRule.pageElement=self.geneSelector(ele)+">*";
                        if(ele.children.length>0 && ele.children[0].querySelector("th")){
                            self.curSiteRule.pageElement+=":not(:first-child)";
                        }
                        debug(self.curSiteRule.pageElement);
                        return ele.children;
                    }
                    self.curSiteRule.pageElement=self.geneSelector(ele);
                    if(ele.children.length>1){
                        let hasText=false;
                        for(let i in ele.childNodes){
                            let child=ele.childNodes[i];
                            if(child.nodeType==3 && child.nodeValue.trim()!=''){
                                hasText=true;
                                ele=[ele];
                                break;
                            }
                        }
                        if(!hasText){
                            let middleChild=ele.children[parseInt(ele.children.length/2)];
                            if((middleChild.style && middleChild.style.position=="absolute" && middleChild.style.left && middleChild.style.top) || ele.tagName=="UL" || curHeight==0){
                                ele=[ele];
                            }else{
                                self.curSiteRule.pageElement+=">*";
                                ele=ele.children;
                            }
                        }
                    }else{
                        ele=[ele];
                    }
                    debug(self.curSiteRule.pageElement);
                    return ele;
                }
                pageElement=checkElement(body);
                //if(pageElement)this.saveCurSiteRule();
            }
            return pageElement;
        }

        getPage(doc){
            if(_unsafeWindow.Discourse)return {};
            let canSave=false;//發現頁碼選擇器在其他頁對不上，還是別保存了
            let url=this.curUrl.replace("#!","").replace("index.php?","?");
            let _url=url.replace(/\.s?html?$/i,"");
            let pageNum=1,preStr="",afterStr="";
            let pageMatch1=url.match(/(.*[a-z\/\-_](?:p|page)?\/?)(\d+)(\.s?html?$|\/?$)/i);
            let pageMatch2=url.match(/(.*[\?&]p(?:age)?=)(\d+)($|[#&].*)/i);
            if(pageMatch1){
                preStr=pageMatch1[1];
                pageNum=parseInt(pageMatch1[2]);
                afterStr=pageMatch1[3];
            }else if(pageMatch2){
                preStr=pageMatch2[1];
                pageNum=parseInt(pageMatch2[2]);
                afterStr=pageMatch2[3];
            }
            let curPage=doc,i,cur,jsNext;
            let next1,next2,next3,next4,nextJs1,nextJs2,nextJs3;
            let next=curPage.querySelector(".page-next>a")||
                curPage.querySelector("a.next_page")||
                curPage.querySelector("#next_page")||
                curPage.querySelector(".nextPage")||
                curPage.querySelector("a[data-pagination=next]")||
                curPage.querySelector("ul.pagination>li.active+li>a")||
                curPage.querySelector(".pagination a[rel=next]")||
                curPage.querySelector(".pagination-nav__item--next>a")||
                curPage.querySelector("a[title='Next page']")||
                curPage.querySelector("a.pageright")||
                curPage.querySelector("a#rightFix")||
                curPage.querySelector("a#next")||
                curPage.querySelector(".next>a")||
                curPage.querySelector(".next>button")||
                curPage.querySelector("a[alt=next]")||
                curPage.querySelector("button.next")||
                curPage.querySelector("[title=next]")||
                curPage.querySelector("a#btnPreGn")||
                getElementByXpath("//a[contains(@class, 'page__next')]",curPage,curPage);
            if(!next){
                let nexts=curPage.querySelectorAll("a.next");
                for(i=0;i<nexts.length;i++){
                    if(!/^([上前首尾][一1]?[页頁张張]|previous(\s*page)?\s*›?$|前のページ)/i.test(nexts[i].innerText.trim()) &&
                       nexts[i].style.display!=="none" &&
                       nexts[i].parentNode.style.display!=="none"){
                        next=nexts[i];
                        break;
                    }
                }
            }
            if(next && (!next.href || /^javascript:/.test(next.href) || next.getAttribute("href")=="#")){
                jsNext=next;
                next=null;
            }
            if(!next){
                next=curPage.querySelectorAll("[aria-label='Next page']");
                if(next && next.length==1){
                    next=next[0];
                    if(!next.href || /^javascript:/.test(next.href) || next.getAttribute("href")=="#"){
                        if(!jsNext)jsNext=next;
                        next=null;
                    }
                }else{
                    next=null;
                }
            }
            if(!next){
                next=curPage.querySelectorAll("[aria-label='Next']");
                if(next && next.length==1){
                    next=next[0];
                    if(!next.href || /^javascript:/.test(next.href) || next.getAttribute("href")=="#"){
                        if(!jsNext)jsNext=next;
                        next=null;
                    }
                }else{
                    next=null;
                }
            }
            if(next && /^[下后後][一1]?[章话話篇]/i.test(next.innerText.trim())){
                next2=next;
                next=null;
            }
            if(!next){
                next=curPage.querySelector("a.curr");
                if(next){
                    next=next.nextSibling;
                }
            }
            if(!next){
                next=curPage.querySelector("div.wp-pagenavi>span.current+a,div.page-nav>span.current+a,div.article-paging>span+a");
            }
            if(!next){
                let pageDiv=curPage.querySelector("div.pages>ul");
                if(pageDiv){
                    cur=pageDiv.querySelector("li>b");
                    if(cur)next=cur.parentNode.nextElementSibling;
                    if(next)next=next.querySelector("a");
                }
            }
            if(!next){
                cur=curPage.querySelector(".number>ul>li.active");
                if(cur)next=cur.nextElementSibling;
                if(next)next=next.querySelector("a");
            }
            if(!next){
                let aTags=curPage.querySelectorAll("a,button");
                for(i=aTags.length-1;i>=0;i--){
                    if(next1 && next2 && next3 && next4)break;
                    let aTag=aTags[i];
                    if(aTag.innerText=="§")continue;
                    if(aTag.innerText.length>50)continue;
                    if(aTag.style.display=="none")continue;
                    if(aTag.href && /next$/i.test(aTag.href))continue;
                    if(aTag.className && /slick|slide/i.test(aTag.className))continue;
                    if(aTag.innerText.length<=18){
                        if(!next1){
                            if(/^[下后後][一1]?[页頁张張]|^next([ _-]?page)?\s*[›>→»]?$|次のページ|^次へ?$/i.test(aTag.innerText.trim())){
                                if(!aTag.href || /^javascript:/.test(aTag.href) || aTag.getAttribute("href")=="#"){
                                    if(!nextJs1)nextJs1=aTag;
                                }else{
                                    next1=aTag;
                                }
                            }
                        }
                        if(!next2){
                            if(/^[下后後][一1]?[章话話篇]/i.test(aTag.innerText.trim()) || /nextpage/i.test(aTag.className)){
                                if(!aTag.href || /^javascript:/.test(aTag.href) || aTag.getAttribute("href")=="#"){
                                    if(!nextJs2)nextJs2=aTag;
                                }else{
                                    next2=aTag;
                                }
                            }
                        }
                        if(!next3){
                            if(aTag.innerText=="&gt;" || aTag.innerText=="▶" || aTag.innerText==">" || aTag.innerText=="›" || aTag.innerText=="→" || aTag.innerText=="»"){
                                if(!aTag.href || /^javascript:/.test(aTag.href) || aTag.getAttribute("href")=="#"){
                                    if(!nextJs3)nextJs3=aTag;
                                }else{
                                    next3=aTag;
                                }
                            }
                        }
                    }
                    if(!aTag.href || /^javascript:/.test(aTag.href) || aTag.getAttribute("href")=="#")continue;
                    if(!next4 && aTag.href.length<250){
                        let _aHref=aTag.href.replace("?&","?").replace("#!","").replace("index.php?","?");
                        let _aHrefTrim=_aHref;
                        if(preStr)_aHrefTrim=_aHrefTrim.replace(preStr,"");
                        if(afterStr)_aHrefTrim=_aHrefTrim.replace(afterStr,"");
                        if(pageNum<999 && _aHrefTrim==pageNum+1){
                            next4=aTag;
                        }else if(this.curUrl!=aTag.href){
                            _aHref=_aHref.replace(/\.s?html?$/i,"");
                            if(_aHref.indexOf(_url)!=-1 && /^[\/\?&]?[_-]?(p|page)?=?\/?2(\/|\?|&|$)/i.test(_aHref.replace(_url,""))){
                                let curHref=aTag.getAttribute("href");
                                let pageOne=curHref.replace(/\/2(\/|\?|&|$)/,"/1$1");
                                if(pageOne==curHref)pageOne=null;
                                else pageOne=curPage.querySelector(`a[href='${pageOne}']`);
                                if(!pageOne || pageOne.className!=curHref.className)next4=aTag;
                            }
                        }
                    }
                }
                if(next3){
                    let eles=getAllElementsByXpath(`//a[text()='${next3.innerText}']`,curPage,curPage);
                    if(eles.length>1)next3=null;
                }
            }
            if(!next)next=next1||next4||next3||next2||jsNext||nextJs1||nextJs3||nextJs2;
            if(next && next.classList.contains("results-more"))next=null;
            return {next:next,canSave:canSave};
        }

        canonicalUri(src) {
            if(src.charAt(0)=="#")return location.href+src;
            var root_page = /^[^?#]*\//.exec(location.href)[0],
                base_path = location.pathname.replace(/\/[^\/]+\.[^\/]+$/, "/"),
                root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
                absolute_regex = /^\w+\:\/\//;
            src=src.replace(/\.\//,"");
            if (/^\/\/\/?/.test(src)){
                src = location.protocol + src;
            }
            else if (!absolute_regex.test(src) && src.charAt(0) != "/"){
                src = (base_path || "") + src;
            }
            return (absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src));
        }

        getLinkByPage(url, pageNum) {
            if(!url)return;
            if(this.curSiteRule.pageNum){
                let result=this.curSiteRule.pageNum;
                let strMatch=result.match(/\{.*?}/);
                if(!strMatch)return null;
                let urlReg=new RegExp("("+result.replace(strMatch[0], ")\\d+(")+")","i");
                let code=strMatch[0].replace(/^{/,"").replace(/}$/,"").replace(/\$p/g,pageNum);
                if(code==pageNum){
                    result=url.replace(urlReg,"$1"+code+"$2");
                }else{
                    try{
                        code=Function('"use strict";return ' + code)();
                        result=url.replace(urlReg,"$1"+code+"$2");
                    }catch(e){
                        debug(e);
                    }
                }
                return result==url?url.replace(/([&\/\?](p=|page[=\/_-]?))\d+/i, "$1"+pageNum).replace(/([_-])\d+\./i, "$1"+pageNum+"."):result;
            }else{
                return url.replace(/([&\/\?](p=|page[=\/_-]?))\d+/i, "$1"+pageNum).replace(/([_-])\d+\./i, "$1"+pageNum+".");
            }
        }

        getNextLink(doc) {
            let nextLink=null,page,href;
            let getNextLinkByForm=(form,n)=>{
                let params=[];
                [].forEach.call(form.querySelectorAll("input"), input=>{
                    if(n && /^(p|page)$/i.test(input.name)){
                        params.push('p='+n);
                    }else{
                        params.push(input.name+'='+input.value);
                    }
                });
                return form.action+'?'+params.join('&');
            };
            if(this.curSiteRule.pageElementByJs){
                this.nextLinkHref="#";
                return true;
            }else if(this.curSiteRule.nextLinkByJs){
                try{
                    let targetUrl=Function("doc",'"use strict";' + this.curSiteRule.nextLinkByJs)(doc);
                    if(targetUrl)nextLink={href:targetUrl};
                }catch(e){
                    debug(e);
                }
            }else if(this.curSiteRule.nextLinkByUrl){
                let targetUrl=this.curUrl.replace(new RegExp(this.curSiteRule.nextLinkByUrl[0],"i"), this.curSiteRule.nextLinkByUrl[1]);
                if(targetUrl != this.curUrl){
                    let reps=targetUrl.match(/{.*?}/g);
                    if(reps){
                        reps.forEach(rep=>{
                            let code=rep.replace("{","").replace("}","");
                            let result=code.match(/^(\d+)\+1$/);
                            if(result){
                                result=parseInt(result[1])+1;
                            }else{
                                try{
                                    result=Function('"use strict";return ' + code)();
                                }catch(e){
                                    debug(e);
                                }
                            }
                            targetUrl=targetUrl.replace(rep, result);
                        });
                    }
                }
                nextLink={href:targetUrl};
            }else if(this.curSiteRule.nextLink){
                if(this.curSiteRule.nextLink!="0" && this.curSiteRule.nextLink!=0){
                    nextLink=this.curSiteRule.type==0?getElementByXpath(this.curSiteRule.nextLink,doc,doc):doc.querySelector(this.curSiteRule.nextLink);
                }
            }else{
                page=this.getPage(doc);
                nextLink=page.next;
                if(nextLink){
                    if(nextLink.tagName=="INPUT" && nextLink.parentNode.tagName=="FORM"){
                        let form=nextLink.parentNode;
                        nextLink.href=getNextLinkByForm(form);
                    }
                    if(nextLink.parentNode.style.display=="none" || nextLink.style.display=="none" || nextLink.classList.contains("noClick") || nextLink.hasAttribute("disabled")){
                        this.nextLinkHref=false;
                        return null;
                    }else if(doc==document){
                        if((!nextLink.href || /^javascript:/.test(nextLink.href)) && !isVisible(nextLink, _unsafeWindow)){
                            this.nextLinkHref=false;
                            return null;
                        }else{
                            let nextLinkCs=_unsafeWindow.getComputedStyle(nextLink);
                            if(nextLinkCs.cursor=="not-allowed"){
                                this.nextLinkHref=false;
                                return null;
                            }
                            this.initNext=nextLink;
                        }
                    }
                    let form=doc.querySelector('#search-form');
                    if(!nextLink.href && nextLink.hasAttribute("onclick") && form){
                        if(form && /^\d+$/.test(nextLink.innerText)){
                            href=getNextLinkByForm(form, nextLink.innerText);
                        }
                    }
                }
            }
            if(nextLink){
                let needUrl=(this.curSiteRule.action==0 || this.curSiteRule.action==1);
                if(!href)href=nextLink.href;
                if(href && nextLink.getAttribute){
                    let _href=nextLink.getAttribute("href");
                    if(!_href || _href.charAt(0)=="#" || _href=="?"){
                        href="#";
                    }
                }

                if((href===""||href===null) && needUrl){
                    this.nextLinkHref=false;
                }else if(/^(javascript:void\(0\)|#)/.test(href) && needUrl){
                    this.nextLinkHref=false;
                }else{
                    this.nextLinkHref=(href && !/^(javascript:|#)/.test(href))?this.canonicalUri(href):"#";
                    if(this.nextLinkHref!="#" && (this.nextLinkHref==this.curUrl || this.nextLinkHref==this.curUrl+"#" || this.nextLinkHref==this.oldUrl || this.nextLinkHref==this.oldUrl+"#")){
                        this.nextLinkHref=false;
                    }else if(doc==document)debug(nextLink);
                }
            }else{
                this.nextLinkHref=false;
            }
            this.preload();
            return nextLink;
        }

        preload(){
            if(!rulesData.preload)return;
            if(!this.nextLinkHref || this.nextLinkHref=="#")return;
            let self=this;
            if(this.curSiteRule && this.curSiteRule.action==1){
                if(!this.preloadIframe){
                    this.preloadIframe = document.createElement('iframe');
                    let iframe = this.preloadIframe;
                    iframe.name = 'pagetual-iframe';
                    iframe.width = '100%';
                    iframe.height = '0';
                    iframe.frameBorder = '0';
                    if(ruleParser.curSiteRule.sandbox!=false){
                        iframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
                    }
                    iframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;';
                    iframe.addEventListener('load', function (e) {
                        try{
                            let doc=iframe.contentDocument || iframe.contentWindow.document;
                            var body = doc.body;
                            if (body && body.firstChild) {
                                self.lazyImgAction(body.children);
                            }
                        }catch(e){
                            return;
                        }
                    }, false);
                    document.body.appendChild(iframe);
                }
                this.preloadIframe.src = this.nextLinkHref;
            }else{
                _GM_xmlhttpRequest({
                    url: this.nextLinkHref,
                    method: 'GET',
                    overrideMimeType: 'text/html;charset='+document.charset,
                    headers: {
                        'Referer': location.href
                    },
                    timeout: 5000,
                    onload: function(res) {
                        var doc=null;
                        try {
                            doc=document.implementation.createHTMLDocument('');
                            doc.documentElement.innerHTML=res.response;
                            var body = doc.body;
                            if (body && body.firstChild) {
                                self.lazyImgAction(body.children);
                            }
                            if(!self.preloadDiv){
                                self.preloadDiv = document.createElement('div');
                                self.preloadDiv.id = "pagetual-preload";
                                self.preloadDiv.style.cssText = 'display:none!important;';
                                document.body.appendChild(self.preloadDiv);
                                self.checkedImgs={};
                            }
                            [].forEach.call(doc.images, i=>{
                                let iSrc=i.src;
                                if(iSrc && !self.checkedImgs[iSrc]){
                                    self.checkedImgs[iSrc] = true;
                                    let img = document.createElement('img');
                                    img.src = iSrc;
                                    self.preloadDiv.appendChild(img);
                                }
                            });
                        }
                        catch (e) {
                            return;
                        }
                    }
                });
            }
        }

        getInsert(refresh) {
            if(refresh){
                this.insert=null;
            }
            if(this.insert && !refresh){
                let parent=this.insert;
                while(parent && parent.nodeName!="BODY"){
                    parent=parent.parentNode;
                }
                if(parent && parent.nodeName=="BODY"){
                    return this.insert;
                }
            }
            if(this.curSiteRule.insert){
                this.insert=this.curSiteRule.type==0?getElementByXpath(this.curSiteRule.insert,document):document.querySelector(this.curSiteRule.insert);
            }else{
                let pageElement=this.getPageElement(document, _unsafeWindow);
                if(pageElement && pageElement.length>0){
                    var pELast = pageElement[pageElement.length - 1];
                    this.insert = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
                }
            }
            return this.insert;
        }

        pageInit(doc,eles){
            let code=this.curSiteRule.pageInit;
            if(code){
                try{
                    Function("doc","eles",'"use strict";' + code)(doc,eles);
                }catch(e){
                    debug(e);
                }
            }
        }

        pageAction(doc,eles){
            let code=this.curSiteRule.pageAction;
            if(code){
                try{
                    Function("doc","eles",'"use strict";' + code)(doc,eles);
                }catch(e){
                    debug(e);
                }
            }
            this.lazyImgAction(eles);
            this.openInNewTab(eles);
        }

        openInNewTab(eles){
            if(rulesData.openInNewTab){
                [].forEach.call(eles, ele=>{
                    if(ele.tagName=="A" && ele.href && !/^(mailto:|javascript:|#)/.test(ele.href)){
                        ele.setAttribute('target', '_blank');
                    }else{
                        [].forEach.call(ele.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'), a=>{
                            a.setAttribute('target', '_blank');
                            if (a.getAttribute('onclick') == 'atarget(this)') {
                                a.removeAttribute('onclick');
                            }
                        });
                    }
                });
            }
        }

        lazyImgAction(eles){
            let setLazyImg=img=>{
                let realSrc;
                if(img.getAttribute("_src") && !img.src){
                    realSrc=img.getAttribute("_src");
                }else if(img.dataset && img.dataset.original){
                    realSrc=img.dataset.original;
                }else if(img.dataset && img.dataset.src){
                    realSrc=img.dataset.src;
                }else if(img._lazyrias && img._lazyrias.srcset){
                    realSrc=img._lazyrias.srcset[img._lazyrias.srcset.length-1];
                }else if(img.dataset && img.dataset.origFile){
                    realSrc=img.dataset.origFile;
                }else if(img.srcset){
                    var srcs=img.srcset.split(/[xw],/),largeSize=0;
                    srcs.forEach(srci=>{
                        let srcInfo=srci.trim().split(" "),curSize=parseInt(srcInfo[1]);
                        if(srcInfo[1] && curSize>largeSize){
                            largeSize=curSize;
                            realSrc=srcInfo[0];
                        }
                    });
                }
                if(realSrc){
                    img.src=realSrc;
                    img.style.display="block";
                }
            };
            [].forEach.call(eles, ele=>{
                if(ele.tagName=="IMG"){
                    setLazyImg(ele);
                }else{
                    [].forEach.call(ele.querySelectorAll("img"), img=>{
                        setLazyImg(img);
                    });
                }
                if(ele.tagName=="A" && ele.classList.contains("lazyload")){
                    if(ele.dataset.original){
                        ele.style.backgroundImage='url("'+ele.dataset.original+'")';
                    }
                }else{
                    [].forEach.call(ele.querySelectorAll("a.lazyload"), a=>{
                        if(a.dataset.original){
                            a.style.backgroundImage='url("'+a.dataset.original+'")';
                        }
                    });
                }
            });
            let lazyImgSrc=this.curSiteRule.lazyImgSrc;
            if(lazyImgSrc){
                [].forEach.call(eles, ele=>{
                    [].forEach.call(ele.querySelectorAll("img"), img=>{
                        if(img.getAttribute(lazyImgSrc)){
                            img.src=img.getAttribute(lazyImgSrc);
                        }
                    });
                });
            }
        }

        initPage(callback){
            let self=this;
            curPage=1;
            //if(this.curSiteRule.url && !this.curSiteRule.singleUrl)return;
            this.curSiteRule={};
            this.pageDoc=document;
            this.nextLinkHref=null;
            this.curUrl=location.href;
            this.getRule(()=>{
                if(self.curSiteRule.enable==0){
                    debug("Stop as rule disable");
                    isPause=true;
                    return;
                }
                //若是再亂匹配就不緩存wedata，或者只在找完本地規則之後再考慮wedata的緩存
                if(self.curSiteRule && !self.curSiteRule.singleUrl && self.curSiteRule.url.length>13){
                    self.hpRules=self.hpRules.filter(item=>{return item&&item.url!=self.curSiteRule.url});
                    self.hpRules.unshift(self.curSiteRule);
                    if(self.hpRules.length>30){
                        self.hpRules.pop();
                    }
                    storage.setItem("hpRules", self.hpRules);
                }
                let css=self.curSiteRule.css;
                if(css){
                    _GM_addStyle(css);
                }
                let autoClick=self.curSiteRule.autoClick;
                if(autoClick){
                    let autoClickBtn;
                    try{
                        autoClickBtn=document.querySelector(autoClick);
                    }catch(e){
                        autoClickBtn=getElementByXpath(autoClick);
                    }
                    if(autoClickBtn){
                        emuClick(autoClickBtn);
                    }
                }
                let code=self.curSiteRule.init;
                if(code){
                    try{
                        Function('doc','win','iframe','"use strict";' + code)(null,null,null);
                    }catch(e){
                        debug(e);
                    }
                }
                self.getNextLink(document);
                callback();
            });
        }

        insertElement(ele) {
            if(this.curSiteRule.insertPos==2){
                this.insert.appendChild(ele);
            }else{
                this.insert.parentNode.insertBefore(ele, this.insert);
            }
        }

        insertPage(doc, eles, url, callback, tried){
            this.oldUrl=this.curUrl;
            let oldTitle=this.pageDoc.title;
            this.pageDoc=doc;
            this.curUrl=url;
            let nextLink=this.getNextLink(doc);
            this.nextTitle="";
            if(this.curSiteRule.pageBarText){
                if(this.curSiteRule.pageBarText==1){
                    this.nextTitle=doc.title;
                }else{
                    try{
                        this.nextTitle=Function("doc",'"use strict";' + this.curSiteRule.pageBarText)(doc);
                    }catch(e){
                        debug(e);
                    }
                }
            }
            if(curPage==1 && !tried && !nextLink && this.curSiteRule.singleUrl && this.curSiteRule.pageElement && this.curSiteRule.action!=0){
                this.curSiteRule.action=1;
                this.curUrl=location.href;
                return false;
            }
            if(callback)callback(eles);
            this.getInsert();
            var self=this,newEles=[];
            if(!eles || eles.length==0 || !self.insert || !self.insert.parentNode){
            }else{
                this.pageInit(doc, eles);
                [].forEach.call(eles, ele=>{
                    let newEle=ele.cloneNode(true);
                    let oldCanvass=ele.querySelectorAll("canvas");
                    let newCanvass=newEle.querySelectorAll("canvas");
                    for(let i=0;i<oldCanvass.length;i++){
                        let oldCanvas=oldCanvass[i];
                        let newCanvas=newCanvass[i];
                        newCanvas.getContext('2d').drawImage(oldCanvas, 0, 0);
                    }
                    self.insertElement(newEle);
                    newEles.push(newEle);
                });
            }
            this.pageAction(doc, newEles);
            if(this.oldUrl!=location.href){
                let isJs=/^(javascript|#)/.test(this.oldUrl.replace(location.href,""));
                if(rulesData.enableHistory && !isJs){
                    _unsafeWindow.history.replaceState(undefined, oldTitle, this.oldUrl);
                    document.title=oldTitle;
                }
            }
            return true;
        }
    }
    var ruleParser = new RuleParser();

    function initConfig(){
        initView();
        _GM_registerMenuCommand(i18n(forceState==1?"enable":"disableSite"), ()=>{
            forceState=(forceState==1?0:1);
            storage.setItem("forceState_"+location.host, forceState);
            showTips(i18n(forceState==1?"disableSiteTips":"enableSiteTips"));
            if(!ruleParser.curSiteRule.url) location.reload();
        });
        _GM_registerMenuCommand(i18n("update"), ()=>{
            updateRules(()=>{
                showTips(i18n("updateSucc"));
                location.reload();
            },(rule,err)=>{
                showTips("Update "+rule.url+" rules fail!");
            });
            showTips(i18n("beginUpdate"));
        });

        var configCon,insertPos;
        if(ruleImportUrlReg.test(location.href)){
            document.addEventListener("click", e=>{
                if(e.target.tagName=="PRE"){
                    let nameAttr=e.target.getAttribute("name");
                    if(nameAttr=="pagetual" || nameAttr=="user-content-pagetual" || location.href.indexOf("greasyfork.org") != -1){
                        let rules=e.target.innerText.trim();
                        let isContent=/['"]name['"]/i.test(rules);
                        if(!window.confirm("Import?")) return;
                        if(isContent){
                            let ruleList=JSON.parse(`[${rules}]`);
                            for(let i in ruleList){
                                let hasRule = false;
                                let r = ruleList[i];
                                for(let j in ruleParser.customRules){
                                    if(ruleParser.customRules[j].name == r.name){
                                        ruleParser.customRules[j] = r;
                                        hasRule = true;
                                        break;
                                    }
                                }
                                if(!hasRule)ruleParser.customRules.push(r);
                            }
                            storage.setItem("customRules", ruleParser.customRules);
                            showTips(i18n("importSucc"));
                        }else{
                            rules=rules.split("\n");
                            let diff=false;
                            for(let c=0;c<rules.length;c++){
                                let urlArr=rules[c].split("|"),url,type=1;
                                if(urlArr.length==1){
                                    url=urlArr[0].trim();
                                    if(!/^http/.test(url)){
                                        showTips("Wrong url, check again!");
                                        return;
                                    }
                                }else if(urlArr.length==2){
                                    type=urlArr[0].trim();
                                    url=urlArr[1].trim();
                                    if(!/^http/.test(url)){
                                        showTips("Wrong url, check again!");
                                        return;
                                    }
                                }else{
                                    break;
                                }
                                let maxId=0,hasUrl=false;
                                if(!rulesData.urls){
                                    rulesData.urls=[];
                                    maxId=1;
                                }else{
                                    rulesData.urls.forEach(u=>{
                                        if(maxId<u.id){
                                            maxId=u.id;
                                        }
                                        if(u.url==url){
                                            hasUrl=true;
                                        }
                                    });
                                    if(hasUrl)break;
                                }
                                diff=true;
                                if(!rulesData.sort)rulesData.sort=[1];
                                rulesData.urls.push({id:maxId+1,url:url,type:type});
                                rulesData.sort.unshift(maxId+1);
                            }
                            if(!diff)return;
                            storage.setItem("rulesData", rulesData);

                            if(rulesData.urls)ruleUrls=ruleUrls.concat(rulesData.urls);
                            if(rulesData.sort){
                                let urls=[];
                                rulesData.sort.forEach(id=>{
                                    for(let s=0;s<ruleUrls.length;s++){
                                        if(id==ruleUrls[s].id){
                                            urls.push(ruleUrls[s]);
                                            break;
                                        }
                                    }
                                });
                                ruleUrls=urls;
                            }
                            updateRules(()=>{
                                showTips(i18n("updateSucc"));
                            },(rule,err)=>{
                                showTips("Update "+rule.url+" rules fail!");
                            });
                            showTips(i18n("beginUpdate"));
                        }
                    }
                }
            });
        }
        if(location.href==configPage){
            _GM_addStyle(`
             p>span:nth-child(1),p>span:nth-child(2),p>span:nth-child(3){
              cursor: pointer;
              user-select: none;
             }
             p>span:nth-child(1):hover,p>span:nth-child(2):hover,p>span:nth-child(3):hover{
              color:red;
             }
             .updateDate{
              cursor: pointer;
              user-select: none;
             }
             .updateDate:hover{
              color:red;
             }
            `);
            document.querySelector("[name='user-content-click2import']").innerText=i18n("click2ImportRule")
            configCon=document.querySelector(".markdown-body");
            insertPos=configCon.querySelector("hr");

            if(rulesData.urls && rulesData.urls.length>0){
                document.querySelector("pre[name='user-content-pagetual']").style.display="none";
                document.querySelector("p[name='user-content-click2import']").style.display="none";
            }
        }else return false;
        class Rulebar {
            init(ruleUrl){
                this.ruleUrl=ruleUrl;
                this.item=document.createElement("p");
                this.item.title=ruleUrl.type==0?"AutoPagerize Rules":"Pagetual Rules";
                this.item.dataset.id=this.ruleUrl.id;
                let url=document.createElement("span");
                url.innerHTML=ruleUrl.url;
                let up=document.createElement("span");
                up.innerHTML="↑ ";
                up.title=i18n("sortTitle");
                let down=document.createElement("span");
                down.innerHTML="↓ ";
                down.title=i18n("sortTitle");
                let del=document.createElement("span");
                del.innerHTML="× ";
                up.onclick=e=>{
                    this.moveUp();
                };
                down.onclick=e=>{
                    this.moveDown();
                };
                del.onclick=e=>{
                    this.del();
                };
                this.item.appendChild(up);
                this.item.appendChild(down);
                this.item.appendChild(del);
                this.item.appendChild(url);
                configCon.insertBefore(this.item, insertPos);
            }
            saveSort(){
                let sort=[];
                [].forEach.call(this.item.parentNode.querySelectorAll("p[data-id]"), i=>{
                    sort.push(i.dataset.id);
                });
                rulesData.sort=sort;
                storage.setItem("rulesData", rulesData);
            }
            moveUp(){
                let preE=this.item.previousElementSibling;
                if(preE.tagName=="P" && preE.children.length>1){
                    this.item.parentNode.insertBefore(this.item,preE);
                    this.saveSort();
                }
            }
            moveDown(){
                let nextE=this.item.nextElementSibling;
                if(nextE.tagName=="P" && nextE.children.length>1){
                    this.item.parentNode.insertBefore(nextE,this.item);
                    this.saveSort();
                }
            }
            del(){
                if(this.ruleUrl.id<2){
                    showTips(i18n("cantDel"));
                }else if(window.confirm(i18n("confirmDel"))){
                    for(let u=0;u<rulesData.urls.length;u++){
                        if(this.ruleUrl.id==rulesData.urls[u].id){
                            rulesData.urls.splice(u,1);
                            break;
                        }
                    }
                    for(let u=0;u<rulesData.sort.length;u++){
                        if(this.ruleUrl.id==rulesData.sort[u]){
                            rulesData.sort.splice(u,1);
                            break;
                        }
                    }
                    storage.setItem("rulesData", rulesData);
                    ruleParser.rules=ruleParser.rules.filter(item=>{return item.from!=this.ruleUrl.id});
                    storage.setItem("rules", ruleParser.rules);
                    this.item.parentNode.removeChild(this.item);
                    //location.reload();
                }
            }
        }
        let updateP=document.createElement("p"),i=0;
        let now=new Date().getTime(),inUpdate=false;


        let pastDate=(new Date(updateDate)).toString(),passStr;
        let passTime=(now-updateDate)/1000;
        if(isNaN(passTime)){
            passStr=i18n("firstUpdate");
        }else if(passTime<60){
            passStr=i18n("passSec", parseInt(passTime))+" ← "+i18n("click2update");
        }else if(passTime<60*60){
            passStr=i18n("passMin", parseInt(passTime/60))+" ← "+i18n("click2update");
        }else if(passTime<60*60*24){
            passStr=i18n("passHour", parseInt(passTime/3600))+" ← "+i18n("click2update");
        }else{
            passStr=i18n("passDay", parseInt(passTime/86400))+" ← "+i18n("click2update");
        }


        updateP.className="updateDate";
        updateP.innerHTML=passStr;
        updateP.title=i18n("update")+" - "+pastDate;
        updateP.onclick=e=>{
            updateRules(()=>{
                showTips(i18n("updateSucc"));
                updateP.innerHTML=i18n("passSec", 0);
                updateP.title=i18n("update");
            },(rule,err)=>{
                showTips("Update "+rule.url+" rules fail!");
            });
            showTips(i18n("beginUpdate"));
        };
        configCon.insertBefore(updateP, insertPos);
        if(ruleUrls){
            ruleUrls.forEach(ruleUrl=>{
                var rulebar=new Rulebar();
                rulebar.init(ruleUrl);
            });
        }
        let customUrlsTitle=document.createElement("h2");
        customUrlsTitle.innerHTML=i18n("customUrls");
        configCon.insertBefore(customUrlsTitle, insertPos);
        let customUrlsInput=document.createElement("textarea");
        customUrlsInput.style.width="100%";
        customUrlsInput.placeholder="0 | http://wedata.net/databases/AutoPagerize/items_all.json";
        configCon.insertBefore(customUrlsInput, insertPos);

        let upBtnImgTitle=document.createElement("h2");
        upBtnImgTitle.innerHTML=i18n("upBtnImg");
        upBtnImgTitle.style.width="50%";
        upBtnImgTitle.style.float="left";
        let upBtnImgInput=document.createElement("input");
        upBtnImgInput.style.width="100%";
        upBtnImgInput.placeholder="data:image/png;base64,UpBtn";
        upBtnImgInput.value=rulesData.upBtnImg||'';
        upBtnImgTitle.appendChild(upBtnImgInput);
        configCon.insertBefore(upBtnImgTitle, insertPos);

        let downBtnImgTitle=document.createElement("h2");
        downBtnImgTitle.innerHTML=i18n("downBtnImg");
        downBtnImgTitle.style.width="50%";
        downBtnImgTitle.style.float="left";
        let downBtnImgInput=document.createElement("input");
        downBtnImgInput.style.width="100%";
        downBtnImgInput.placeholder="data:image/png;base64,DownBtn";
        downBtnImgInput.value=rulesData.downBtnImg||'';
        downBtnImgTitle.appendChild(downBtnImgInput);
        configCon.insertBefore(downBtnImgTitle, insertPos);

        let opacityTitle=document.createElement("h2");
        opacityTitle.innerHTML=i18n("opacity");
        let opacityInput=document.createElement("input");
        opacityInput.value=rulesData.opacity*100;
        opacityInput.type="number";
        opacityInput.style.width="50px";
        opacityInput.style.margin="0 0 0 10px";
        opacityTitle.appendChild(opacityInput);
        configCon.insertBefore(opacityTitle, insertPos);

        let configTable=document.createElement("table");
        configTable.appendChild(document.createElement("tbody"));
        configCon.insertBefore(configTable, insertPos);
        function createCheckbox(innerText, val, tag, parentCheck, otherType){
            let title=document.createElement(tag||"h3");
            title.innerHTML=innerText;
            let input=document.createElement("input");
            input.type=otherType||"checkbox";
            input.style.width="50px";
            input.style.height="20px";
            input.value=val;
            input.checked=val;
            let td=document.createElement("td");
            td.appendChild(input);
            if(parentCheck){
                td.appendChild(title);
                let parent=parentCheck.parentNode.nextElementSibling;
                let tr=parent.querySelector("tr");
                if(!tr){
                    tr=document.createElement("tr");
                    parent.appendChild(tr);
                }
                tr.appendChild(td);
                if(!parentCheck.checked){
                    td.style.display="none";
                }
                parentCheck.addEventListener("click", e=>{
                    td.style.display=parentCheck.checked?"":"none";
                });
            }else{
                let tr=document.createElement("tr");
                tr.appendChild(td);
                td=document.createElement("td");
                td.appendChild(title);
                tr.appendChild(td);
                configTable.children[0].appendChild(tr);
            }
            return input;
        }

        let enableWhiteListInput=createCheckbox(i18n("autoRun"), rulesData.enableWhiteList!=true);
        let enableDebugInput=createCheckbox(i18n("enableDebug"), rulesData.enableDebug!=false);
        let enableHistoryInput=createCheckbox(i18n("enableHistory"), rulesData.enableHistory===true);
        let openInNewTabInput=createCheckbox(i18n("openInNewTab"), rulesData.openInNewTab!=false);
        let initRunInput=createCheckbox(i18n("initRun"), rulesData.initRun!=false);
        let preloadInput=createCheckbox(i18n("preload"), rulesData.preload!=false);
        let dbClick2StopInput=createCheckbox(i18n("dbClick2Stop"), rulesData.dbClick2Stop);
        let hideBarInput=createCheckbox(i18n("hideBar"), rulesData.hideBar, "h4", dbClick2StopInput);
        let dbClick2StopCtrlInput=createCheckbox(i18n("dbClick2StopCtrl"), rulesData.dbClick2StopCtrl, "h4", dbClick2StopInput);
        let dbClick2StopAltInput=createCheckbox(i18n("dbClick2StopAlt"), rulesData.dbClick2StopAlt, "h4", dbClick2StopInput);
        let dbClick2StopShiftInput=createCheckbox(i18n("dbClick2StopShift"), rulesData.dbClick2StopShift, "h4", dbClick2StopInput);
        let dbClick2StopMetaInput=createCheckbox(i18n("dbClick2StopMeta"), rulesData.dbClick2StopMeta, "h4", dbClick2StopInput);
        let dbClick2StopKeyInput=createCheckbox(i18n("dbClick2StopKey"), rulesData.dbClick2StopKey, "h4", dbClick2StopInput, "text");
        dbClick2StopKeyInput.setAttribute("maxlength", "1");

        let customRulesTitle=document.createElement("h2");
        customRulesTitle.innerHTML=i18n("customRules");
        configCon.insertBefore(customRulesTitle, insertPos);
        let customRulesInput=document.createElement("textarea");
        configCon.insertBefore(customRulesInput, insertPos);
        if(rulesData.editTemp){
            if(!ruleParser.customRules){
                ruleParser.customRules=[];
            }
            for(let i in ruleParser.customRules){
                if(ruleParser.customRules[i].url==rulesData.editTemp.url){
                    ruleParser.customRules.splice(i, 1);
                    break;
                }
            }
            ruleParser.customRules.unshift(rulesData.editTemp);
            rulesData.editTemp=null;
            storage.setItem("rulesData", rulesData);
            customRulesInput.previousElementSibling.scrollIntoView();
        }
        customRulesInput.style.width="100%";
        customRulesInput.style.height="500px";
        customRulesInput.placeholder=`[\n  {\n    "name":"yande",\n    "action":"0",\n    "url":"^https:\/\/yande\\.re\/",\n    "pageElement":"ul#post-list-posts>li",\n    "nextLink":"a.next_page",\n    "css":".javascript-hide {display: inline-block !important;}"\n  },\n  {\n    "name":"tieba",\n    "action":"1",\n    "url":"^https:\/\/tieba\\.baidu.com\/f\\?kw=",\n    "pageElement":"ul#thread_list>li",\n    "nextLink":".next.pagination-item "\n  }\n]`;
        customRulesInput.value=getFormatJSON(ruleParser.customRules);
        let blacklistInput=document.createElement("textarea");
        blacklistInput.style.width="100%";
        blacklistInput.style.height="500px";
        blacklistInput.style.display="none";
        blacklistInput.placeholder="http://*.xxx.com/*/y";
        blacklistInput.value=rulesData.blacklist?rulesData.blacklist.join("\n"):"";
        let blacklistBtn=document.createElement("button");
        blacklistBtn.innerText=i18n("editBlacklist");
        blacklistBtn.style.width="100%";
        blacklistBtn.onclick=e=>{
            blacklistInput.style.display=blacklistInput.style.display=="none"?"":"none";
        };
        configCon.insertBefore(blacklistBtn, insertPos);
        configCon.insertBefore(blacklistInput, insertPos);
        let saveBtn=document.createElement("button");
        saveBtn.innerHTML=i18n("save");
        saveBtn.style.width="100%";
        configCon.insertBefore(saveBtn, insertPos);
        saveBtn.onclick=e=>{
            try{
                storage.setItem("hpRules", []);
                if(customRulesInput.value==""){
                    storage.setItem("customRules", "");
                }else{
                    let customRules=JSON.parse(customRulesInput.value);
                    if(Array && Array.isArray && !Array.isArray(customRules)){
                        showTips("Rules must be a Array!");
                        return;
                    }
                    debug(customRules);
                    storage.setItem("customRules", customRules);
                }
            }catch(e){
                debug(e);
                showTips("JSON error, check again!");
                return;
            }
            rulesData.opacity=opacityInput.value/100;
            rulesData.blacklist=blacklistInput.value?blacklistInput.value.split("\n"):"";
            rulesData.hideBar=hideBarInput.checked;
            rulesData.dbClick2Stop=dbClick2StopInput.checked;
            rulesData.enableWhiteList=!enableWhiteListInput.checked;
            rulesData.enableDebug=enableDebugInput.checked;
            rulesData.enableHistory=enableHistoryInput.checked;
            rulesData.openInNewTab=openInNewTabInput.checked;
            rulesData.initRun=initRunInput.checked;
            rulesData.preload=preloadInput.checked;
            rulesData.upBtnImg=upBtnImgInput.value;
            rulesData.downBtnImg=downBtnImgInput.value;
            rulesData.dbClick2StopCtrl=dbClick2StopCtrlInput.checked;
            rulesData.dbClick2StopAlt=dbClick2StopAltInput.checked;
            rulesData.dbClick2StopShift=dbClick2StopShiftInput.checked;
            rulesData.dbClick2StopMeta=dbClick2StopMetaInput.checked;
            rulesData.dbClick2StopKey=dbClick2StopKeyInput.value;
            storage.setItem("rulesData", rulesData);
            let customUrls=customUrlsInput.value.trim();
            if(customUrls){
                customUrls=customUrls.split(/\n/);
                for(let c=0;c<customUrls.length;c++){
                    let urlArr=customUrls[c].split("|"),url,type=1;
                    if(urlArr.length==1){
                        url=urlArr[0].trim();
                        if(!/^http/.test(url)){
                            showTips("Wrong url, check again!");
                            return;
                        }
                    }else if(urlArr.length==2){
                        type=urlArr[0].trim();
                        url=urlArr[1].trim();
                        if(!/^http/.test(url)){
                            showTips("Wrong url, check again!");
                            return;
                        }
                    }else{
                        break;
                    }
                    let maxId=0,hasUrl=false;
                    if(!rulesData.urls){
                        rulesData.urls=[];
                        maxId=1;
                    }else{
                        rulesData.urls.forEach(u=>{
                            if(maxId<u.id){
                                maxId=u.id;
                            }
                            if(u.url==url){
                                hasUrl=true;
                            }
                        });
                        if(hasUrl)break;
                    }
                    if(!rulesData.sort)rulesData.sort=[1];
                    rulesData.urls.push({id:maxId+1,url:url,type:type});
                    rulesData.sort.push(maxId+1);
                    storage.setItem("rulesData", rulesData);
                }
            }
            showTips("The settings are saved");
            location.reload();
        };
        return true;
    }

    var inUpdate=false;
    function updateRules(success,fail){
        if(inUpdate)return;
        inUpdate=true;
        let ruleIndex=ruleUrls.length-1;
        storage.setItem("hpRules", []);
        function addNextRule(){
            if(ruleIndex<0){
                let now=new Date().getTime();
                storage.setItem("ruleLastUpdate", now);
                storage.setItem("rules", ruleParser.rules);
                inUpdate=false;
                success();
            }else{
                let rule=ruleUrls[ruleIndex--];
                ruleParser.addRuleByUrl(rule.url, rule.type, rule.id, (json,err)=>{
                    if(!json){
                        fail(rule,err);
                    }
                    addNextRule();
                })
            }
        }
        addNextRule();
    }

    function objIsArr(obj) {
        return obj &&
            typeof obj === 'object' &&
            typeof obj.length === 'number' &&
            !(obj.propertyIsEnumerable('length'));
    }

    function isVisible(el, win) {
        if(!el.offsetParent)return false;
        var loopable = true,
            visible = el.tagName && win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
        while(loopable && visible) {
            el = el.parentNode;

            if(el && el.tagName && el.tagName!="BODY") {
                visible = win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
            }else {
                loopable = false;
            }
        }
        return visible;
    }

    function getElementTop(ele) {
        var actualTop = ele.offsetTop;
        var current = ele.offsetParent;
        while (current) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }

    function getFormatJSON(obj){
        if(!objIsArr(obj))return "";
        let ret="[\n";
        let len=obj.length,i=0,isLast;
        obj.forEach(item=>{
            ret+="  {\n";
            let iLen=Object.keys(item).length,j=0;
            for(let key in item){
                isLast=(++j)==iLen;
                let value=item[key];
                if(objIsArr(value)){
                    let vstr="[",v=0,vIsLast=false;
                    value.forEach(vi=>{
                        vIsLast=(++v)==value.length;
                        vstr+="\""+vi.replace(/\\/g,"\\\\")+"\""+(vIsLast?"":",");
                    });
                    vstr+="]";
                    ret+="    \""+key+"\":"+vstr+""+(isLast?"":",")+"\n";
                }else{
                    if(typeof value=="string"){
                        value=value.replace(/\\/g,"\\\\").replace(/"/g,"\\\"");
                        value="\""+value+"\"";
                    }
                    ret+="    \""+key+"\":"+value+""+(isLast?"":",")+"\n";
                }
            }
            isLast=(++i)==len;
            ret+="  }"+(isLast?"":",")+"\n";
        });
        ret+="]";
        return ret;
    }

    function globMatch(first, second) {
        if (first.length == 0 && second.length == 0){
            return true;
        }

        if (first.length > 1 && first[0] == '*' &&
            second.length == 0){
            return false;
        }

        if ((first.length > 1 && first[0] == '?') ||
            (first.length != 0 && second.length != 0 &&
             first[0] == second[0])){
            return globMatch(first.substring(1),
                         second.substring(1));
        }

        if (first.length > 0 && first[0] == '*'){
            return globMatch(first.substring(1), second) ||
                globMatch(first, second.substring(1));
        }

        return false;
    }

    function initRules(callback) {
        /*0 wedata格式，1 pagetual格式*/
        ruleUrls=[
            {
                id:1,
                url:'http://wedata.net/databases/AutoPagerize/items_all.json',
                type:0,
            }
        ];var i=0,j=0;

        ruleParser.initSavedRules(()=>{
            storage.getItem("rulesData", data=>{
                if(data){
                    rulesData=data;
                    if(data.urls)ruleUrls=ruleUrls.concat(data.urls);
                    if(data.sort){
                        let urls=[];
                        data.sort.forEach(id=>{
                            for(let s=0;s<ruleUrls.length;s++){
                                if(id==ruleUrls[s].id){
                                    urls.push(ruleUrls[s]);
                                    break;
                                }
                            }
                        });
                        ruleUrls=urls;
                    }
                }
                let upBtnImg=rulesData.upBtnImg,downBtnImg=rulesData.downBtnImg;
                if(upBtnImg && downBtnImg){
                    downSvgCSS=downSvgCSS.replace("transform: rotate(180deg);","");
                }else if(upBtnImg && !downBtnImg){
                    downBtnImg=upBtnImg;
                }else if(downBtnImg && !upBtnImg){
                    upBtnImg=downBtnImg;
                }
                if(upBtnImg){
                    upSvg=`<img src="${upBtnImg}"/>`;
                }
                if(downBtnImg){
                    downSvg=`<img src="${downBtnImg}"/>`;
                }
                if(typeof(rulesData.opacity)=="undefined"){
                    rulesData.opacity=0.3;
                }
                if(typeof(rulesData.hideBar)=="undefined"){
                    rulesData.hideBar=false;
                }
                if(typeof(rulesData.dbClick2Stop)=="undefined"){
                    rulesData.dbClick2Stop=true;
                }
                if(typeof(rulesData.enableWhiteList)=="undefined"){
                    rulesData.enableWhiteList=false;
                }
                if(typeof(rulesData.enableHistory)=="undefined"){
                    rulesData.enableHistory=false;
                }
                if(typeof(rulesData.openInNewTab)=="undefined"){
                    rulesData.openInNewTab=true;
                }
                if(typeof(rulesData.enableDebug)=="undefined"){
                    rulesData.enableDebug=true;
                }
                if(typeof(rulesData.initRun)=="undefined"){
                    rulesData.initRun=true;
                }
                if(typeof(rulesData.preload)=="undefined"){
                    rulesData.preload=true;
                }
                if(rulesData.blacklist && rulesData.blacklist.length>0){
                    for(let b in rulesData.blacklist){
                        let curGlob=rulesData.blacklist[b];
                        if(globMatch(curGlob, location.href)){
                            return;
                        }
                    }
                }
                enableDebug=rulesData.enableDebug;
                storage.getItem("forceState_"+location.host, v=>{
                    storage.getItem("ruleLastUpdate", date=>{
                        if(typeof(v)=="undefined"){
                            v=(rulesData.enableWhiteList?1:0);
                        }
                        forceState=v;
                        updateDate=date;
                        if(initConfig())return;
                        if(forceState==1)return;
                        let now=new Date().getTime();
                        if(!date || now-date>2*24*60*60*1000){
                            updateRules(()=>{
                            },(rule,err)=>{});
                        }
                        callback();
                    });
                });
            });
        });
    }

    function requestDoc(url, callback){
        _GM_xmlhttpRequest({
            url: url,
            method: 'GET',
            overrideMimeType: 'text/html;charset='+document.charset,
            headers: {
                'Referer': location.href,
                "Content-Type": "text/html;charset="+document.charset,
            },
            timeout: 5000,
            onload: function(res) {
                var doc=null,response=res.response;
                let preCode=ruleParser.curSiteRule.pageElementPre || ruleParser.curSiteRule.pagePre;
                if(preCode){
                    try{
                        response=Function("response",'"use strict";' + preCode)(response);
                    }catch(e){
                        debug(e);
                    }
                }
                try {
                    doc=document.implementation.createHTMLDocument('');
                    doc.documentElement.innerHTML=response;
                }
                catch (e) {
                    debug('parse error'+e.toString());
                }
                let pageElement=ruleParser.getPageElement(doc);
                if(inCors && (!pageElement || pageElement.length==0)){
                    ruleParser.curSiteRule.pageElement=allOfBody;
                    pageElement=ruleParser.getPageElement(doc);
                    ruleParser.getInsert(true);
                }
                //只有1的話怕不是圖片哦
                if(pageElement && (pageElement.length>1 || (pageElement.length==1 && pageElement[0].tagName!="IMG") )){
                    let result=ruleParser.insertPage(doc, pageElement, url, callback, false);
                    ruleParser.curSiteRule.action=0;
                    if(!result){
                        ruleParser.curSiteRule.action=1;
                        requestFromIframe(url, (doc, eles)=>{
                            loadPageOver();
                            if(eles){
                                ruleParser.insertPage(doc, eles, url, callback, true);
                            }
                        });
                    }
                }else if(ruleParser.curSiteRule.singleUrl || curPage==1){
                    ruleParser.curSiteRule.action=1;
                    requestFromIframe(url, (doc, eles)=>{
                        loadPageOver();
                        if(eles){
                            ruleParser.insertPage(doc, eles, url, callback, true);
                        }
                    });
                }else{
                    isPause=true;
                    callback(false);
                }
            },
            onerror: function(e){
                debug(e);
                callback(false);
            },
            ontimeout: function(e){
                debug(e);
                callback(false);
            }
        });
    }

    function initPage(){
        ruleParser.initPage(()=>{
            if(ruleParser.nextLinkHref){
                let isJs=/^(javascript|#)/.test(ruleParser.nextLinkHref.replace(location.href,""));
                if(!isJs){
                    let inForce=(forceState == 2 || forceState == 3);
                    _GM_registerMenuCommand(i18n(inForce?"cancelForceIframe":"forceIframe"), ()=>{
                        if(inForce){
                            storage.setItem("forceState_"+location.host, "");
                        }else{
                            let _state=ruleParser.curSiteRule.action>0 || confirm(i18n("forceAllBody"))?2:3;
                            storage.setItem("forceState_"+location.host, _state);
                        }
                        location.reload();
                    });
                }
                _GM_registerMenuCommand(i18n("loadNow"), ()=>{
                    let loadNum=window.prompt(i18n("loadConfirm"), "1");
                    if(loadNum==="" || loadNum===null)return;
                    autoLoadNum=Math.abs(parseInt(loadNum));
                    nextPage();
                });
            }
            initListener();
            if(rulesData.initRun && ruleParser.curSiteRule.initRun!=0)nextPage();
        });
    }

    var pageBarStyle;
    function initView(){
        _GM_addStyle(`
         .pagetual_pageBar.stop {
           -webkit-filter: invert(100%);
           filter: invert(100%);
           opacity: 1!important;
         }
         .pagetual_pageBar.hide {
           display: none!important;
         }
         .pagetual_pageBar:hover {
           opacity: 1!important;
         }
         .pagetual_pageBar span {
           vertical-align: super;
         }

         .pagetual_pageBar span>svg:hover {
           animation: touhouAni 1s infinite;
         }
         .pagetual_pageBar .pagetual_pageNum{
           color: #55555f;
         }
         .pagetual_pageBar .pagetual_pageNum:hover{
           color: #ff6464;
         }
         .pagetual_tipsWords{
           font-size: 50px;
           font-weight: bold;
           font-family: "黑体", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
             "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
             "Segoe UI Emoji", "Segoe UI Symbol";
           color: #ffffff;
           height: 70px;
           line-height: 70px;
           position: fixed;
           left: 50%;
           top: 10%;
           margin-left: -150px;
           padding: 0 10px;
           z-index: 999999999;
           background-color: #000;
           border: 1px solid black;
           border-radius: 10px;
           opacity: 0;
           filter: alpha(opacity=65);
           box-shadow: 5px 5px 20px 0px #000;
           -moz-transition:opacity 0.3s ease-in-out 0s;
           -webkit-transition:opacity 0.3s ease-in-out 0s;
           transition:opacity 0.3s ease-in-out 0s;
           pointer-events: none;
         }

         @keyframes touhouAni{
           from {transform: rotate(0deg) scale3d(1.2, 1.2, 1.2);}
                to {transform: rotate(360deg);}
         }
         @-webkit-keyframes touhouAni{
           from {transform: rotate(0deg) scale3d(1.2, 1.2, 1.2);}
                to {transform: rotate(360deg);}
         }
         .pagetual_loading {
           width: 50px;
           height: 50px;
           margin: 10px auto;
           border-radius: 100%;
           -webkit-animation: pagetual_loading_scaleout 1.0s infinite ease-in-out;
           animation: pagetual_loading_scaleout 1.0s infinite ease-in-out;
         }
         @-webkit-keyframes pagetual_loading_scaleout {
           0% { -webkit-transform: scale(0.0) }
           100% {
             -webkit-transform: scale(1.0);
             opacity: 0;
           }
         }
         @keyframes pagetual_loading_scaleout {
           0% {
             transform: scale(0.0);
             -webkit-transform: scale(0.0);
           } 100% {
           transform: scale(1.0);
             -webkit-transform: scale(1.0);
             opacity: 0;
           }
         }
        `);
        pageBarStyle=`line-height:1;opacity:${rulesData.opacity};display:${rulesData.opacity==0?"none":"block"};padding:0;box-shadow: 0px 0px 10px 0px #000000aa;border-radius: 20px;background-color: rgb(240 240 240 / 80%);font-size: 30px;visibility: visible; position: initial; width: auto; height: 30px; float: none; clear: both; margin: 5px auto; text-align: center;`;
    }
    var loadingDiv=document.createElement("div");
    loadingDiv.style.cssText="cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px auto;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;origin-trial-test-property: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: initial;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;z-index: 2147483647;";
    loadingDiv.innerHTML=`<p style="display: block; position: initial; margin: auto auto 5px auto; shape-rendering: auto; vertical-align: middle; visibility: visible; width: initial; height: initial; text-align: center; color: #6e6e6e;">${i18n("loadingText")}</p><div class="pagetual_loading"><svg width="50" height="50" style="position:relative;cursor: pointer;width: 50px;height: 50px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6364"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#6e6e6e" p-id="6365"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#6e6e6e" p-id="6366"></path></svg></div>`;
    var loadingCSS=`display: block; position: initial; margin: auto auto 5px auto; shape-rendering: auto; vertical-align: middle; visibility: visible; width: initial; height: initial; text-align: center; color: #6e6e6e;`;

    var upSvg=`<svg width="30" height="30" style="display:initial;position:absolute;cursor: pointer;margin: 0 -45px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6364"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a" p-id="6365"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a" p-id="6366"></path></svg>`;
    var upSvgCSS=`display:initial;position:absolute;cursor: pointer;margin: 0 -45px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;`;
    var downSvg=`<svg width="30" height="30" style="display:initial;position:absolute;cursor: pointer;margin: 0 15px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;transform: rotate(180deg);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6364"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a" p-id="6365"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a" p-id="6366"></path></svg>`;
    var downSvgCSS=`display:initial;position:absolute;cursor: pointer;margin: 0 15px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;transform: rotate(180deg);`;

    var initStyle=`display: contents;right: unset;left: unset;top: unset;bottom: unset;inset: unset;clear: both;cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px auto;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: relative;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;`;
    var pageTextStyle=`line-height: 30px;text-decoration: none;user-select: none;visibility: visible;position: initial;width: auto;max-width: 80%; white-space: nowrap; text-overflow: ellipsis;overflow: hidden;height: auto;float: none;clear: both;margin: 0px auto;text-align: center;display: inline-block;font-weight: bold;font-style: normal;font-size: 16px;letter-spacing: initial;vertical-align: top;color: rgb(85, 85, 95)!important;`;

    var tipsWords=document.createElement("div");
    tipsWords.className="pagetual_tipsWords";

    var isPause=false,isLoading=false,curPage=1,forceState=0,bottomGap=1000,autoLoadNum=-1;

    function changeStop(stop, hide){
        isPause=stop;
        [].forEach.call(document.querySelectorAll(".pagetual_pageBar"), bar=>{
            if(isPause){
                bar.classList.add("stop");
                if(hide)bar.classList.add("hide");
            }else{
                bar.classList.remove("stop");
                if(hide)bar.classList.remove("hide");
            }
        });
    }

    function isInViewPort(element) {
        if(!element.parentNode)return false;
        if(_unsafeWindow.getComputedStyle(element).display=="none")return false;
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {
            top,
            right,
            bottom,
            left,
        } = element.getBoundingClientRect();

        return (
            top >= 0 &&
            left >= 0 &&
            right <= viewWidth + 1 &&
            bottom <= viewHeight * 2
        );
    }

    var urlChanged=false;
    var _wr = function(type) {
        var orig = history[type];
        return function() {
            var rv = orig.apply(this, arguments);
            var e = new Event(type);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _wr('pushState');
    window.addEventListener('pushState', function(e) {
        urlChanged=true;
        isPause=true;
        setTimeout(()=>{
            if(location.href==configPage){
                location.reload();
            }
        },1);
    });

    function initListener(){
        let loadmoreBtn,loading=true,lastScroll=0,checkLoadMoreTimes=0;
        let checkLoadMore=setInterval(()=>{
            loadmoreBtn=getLoadMore(document);
            if(loadmoreBtn && isVisible(loadmoreBtn, _unsafeWindow)){
                loading=false;
                clearInterval(checkLoadMore);
            }else if(checkLoadMoreTimes>10){
                clearInterval(checkLoadMore);
            }
        },300);
        let checkScrollReach=()=>{
            let scrolly=window.scrollY;
            let windowHeight=window.innerHeight || document.documentElement.clientHeight;
            let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(scrollH-scrolly-windowHeight<bottomGap){
                nextPage();
            }
        };
        let scrollHandler = e=>{
            if(urlChanged){
                ruleParser.initPage(()=>{
                    if(ruleParser.nextLinkHref)initView();
                });
                urlChanged=false;
                isPause=false;
            }
            if(isPause)return;
            if(!loading){
                if(!loadmoreBtn || !loadmoreBtn.parentNode){
                    loadmoreBtn=getLoadMore(document);
                }
                if(loadmoreBtn){
                    if(isInViewPort(loadmoreBtn)){
                        emuClick(loadmoreBtn);
                        loading=true;
                        setTimeout(()=>{loading=false},200);
                    }
                }else{
                    loading=true;
                    setTimeout(()=>{loading=false},200);
                }
            }
            if(!isLoading){
                checkScrollReach();
            }
            if(ruleParser.curSiteRule.lockScroll){
                let curScroll=document.body.scrollTop||document.documentElement.scrollTop;
                if(lastScroll!=0 && isLoading && Math.abs(lastScroll-curScroll)>100){
                    document.body.scrollTop=lastScroll;
                    document.documentElement.scrollTop=lastScroll;
                }else{
                    lastScroll=curScroll;
                }
            }
        };
        if(!ruleParser.curSiteRule.wheel){
            document.addEventListener('scroll', scrollHandler, true);
        }
        document.addEventListener('wheel', scrollHandler, true);
        document.addEventListener('dblclick', e=>{
            if(forceState==1 || e.target.tagName=='INPUT' || e.target.tagName=='TEXTAREA') return;
            if(!rulesData.dbClick2StopKey){
                if((rulesData.dbClick2StopCtrl && !e.ctrlKey) ||
                   (rulesData.dbClick2StopAlt && !e.altKey) ||
                   (rulesData.dbClick2StopShift && !e.shiftKey) ||
                   (rulesData.dbClick2StopMeta && !e.metaKey)){
                    return;
                }
            }
            if(e.target.tagName!="BODY"){
                let selStr=document.getSelection().toString();
                if(selStr){
                    return;
                }
            }
            if(rulesData.dbClick2Stop && (ruleParser.nextLinkHref || loadmoreBtn)){
                setTimeout(()=>{
                    changeStop(!isPause, rulesData.hideBar);
                    if(!isPause){
                        checkScrollReach();
                    }
                    showTips(i18n(isPause?"disable":"enable"));
                },10);
            }
        });
        if(rulesData.dbClick2StopKey){
            document.addEventListener('keydown', e=>{
                if((rulesData.dbClick2StopCtrl && !e.ctrlKey) ||
                   (rulesData.dbClick2StopAlt && !e.altKey) ||
                   (rulesData.dbClick2StopShift && !e.shiftKey) ||
                   (rulesData.dbClick2StopMeta && !e.metaKey)){
                    return;
                }
                var key = String.fromCharCode(e.keyCode).toLowerCase();
                if(rulesData.dbClick2StopKey.toLowerCase()==key){
                    forceState=(forceState==1?0:1);
                    showTips(i18n(forceState==1?"disableSiteTips":"enableSiteTips"));
                    if(!ruleParser.curSiteRule.url) {
                        storage.setItem("forceState_"+location.host, forceState);
                        location.reload();
                    }
                }
            });
        }
    }

    function showTips(content, wordColor, backColor){
        document.body.appendChild(tipsWords);
        tipsWords.style.opacity=0.8;
        tipsWords.innerText=content;
        tipsWords.style.marginLeft=-tipsWords.offsetWidth/2+"px";
        tipsWords.style.color=wordColor||0xFFFFFF;
        tipsWords.style.backgroundColor=backColor||0x000;
        setTimeout(()=>{tipsWords.style.opacity=0},1000);
    }

    function getLoadMore(doc){
        if(ruleParser.curSiteRule.loadMore==="")return null;
        let btnSel=ruleParser.curSiteRule.loadMore||".LoadMore,.load-more,.button-show-more,button[data-testid='more-results-button']",loadmoreBtn;
        if(btnSel){
            try{
                loadmoreBtn=doc.querySelector(btnSel);
            }catch(e){
                loadmoreBtn=getElementByXpath(btnSel,doc,doc);
            }
        }
        if(!loadmoreBtn){
            let buttons=doc.querySelectorAll("input,button,a,div[onclick]"),loadmoreReg=/^\s*(加载更多|加載更多|load\s*more|もっと読み込む)\s*$/i;
            for(let i=0;i<buttons.length;i++){
                let button=buttons[i];
                if(button && loadmoreReg.test(button.innerText)){
                    loadmoreBtn=button;
                    break;
                }
            }
        }
        if(loadmoreBtn && !ruleParser.curSiteRule.loadMore && loadmoreBtn.href && !/^(javascript|#)/.test(loadmoreBtn.href))loadmoreBtn=null;
        return loadmoreBtn;
    }

    var hasPageNum=true;
    function createPageBar(url){
        let insert=ruleParser.getInsert();
        if(!insert || !insert.parentNode)return;
        curPage++;
        let example=ruleParser.curSiteRule.insertPos==2?insert.children[0]:(insert.parentNode.children[parseInt(insert.parentNode.children.length/2)]||insert);
        if(!example || !example.parentNode)example=insert;
        let inTable=example.parentNode.tagName=="TABLE" ||
            example.tagName=="TR" ||
            example.tagName=="TBODY" ||
            (example.previousElementSibling && example.previousElementSibling.tagName=="TR") ||
            (example.previousElementSibling && example.previousElementSibling.tagName=="TBODY");
        let inLi=example.tagName=="LI" || (example.previousElementSibling && example.previousElementSibling.tagName=="LI");
        if(forceState==2){
            inTable=inLi=false;
        }
        let pageBar=document.createElement(inTable?"tr":(inLi?"li":"div"));
        let upSpan=document.createElement("span");
        let downSpan=document.createElement("span");
        let pageText=document.createElement("a");
        let pageNum;
        pageBar.className="pagetual_pageBar";
        pageBar.id="pagetual_pageBar";
        if(isPause){
            pageBar.classList.add("stop");
        }
        pageBar.style.cssText=pageBarStyle;
        pageBar.title=i18n(isPause?"enable":"disable");
        upSpan.innerHTML=upSvg;
        upSpan.children[0].style.cssText=upSvgCSS;
        upSpan.title=i18n("toTop");
        downSpan.innerHTML=downSvg;
        downSpan.children[0].style.cssText=downSvgCSS;
        downSpan.title=i18n("toBottom");
        upSpan.style.cssText=initStyle;
        downSpan.style.cssText=initStyle;
        pageText.href=url;
        pageText.style.cssText=pageTextStyle;
        pageText.title=i18n("current");
        pageBar.appendChild(upSpan);
        pageBar.appendChild(pageText);
        if(ruleParser.nextTitle){
            pageText.innerHTML=ruleParser.nextTitle+" ";
            pageText.title=ruleParser.nextTitle;
        }
        if(ruleParser.curSiteRule.pageNum || (hasPageNum && /[&\/\?](p=|page[=\/_-]?)\d+|[_-]\d+\./.test(url))){
            pageText.innerHTML+="Page ";
            pageNum=document.createElement("span");
            pageNum.innerText=curPage;
            pageNum.className="pagetual_pageNum";
            pageNum.title=i18n("inputPageNum");
            pageNum.style.cssText=pageTextStyle;
            pageNum.style.cursor="pointer";
            pageNum.style.color="";
            pageNum.style.marginLeft="5px";
            pageNum.addEventListener("click", e=>{
                let pageInput=prompt(i18n("inputPageNum"), "1");
                if(pageInput){
                    let pageLink=ruleParser.getLinkByPage(url, pageInput);
                    if(pageLink){
                        _GM_openInTab(pageLink,{active:true});
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });
            pageBar.appendChild(pageNum);
        }else{
            pageText.innerHTML+="Page "+curPage;
            hasPageNum=false;
        }
        pageBar.appendChild(downSpan);
        let parentStyle=_unsafeWindow.getComputedStyle(example.parentNode);
        let parentWidth=example.parentNode.scrollWidth||parseInt(parentStyle.width);
        pageBar.style.width=parentWidth-parseInt(parentStyle.paddingLeft)-parseInt(parentStyle.paddingRight)-10+"px";
        if(parentStyle.display=="grid" || parentStyle.display=="inline-grid"){
            pageBar.style.gridColumnStart=1;
            pageBar.style.gridColumnEnd=1+parseInt(example.parentNode.offsetWidth/example.offsetWidth);
        }
        if(inTable){
            example=(example.tagName=="TR" || example.tagName=="TBODY")?example:example.previousElementSibling;
            if(example.tagName=="TBODY")example=example.querySelector("tr");
            let preTr=example;
            while(preTr && preTr.children.length==0)preTr=preTr.previousElementSibling;
            if(preTr)example=preTr;
            let tdNum=0;
            [].forEach.call(example.children, el=>{
                if(el.tagName=="TD" || el.tagName=="TH"){
                    tdNum+=el.colSpan||1;
                }
            });
            pageBar.style.display="table-row";
            pageBar.style.backgroundColor="unset";
            pageBar.style.lineHeight="20px";
            pageBar.style.boxShadow="";
            let td=document.createElement("td");
            td.colSpan=tdNum||1;
            let inTd=document.createElement("div");
            inTd.style.backgroundColor="rgb(240 240 240 / 80%)";
            inTd.style.borderRadius="20px";
            inTd.style.padding="0 0";
            inTd.style.margin="10px";
            inTd.style.lineHeight="20px";
            inTd.style.textAlign="center";
            inTd.style.boxShadow="rgb(0 0 0 / 67%) 0px 0px 10px 0px";
            inTd.appendChild(upSpan);
            inTd.appendChild(pageText);
            if(pageNum)inTd.appendChild(pageNum);
            inTd.appendChild(downSpan);
            td.appendChild(inTd);
            pageBar.appendChild(td);
        }else if(inLi){
            example=example.tagName=="LI"?example:example.previousElementSibling;
            pageBar.style.display="table-row";
            pageBar.style.backgroundColor="unset";
            pageBar.style.lineHeight="20px";
            pageBar.style.boxShadow="";
            let td=document.createElement("td");
            td.colSpan=example.children.length;
            let inTd=document.createElement("div");
            inTd.style.backgroundColor="rgb(240 240 240 / 80%)";
            inTd.style.borderRadius="20px";
            inTd.style.margin="10px"
            inTd.style.padding="0 0";
            inTd.style.textAlign="center";
            inTd.style.minWidth="150px";
            inTd.appendChild(upSpan);
            inTd.appendChild(pageText);
            inTd.style.width=parseInt(pageBar.style.width)-20+"px";
            inTd.style.boxShadow="rgb(0 0 0 / 67%) 0px 0px 10px 0px";
            if(pageNum)inTd.appendChild(pageNum);
            inTd.appendChild(downSpan);
            td.appendChild(inTd);
            pageBar.appendChild(td);
        }

        upSpan.addEventListener("click", e=>{
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            e.preventDefault();
            e.stopPropagation();
        });
        downSpan.addEventListener("click", e=>{
            changeStop(true);
            pageBar.title=i18n(isPause?"enable":"disable");
            document.body.scrollTop=9999999;
            document.documentElement.scrollTop=9999999;
            e.preventDefault();
            e.stopPropagation();
        });
        pageBar.addEventListener("click", e=>{
            changeStop(!isPause);
            pageBar.title=i18n(isPause?"enable":"disable");
        });
        pageText.addEventListener("click", e=>{
            e.stopPropagation();
        });
        ruleParser.insertElement(pageBar);
        if(ruleParser.curSiteRule.pageBar){
            try{
                Function("pageBar",'"use strict";' + ruleParser.curSiteRule.pageBar)(pageBar);
            }catch(e){
                debug(e);
            }
        }

        let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let posEle=pageBar.nextElementSibling||pageBar;
        while(posEle && !posEle.offsetParent){
            posEle=posEle.previousElementSibling||posEle.parentNode;
        }
        if(posEle){
            let actualTop = getElementTop(posEle);
            bottomGap=scrollH-actualTop+(window.innerHeight||document.documentElement.clientHeight)*(ruleParser.curSiteRule.rate||1);
            if(bottomGap<100)bottomGap=100;
        }else{
            bottomGap=1000;
        }
        if(rulesData.opacity==0)pageBar.style.display="none";
        return pageBar;
    }

    function emuClick(btn){
        if(!PointerEvent)return btn.click();
        let eventParam={
            isTrusted: true,
            altKey: false,
            azimuthAngle: 0,
            bubbles: true,
            button: 0,
            buttons: 0,
            clientX: 1,
            clientY: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 2,
            fromElement: null,
            height: 1,
            isPrimary: false,
            metaKey: false,
            pointerId: 1,
            pointerType: "mouse",
            pressure: 0,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            toElement: null,
            twist: 0,
            which: 1
        };
        var mouseEvent = new PointerEvent("mousedown",eventParam);
        btn.dispatchEvent(mouseEvent);
        mouseEvent = new PointerEvent("mouseup",eventParam);
        btn.dispatchEvent(mouseEvent);
        btn.click();
    }

    var failFromIframe=0;
    var inCors=false;
    function requestFromIframe(url, callback){
        url=url.replace(/#[^#]*/,"");
        let orgPage,curPage;
        let iframe = document.createElement('iframe');
        iframe.name = 'pagetual-iframe';
        iframe.width = '100%';
        iframe.height = '0';
        iframe.frameBorder = '0';
        if(ruleParser.curSiteRule.sandbox!=false){
            iframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
        }
        iframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;';
        let waitTime=100,checkEval;
        if(ruleParser.curSiteRule.wait){
            if(isNaN(ruleParser.curSiteRule.wait)){
                try{
                    checkEval=Function("doc",'"use strict";' + ruleParser.curSiteRule.wait);
                }catch(e){
                    debug(e);
                }
            }else{
                waitTime=ruleParser.curSiteRule.wait;
            }
        }
        let loadedHandler=e=>{
            if(e.data != 'pagetual-iframe:DOMLoaded' && e.type != 'load')return;
            window.removeEventListener('message', loadedHandler, false);
            iframe.removeEventListener('load', loadedHandler, false);
            let tryTimes=0;
            function checkIframe(){
                try{
                    let doc=iframe.contentDocument || iframe.contentWindow.document;
                    let eles=ruleParser.getPageElement(doc, iframe.contentWindow);
                    if(checkEval && !checkEval(doc)){
                        setTimeout(()=>{
                            checkIframe();
                        },waitTime);
                        return;
                    }else if(eles && eles.length>0){
                        callback(doc, eles);
                    }else if(tryTimes++ < 10){
                        setTimeout(()=>{
                            checkIframe();
                        },waitTime);
                        return;
                    }else{
                        if(failFromIframe++ > 2){
                            failFromIframe=0;
                            debug("Stop as failFromIframe");
                            isPause=true;
                            callback(false, false);
                        }else{
                            callback(false, false);
                        }
                    }
                }catch(e){
                    debug("Stop as cors");
                    inCors=true;
                    //isPause=true;
                    if(!ruleParser.curSiteRule.pageElement){
                        ruleParser.curSiteRule.pageElement=allOfBody;
                        ruleParser.getInsert(true);
                    }
                    ruleParser.curSiteRule.action=0;
                    ruleParser.nextLinkHref=url;
                    callback(false, false);
                    nextPage();
                }
                document.body.removeChild(iframe);
            }
            setTimeout(()=>{
                checkIframe();
            },waitTime);
        };
        window.addEventListener('message', loadedHandler, false);
        iframe.addEventListener('load', loadedHandler, false);
        iframe.src=url;
        document.body.appendChild(iframe);
    }

    var emuIframe,lastActiveUrl=location.href;
    function emuPage(callback){
        let orgPage=null,orgContent=null,curPage,iframeDoc,times=0,loadmoreBtn,loadmoreEnd=false,waitTimes=10,changed=false;
        function checkPage(){
            if(isPause)return;
            try{
                iframeDoc=emuIframe.contentDocument || emuIframe.contentWindow.document;
            }catch(e){
                debug("Stop as cors");
                isPause=true;
                callback(false, false);
                return;
            }

            let nextLink=ruleParser.getNextLink(iframeDoc);
            let waitTime=200,checkEval;
            if(ruleParser.curSiteRule.wait){
                if(isNaN(ruleParser.curSiteRule.wait)){
                    try{
                        checkEval=Function("doc",'"use strict";' + ruleParser.curSiteRule.wait);
                    }catch(e){
                        debug(e);
                    }
                }else{
                    waitTime=ruleParser.curSiteRule.wait;
                }
            }

            if(!orgPage){
                if(!loadmoreEnd){
                    loadmoreBtn=getLoadMore(iframeDoc);
                    if(loadmoreBtn && isVisible(loadmoreBtn, iframeDoc.defaultView)){
                        emuClick(loadmoreBtn);
                        let intv=setInterval(()=>{
                            loadmoreBtn=getLoadMore(iframeDoc);
                            if(!loadmoreBtn || !loadmoreBtn.parentNode || !isVisible(loadmoreBtn, iframeDoc.defaultView)){
                                clearInterval(intv);
                                loadmoreEnd=true;
                                setTimeout(()=>{
                                    checkPage();
                                },500);
                            }else{
                                emuClick(loadmoreBtn);
                            }
                        },200);
                        return;
                    }else{
                        loadmoreEnd=true;
                    }
                }
                let pageEle=ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true);
                if(checkEval && !checkEval(iframeDoc)){
                    setTimeout(()=>{
                        checkPage();
                    },waitTime);
                    return;
                }else if(!nextLink || !pageEle || pageEle.length==0){
                    if(waitTimes-->0){
                        setTimeout(()=>{
                            checkPage();
                        },waitTime);
                        return;
                    }
                }
                orgPage=pageEle;
                if(!orgPage || orgPage.length==0){
                    debug("Stop as no page when emu");
                    isPause=true;
                    callback(false, false);
                    return;
                }
                if(orgPage && orgPage[0].tagName=="UL")orgPage=orgPage[0].children;
                if(orgPage && nextLink){
                    orgPage=orgPage[parseInt(orgPage.length/2)];
                    orgContent=orgPage.innerText;
                    if(!isVisible(nextLink, iframeDoc.defaultView)){
                        debug("Stop as next hide when emu");
                        isPause=true;
                        callback(false, false);
                    }else{
                        emuClick(nextLink);
                        setTimeout(()=>{
                            checkPage();
                        },500);
                    }
                }else{
                    debug("Stop as no next when emu");
                    isPause=true;
                    callback(false, false);
                }
                return;
            }
            if(times++ > 20){
                debug("Stop as timeout when emu");
                isPause=true;
                callback(false, false);
                return;
            }
            let eles=ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true),checkItem;
            if(eles && eles.length>0){
                checkItem=eles;
                if(eles[0].tagName=="UL"){
                    checkItem=eles[0].children;
                }
                checkItem=checkItem[parseInt(checkItem.length/2)];
            }
            if(!checkItem || (checkEval && !checkEval(iframeDoc))){
                setTimeout(()=>{
                    checkPage();
                },waitTime);
            }else{
                if(orgPage!=checkItem || checkItem.innerText!=orgContent){
                    changed=true;
                    orgPage=checkItem;
                    orgContent=checkItem.innerText;
                    setTimeout(()=>{
                        checkPage();
                    },waitTime);
                }else if(changed){
                    callback(iframeDoc, eles);
                }else{
                    setTimeout(()=>{
                        checkPage();
                    },waitTime);
                }
            }
        }
        if(!emuIframe){
            let loaded=false;
            emuIframe = document.createElement('iframe');
            emuIframe.name = 'pagetual-iframe';
            if(ruleParser.curSiteRule.sandbox!=false){
                emuIframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
            }
            emuIframe.width = '100%';
            emuIframe.height = '0';
            emuIframe.frameBorder = '0';
            emuIframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;';
            emuIframe.addEventListener("load", e=>{
                setTimeout(()=>{
                    try{
                        iframeDoc=emuIframe.contentDocument || emuIframe.contentWindow.document;
                    }catch(e){
                        debug("Stop as cors");
                        isPause=true;
                        callback(false, false);
                        return;
                    }
                    let code=ruleParser.curSiteRule.init;
                    if(code){
                        try{
                            Function('doc','win','iframe','"use strict";' + code)(iframeDoc, iframeDoc.defaultView, emuIframe);
                        }catch(e){
                            debug(e);
                        }
                    }
                    if(loaded)return;
                    loaded=true;
                    checkPage();
                },500);
            });
            emuIframe.src=lastActiveUrl.replace(/#[^#]*/,"");
            document.body.appendChild(emuIframe);
        }else{
            checkPage();
        }
    }

    var scrollToResizeInited = false;
    var resizePool = [];
    function scrollToResize() {
        if (scrollToResizeInited) return;
        scrollToResizeInited = true;
        var scrollingToResize = false;
        document.addEventListener("scroll", e => {
            if (scrollingToResize) return;
            else {
                scrollingToResize = true;
                setTimeout(() => {scrollingToResize = false}, 500);
            }
            resizePool.forEach(resizeArr => {
                let iframe = resizeArr[1]();
                let frameDoc = resizeArr[2]();
                if(ruleParser.curSiteRule.singleUrl){
                    iframe.style.height=frameDoc.body.scrollHeight+"px";
                    iframe.style.width=frameDoc.body.scrollWidth+"px";
                }else{
                    let pageEle = resizeArr[0]();
                    if(pageEle){
                        let targetElement = pageEle[0];
                        if(pageEle.length > 1){
                            targetElement = targetElement.parentNode;
                        }
                        iframe.style.height=targetElement.scrollHeight+"px";
                        frameDoc.documentElement.scrollTop = 0;
                        frameDoc.documentElement.scrollLeft = 0;
                        while(targetElement && targetElement.offsetParent){
                            targetElement.offsetParent.scrollTop = targetElement.offsetTop;
                            if(targetElement.offsetParent.scrollTop == 0){
                                frameDoc.documentElement.scrollTop += targetElement.offsetTop;
                            }
                            targetElement.offsetParent.scrollLeft = targetElement.offsetLeft;
                            if(targetElement.offsetParent.scrollLeft == 0){
                                frameDoc.documentElement.scrollLeft += targetElement.offsetLeft;
                            }
                            targetElement = targetElement.offsetParent;
                        }
                    }
                }
            });
        });
    }

    function forceIframe(url, callback){
        url=url.replace(/#[^#]*/,"");
        let curIframe = document.createElement('iframe'),iframeDoc;
        let setPosition = ()=>{
            let getIframe = () => {
                return curIframe;
            };
            let getFrameDoc = () => {
                return iframeDoc;
            };
            if(ruleParser.curSiteRule.singleUrl){
                resizePool.push([() => {}, getIframe, getFrameDoc]);
            }else{
                let pageElement = ruleParser.getPageElement(iframeDoc,iframeDoc.defaultView);
                let getPageEle = () => {
                    if (!pageElement) {
                        pageElement = ruleParser.getPageElement(iframeDoc,iframeDoc.defaultView);
                    }
                    return pageElement;
                };
                resizePool.push([getPageEle, getIframe, getFrameDoc]);
            }
        };
        curIframe.name = 'pagetual-iframe';
        curIframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
        curIframe.frameBorder = '0';
        curIframe.scrolling="no";
        curIframe.style.cssText = 'display: block; visibility: visible; float: none; clear: both; width: 100%;height:0;background: initial; border: 0px; border-radius: 0px; margin: 0px 0px 2rem; padding: 0px; z-index: 2147483647;';
        curIframe.addEventListener("load", e=>{
            try{
                iframeDoc=curIframe.contentDocument || curIframe.contentWindow.document;
            }catch(e){
                debug("Stop as cors");
                isPause=true;
                callback(false, false);
                return;
            }
            ruleParser.insertPage(iframeDoc, [], url, null, true);
            callback(curIframe, true);
            let css=ruleParser.curSiteRule.css;
            if(css){
                let styleEle=iframeDoc.createElement("style");
                styleEle.innerHTML=css;
                iframeDoc.head.appendChild(styleEle);
            }
            setPosition();
            let code=ruleParser.curSiteRule.init;
            if(code){
                try{
                    Function('doc','win','iframe','"use strict";' + code)(iframeDoc,iframeDoc.defaultView,curIframe);
                }catch(e){
                    debug(e);
                }
            }
        });
        let inAction=false,checkTimes=0;
        let forceRefresh=e=>{
            if(inAction || !iframeDoc)return;
            inAction=true;
            let foundNext=()=>{
                document.removeEventListener("scroll", forceRefresh);
            }
            setTimeout(()=>{
                inAction=false;
                if(!ruleParser.nextLinkHref){
                    checkTimes++;
                    ruleParser.getNextLink(iframeDoc);
                    if(ruleParser.nextLinkHref){
                        foundNext();
                    }else if(checkTimes>=10){
                        foundNext();
                    }
                }else{
                    foundNext();
                }
            },50);
        };
        document.addEventListener("scroll", forceRefresh);
        curIframe.src=url;
        let insert=ruleParser.getInsert();
        if(ruleParser.curSiteRule.singleUrl || forceState==2){
            document.body.appendChild(loadingDiv);
            document.body.appendChild(curIframe);
        }else{
            ruleParser.insertElement(curIframe);
        }
        scrollToResize();
        return curIframe;
    }

    function loadPageOver(){
        isLoading=false;
        if(loadingDiv.parentNode){
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
        /*setTimeout(()=>{
            let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(scrollH <= (window.innerHeight || document.documentElement.clientHeight)){
                nextPage();
            }
        },1);*/
    }

    var tryTimes = 0;

    function nextPage(){
        if(isPause || isLoading || forceState==1)return;
        if(ruleParser.curSiteRule.delay){
            try{
                let checkDelay=Function('"use strict";' + ruleParser.curSiteRule.delay)();
                if(!checkDelay)return;
            }catch(e){
                debug(e);
            }
        }
        let nextLink=ruleParser.nextLinkHref;
        if(!nextLink){
            if(curPage==1){
                ruleParser.getNextLink(document);
                nextLink=ruleParser.nextLinkHref;
            }
            if(!nextLink){
                isLoading=true;
                if(curPage==1 && (ruleParser.curSiteRule.pinUrl || tryTimes++ <= 10)){
                    setTimeout(()=>{isLoading=false},500);
                }
                return;
            }
        }
        let pvGallery=document.querySelector("span.pv-gallery-container");
        if(pvGallery && pvGallery.style.display!="none")return;
        let insert=ruleParser.getInsert();
        if(insert){
            let isJs=/^(javascript|#)/.test(nextLink.replace(location.href,""));
            if(!isJs){
                emuIframe=null;
                lastActiveUrl=nextLink;
            }
            if(location.protocol=="https:" && /^http:/.test(nextLink)){
                nextLink=nextLink.replace(/^http/,"https");
            }
            isLoading=true;
            ruleParser.insertElement(loadingDiv);
            loadingDiv.style.cssText=loadingCSS;
            let sleep=ruleParser.curSiteRule.sleep||0;
            setTimeout(()=>{
                if(ruleParser.curSiteRule.pageElementByJs){
                    var over=ele=>{
                        loadPageOver();
                        if(ele){
                            createPageBar(nextLink);
                            ruleParser.insertPage(null, ele, nextLink, null, true);
                            if(autoLoadNum>=0){
                                if(autoLoadNum!=0 && --autoLoadNum==0){
                                    autoLoadNum=-1;
                                }else{
                                    nextPage();
                                }
                            }
                        }else{
                            debug("Stop as no page when get by js");
                            isPause=true;
                        }
                    };
                    try{
                        Function("over",'"use strict";' + ruleParser.curSiteRule.pageElementByJs)(over);
                    }catch(e){
                        debug(e);
                    }
                }else if((forceState==3||ruleParser.curSiteRule.action==1) && !isJs){
                    requestFromIframe(nextLink, (doc, eles)=>{
                        loadPageOver();
                        if(eles){
                            ruleParser.insertPage(doc, eles, nextLink, ()=>{
                                createPageBar(nextLink);
                            }, true);
                            if(autoLoadNum>=0){
                                if(autoLoadNum!=0 && --autoLoadNum==0){
                                    autoLoadNum=-1;
                                }else{
                                    nextPage();
                                }
                            }
                        }
                    });
                }else if((forceState==2||ruleParser.curSiteRule.action==2) && !isJs){
                    forceIframe(nextLink, (iframe, eles)=>{
                        loadPageOver();
                        let pageBar=createPageBar(nextLink);
                        if(pageBar)iframe.parentNode.insertBefore(pageBar, iframe);
                        if(autoLoadNum>=0){
                            if(autoLoadNum!=0 && --autoLoadNum==0){
                                autoLoadNum=-1;
                            }else{
                                nextPage();
                            }
                        }
                    });
                }else{
                    if(!isJs){
                        requestDoc(nextLink, (eles)=>{
                            loadPageOver();
                            if(eles){
                                createPageBar(nextLink);
                                if(autoLoadNum>=0){
                                    if(autoLoadNum!=0 && --autoLoadNum==0){
                                        autoLoadNum=-1;
                                    }else{
                                        nextPage();
                                    }
                                }
                            }
                        });
                    }else{
                        emuPage((doc, eles)=>{
                            loadPageOver();
                            if(eles){
                                ruleParser.insertPage(doc, eles, "", ()=>{
                                    createPageBar(nextLink);
                                }, true);
                                if(autoLoadNum>=0){
                                    if(autoLoadNum!=0 && --autoLoadNum==0){
                                        autoLoadNum=-1;
                                    }else{
                                        nextPage();
                                    }
                                }
                            }
                        });
                    }
                }
            },sleep);
        }
    }

    function init(){
        initRules(()=>{
            initPage();
        });
    }
    setTimeout(()=>{
        init();
    },100);
})();