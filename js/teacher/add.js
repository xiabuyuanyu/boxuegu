define(['jquery', 'common', 'nprogress'], function ($, undefined, nprogress) {

    // ��ҳ���е�js������ϣ�������������
    nprogress.done();

    //�༭��ʦ
    //var tcld=util.getQueryString('tc_id');
    //if(tcld){
    //}

    // ��ӽ�ʦ
    $('#teacher-add-form').on('submit', function () {
        $.ajax({
            url: '/v6/teacher/add',
            type: 'post',
            data: $(this).serialize(),
            success: function (data) {
                // ��ӳɹ�����ת����ʦ�б�ҳ
                if (data.code == 200) {
                    location.href = '/html/teacher/list.html';
                }
            }
        })
        return false;
    });

});
