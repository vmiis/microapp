(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m[p+"revenue-2022-data"]                        ={url:H+"/business/revenue-2022-data/page.html"};
    m[p+"revenue-2022-chart"]                       ={url:H+"/business/revenue-2022-chart/page.html"};
    m[p+"student-data"]                             ={url:H+"/business/student-data/page.html",Table:"student",form_module:"student-form"};
    m[p+"student-form"]                             ={url:H+"/business/student-form/page.html",Table:"student"};
    m[p+"What is a Micro-app"]                      ={url:H+"/business/What is a Micro-app/page.html",router:1};
    m[p+"Cost of running a Micro-app"]              ={url:H+"/business/Cost of running a Micro-app/page.html",router:1};
})();
