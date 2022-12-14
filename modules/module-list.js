(function(){
    //-------------------------------------------------------------------------------------
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m["revenue-2022-data"]                        ={url:H+"/tasks/Use Cases/*/page.html",router:1};
    m["revenue-2022-chart"]                       ={url:H+"/tasks/Use Cases/*/page.html",router:1};
    m["Student Data"]                             ={url:H+"/tasks/Use Cases/#/page.html",Table:"student",form_module:"Student Form",router:1};
    m["Student Form"]                             ={url:H+"/tasks/Use Cases/#/page.html",Table:"student"};
    m["What is a Micro-app"]                      ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Cost of running a Micro-app"]              ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Authentication"]                           ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Permissions Control"]                      ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    
    for(p in m){  
        m[p].url=m[p].url.replace('*',p); 
        var a=p.substring(0,p.lastIndexOf(' ')) +'/'+p.substring(p.lastIndexOf(' ') + 1); //replace the last space to /, example: Student Form --> Student/Form
        m[p].url=m[p].url.replace('#',a); 
    }
})();
