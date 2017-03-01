define(['jquery', 'common', 'nprogress','util','template', 'datepicker', 'datepickerLanguage'],  function ($, undefined, nprogress, util, template, datepicker, undefined) {

    // ��ҳ���е�js������ϣ�������������
    nprogress.done();

    /**
     * ��ȡtc_id��ѯ�ַ��������������Ϊ��ǰ�ǽ�ʦ�༭ҳ�棬û������Ϊ���½�ʦ���ҳ�档
     *
     * �༭��ʦ��
     * 1���Ȼ�ȡ��ʦ��Ϣ��չʾ������
     * 2�������ύ���¼���תΪajax��ʽ�ύ����ʦ�޸Ľӿڡ�
     *
     * ��ӽ�ʦ��
     * 1�������ύ���¼���תΪajax��ʽ�ύ����ʦ��ӽӿڡ�
     * */

// ���ݱ༭����ӣ���Ӧ����Ⱦ��
    var tcId=util.getQueryString('tc_id');
    if(tcId){
        // ��ȡ�ý�ʦ֮ǰ����Ϣ����䵽����
        $.get('/v6/teacher/edit',{tc_id:tcId}, function (data) {
            if(data.code == 200){
                var html = template('teacher-form-tpl', data.result);
                $('.teacher-add').html(html);
                //ʱ����
                $('#datepicter').datepicker({
                    language: 'zh-CN',
                    endDate: new Date(),
                    format: 'yyyy-mm-dd'
                })
            }
        });
    }
    else {
        var html = template('teacher-form-tpl', {});
        $('.teacher-add').html(html);
        $('#datepicter').datepicker({
            language: 'zh-CN',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });
    }
    // ��������ӽ�ʦ��صĲ���

    /**
     * �������ύ�¼���ת��Ϊajax����
     * ����Ǳ༭����ô����/v6/teacher/update�� ������Ҫһ��tc_id������
     * �������ӣ���ô����/v6/teacher/add��
     * */
    $('.teacher-add').on('submit','#teacher-add-form', function () {
        $.ajax({
            //�����ID����ʹ��update�ӿڣ�û�о�ʹ����ӵ�add�ӿ�
            url: '/v6/teacher/'+ ( tcId? 'update': 'add' ),
            type: 'post',
            //��Ϊserialize��ȡ������name="tc_pass" type="password"������Ժ�����ֵ����ת��Ϊ��tc_pass&password ���и�ʽΪ'&tc_id=' + tcId
            data: $(this).serialize()+ ( tcId? '&tc_id=' + tcId : '' ),
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
