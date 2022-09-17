(function(){
    //-------------------------------------------------------------------------------------
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m["revenue-2022-data"]                        ={url:H+"/business/*/page.html",router:1};
    m["revenue-2022-chart"]                       ={url:H+"/business/*/page.html",router:1};
    m["student-data"]                             ={url:H+"/business/*/page.html",Table:"student",form_module:"student-form",router:1};
    m["student-form"]                             ={url:H+"/business/*/page.html",Table:"student"};
    m["What is a Micro-app"]                      ={url:H+"/business/*/page.html",router:1};
    m["Cost of running a Micro-app"]              ={url:H+"/business/*/page.html",router:1};
    m["Authentication"]                           ={url:H+"/business/*/page.html",router:1};
    m["Permissions Control"]                      ={url:H+"/business/*/page.html",router:1};
    
    for(p in m){  m[p].url=m[p].url.replace('*',p); }
})();
