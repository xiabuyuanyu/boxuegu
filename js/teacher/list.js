define(['jquery', 'common', 'nprogress', 'template'], function ($, undefined, nprogress, template) {

    // ��ҳ���е�js������ϣ�������������
    nprogress.done();

    // ��Ⱦ��ʦ�б�  /v6/teacher �ӿ� �����ǻص�
    $.get('/v6/teacher', function (data) {
        if (data.code == 200) {
            //teacher-list-tpl ģ��ID  ����������
            var html = template('teacher-list-tpl', {list: data.result});
            //��Ⱦ  #teacher-list-tbody��ָ��λ��
            $('#teacher-list-tbody').html(html);
        }
    });

    // ͨ���¼�ί�еķ�ʽ����̬���ɵ�a��ǩ�󶨵���¼���
    // Ȼ���ȡ��ʦ��ϸ��Ϣ��չʾ��
    //�¼�ί�У�
    $('#teacher-list-tbody').on('click', '.teacher-view', function () {
        $.get('/v6/teacher/view', {
            //thisΪA���Ҹ����������
            tc_id: $(this).parent().attr('data-id')
            //�ص�
        }, function (data) {
            //�ж�
            if (data.code == 200) {
                //��Ⱦ
                var html = template('teacher-view-tpl', data.result);
                $('#teacherModal').html(html);
            }
        });
    });
});
