
app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings','$localStorage','$window',
function ($rootScope, $scope, $state, $location, Flash,appSettings,$localStorage,$window) {


    var vm = this;
    
    // avalilable themes
    vm.themes = [
        {
            theme: "black",
            color: "skin-black",
            title: "Dark - Black Skin",
            icon:""
        },
        {
            theme: "black",
            color: "skin-black-light",
            title: "Light - Black Skin",
            icon:"-o"
        },
        {
            theme: "blue",
            color: "skin-blue",
            title: "Dark - Blue Skin",
            icon:""
        },
        {
            theme: "blue",
            color: "skin-blue-light",
            title: "Light - Blue Skin",
            icon:"-o"
        },
        {
            theme: "green",
            color: "skin-green",
            title: "Dark - Green Skin",
            icon:""
        },
        {
            theme: "green",
            color: "skin-green-light",
            title: "Light - Green Skin",
            icon:"-o"
        },
        {
            theme: "yellow",
            color: "skin-yellow",
            title: "Dark - Yellow Skin",
            icon:""
        },
        {
            theme: "yellow",
            color: "skin-yellow-light",
            title: "Light - Yellow Skin",
            icon:"-o"
        },
        {
            theme: "red",
            color: "skin-red",
            title: "Dark - Red Skin",
            icon: ""
        },
        {
            theme: "red",
            color: "skin-red-light",
            title: "Light - Red Skin",
            icon: "-o"
        },
        {
            theme: "purple",
            color: "skin-purple",
            title: "Dark - Purple Skin",
            icon: ""
        },
        {
            theme: "purple",
            color: "skin-purple-light",
            title: "Light - Purple Skin",
            icon: "-o"
        },
    ];

    //available layouts
    vm.layouts = [
        {
            name: "Boxed",
            layout: "layout-boxed",
            icon:"map"
        },
        {
            name: "Fixed",
            layout: "fixed",
            icon:"list-alt"
        },
        {
            name: "Sidebar Collapse",
            layout: "sidebar-collapse",
            icon:"outdent"
        },
    ];


    //Main menu items of the dashboard
    vm.menuItems = [
        {
            title: "Dashboard",
            icon: "dashboard",
            state: "dashboard"
        },
        {
            title: "About Me",
            icon: "user-secret",
            state: "about"
        },
        {
            title: "Menu-1",
            icon: "user-secret",
            state: "",
            subitems: [
                            {
                                title: "subitem 1-1",
                                icon: "user-secret",
                                state: "about"
                            },
                            {
                                title: "subitem 1-2",
                                icon: "user-secret",
                                state: "about"
                            }]
        },
        {
            title: "Menu-2",
            icon: "user-secret",
            state: "",
            subitems: [
                            {
                                title: "subitem 2-1",
                                icon: "user-secret",
                                state: "about"
                            },
                            {
                                title: "subitem 2-2",
                                icon: "user-secret",
                                state: "about"
                            }]
        },

    ];

    //set the theme selected
    vm.setTheme = function (value) {
        $rootScope.theme = value;
        $localStorage.theme = $rootScope.theme; 
    };

    if($localStorage.theme){
        $rootScope.theme = $localStorage.theme;  
    }
    else{
       $rootScope.theme = appSettings.theme; 
    }




    //set the Layout in normal view
    vm.setLayout = function (value) {
        $rootScope.layout = value;
        // if ($rootScope.layout == 'sidebar-collapse')
        //     $("#nav-icon3").addClass('open'); 
        // else
        //     $("#nav-icon3").removeClass('open');

        $localStorage.layout = $rootScope.layout;   
        
    };

    if($localStorage.layout){
        $rootScope.layout = $localStorage.layout; 
         

    }
    else{
       $rootScope.layout = appSettings.layout; 
    }
    
    var windowsize = $(window).width();
    var flag = 1;
    $(window).resize(function() {
       windowsize = $(window).width();
       
        if(windowsize <= 767){
             $("#nav-icon3").removeClass('open');
             if ($("body").hasClass('sidebar-open'))
             $("#nav-icon3").addClass('open');
        }
        else{
            
            if ($("body").hasClass('sidebar-collapse'))
            $("#nav-icon3").addClass('open'); 
            else
            $("#nav-icon3").removeClass('open');    
        }

    });

    //controll sidebar open & close in mobile and normal view
    
    var flag = 0;
    vm.sideBar = function (value) {
        
        
        if($(window).width()<=767){
        $("#nav-icon3").toggleClass('open');             
        if ($("body").hasClass('sidebar-open'))
            $("body").removeClass('sidebar-open');
        else
            $("body").addClass('sidebar-open');

        }
        else {

            if(value==1){
            $("#nav-icon3").toggleClass('open');  
            if ($("body").hasClass('sidebar-collapse')){

                $("body").addClass('fixed') ;
                $("body").removeClass('sidebar-collapse');
                
            
            }    
            else{
                $("body").addClass('sidebar-collapse');
                $("body").removeClass('fixed');
            }

            }

            
        }
    };
    
    //navigate to search page
    vm.search = function () {
        $state.go('app.search');
    };

    console.log('getting in to the app controller');

}]);


