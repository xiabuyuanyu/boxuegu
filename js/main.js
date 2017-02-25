/**
 * Created by Administrator on 2017/2/25 0025.
 */
requirejs.config({
    //����·��
    baseUrl:'/',
    paths:{
        // ���������·������
        jquery: 'lib/jquery/jquery.min',
        bootsrap:'lib/bootsrap/js/bootsrap.min',

        // �Լ�д��·������
        userList:'js/user/list',
        userProfile: 'js/user/profile'
    },
    shim:{
        bootsrap:{
            deps:['jquery']
        }
    }
});

// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['jquery', 'bootstrap']);

/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
    }


})(window);