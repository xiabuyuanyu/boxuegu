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
//��ȡ�ļ�·���������ļ�·�������ļ�
(function(window) {
    //��ȡ��ǰ�ļ���·��
    var pathname = window.location.pathname;
    //�ж������·��
    switch(pathname) {
        case '/html/user/list.html':
            //���������·��֪������userList
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
    }
})(window);