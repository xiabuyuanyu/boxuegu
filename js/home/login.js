define(['jquery'], function ($) {

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
    })
});
