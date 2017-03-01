define(['jquery','jqueryCookie', 'nprogress'], function ($,undefined,nprogress) {

    /**
     * չʾ�û�����ʷ��½ͷ��
     * 1����ȡuserInfo���cookieֵ
     * 2����cookie�ַ���ת��Ϊ����
     * 3�����õ�½ҳ��img-srcΪ�����е�tc_avatar����ֵ�����û�и�һ��Ĭ��ͷ��ĵ�ַ
     */
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    $('.login .avatar img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');
    /*
     * 1���ȼ���form�����ύ�¼���
     * 2���¼��ص���return false��ֹĬ�ϵ��ύ
     * 3���¼��ص���ͨ��ajax�ķ�ʽ���ͱ�����
     * 4��������ؽ���е�codeΪ200��֤����½�ɹ�����ת����ҳ
     * */

    $('#form-login').on('submit', function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function (data){
                // �����½�ɹ���ʹ��cookie�ķ�ʽ�����û���Ϣ��
                // ע�⣺cookieֵ����Ϊ�ַ��������ǵõ�����js������Ҫʹ��JSON.stringify����ת��
                if(data.code === 200) {
                    $.cookie('userInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/';
                }
            }
        });
        return false;
    });

// ��ҳ���е�js������ϣ�������������
    nprogress.done();
});
