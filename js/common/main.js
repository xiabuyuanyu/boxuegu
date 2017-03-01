/**
 * Created by Administrator on 2017/2/25 0025.
 */
requirejs.config({
    //����·��
    baseUrl:'/',
    paths:{
        // ���������·������
        jquery: 'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        nprogress: 'lib/nprogress/nprogress',
        template: 'lib/artTemplate-3.0.1/template',

        // �Լ�д��·������

        /*js/user*/
        userList:'js/user/list',
        userProfile: 'js/user/profile',

        /*js/teacher*/
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',

        /*js/home*/
        Login:'js/home/login',
        Repass:'js/home/repass',
        Setting:'js/home/setting',

        /*js/course*/
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        common:'js/common/common',
        index: 'js/index'

    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});

// �����������ٶȿ���ҳ���������������js�����Ӻ�
require(['nprogress'], function (nprogress) {
    nprogress.start();
});

// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['jquery', 'bootstrap','common']);
/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
//��ȡ�ļ�·���������ļ�·�������ļ�
(function(window) {
    //��ȡ��ǰ�ļ���·��
    var pathname = window.location.pathname;
    /**
     * �жϵ�½״̬:
     *
     * 1����½ҳ
     * 1.1��û��SESSID�����ù�
     * 1.2����SESSID����ת����ҳ
     *
     * 2������ҳ
     * 2.1��û��SESSID����ת����½ҳ
     * 2.2����SESSID�����ù�
     */
    //�ж������·��   undefinedռλ��  PHPSESSID��˶������
    require(['jquery', 'jqueryCookie'], function($, undefined) {
        var sessID = $.cookie('PHPSESSID');

        // ��½״̬ǰ��Ч��  �ǵ�¼ҳ��������ID
        if(pathname === '/html/home/login.html' && sessID) {
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID) {
            location.href = '/html/home/login.html';
        }

        // ���û�з���ҳ����ת���ͼ��ض�Ӧ��jsģ��
        switch(pathname) {
            case '/html/user/list.html':
                //���������·��֪������userList
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            /*course*/
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            /*home*/
            case '/html/home/login.html':
                require(['Login']);
                break;
            case '/html/home/repass.html':
                require(['Repass']);
                break;
            case '/html/home/settings.html':
                require(['Settings']);
                break;
            case '/':
                require(['index']);
                break;
        }
    });


})(window);