define(['jquery', 'common', 'nprogress', 'template', 'region', 'datepicker', 'datepickerLanguage', 'ckeditor','uploadify'],
    function ($, undefined, nprogress, template, undefined, datepicker, undefined, ckeditor,uploadify) {

        // ��ҳ���е�js������ϣ�������������
        nprogress.done();
        /**
         * չʾ������Ϣ����
         * */
        $.get('/v6/teacher/profile', function(data) {
            if(data.code == 200) {
                $('#profile').html(template('profile-form-tpl', data.result));

                // ����ͷ���ϴ����
                $("#upfile").uploadify({
                    //����߶�
                    height: $('.preview').width(),
                    swf: '/lib/uploadify/uploadify.swf',
                    uploader: '/v6/uploader/avatar',
                    //����
                    buttonText:'',
                    //����
                    fileObjName: 'tc_avatar',
                    fileTypeExts: '*.gif; *.jpg; *.png',
                    // ͷ���ϴ��ɹ��󣬽����ַ������ݣ�Ȼ����ϴ��ĵ�ַ���õ����У����ύ��ͬʱ�����û�ͷ���Ԥ����
                    onUploadSuccess: function (file,data) {
                        var data = JSON.parse(data);
                        //console.log(data);//Object {code: 200, msg: "OK", result: Object, time: 1488554442}
                        //console.log(JSON.parse(data));
                        $('.preview img ').attr('src',data.result.path);
                    }
                });

                // �������������� ʹ�ò��region
                $('.hometown').region({
                    //��ȡ����
                    url: '/lib/region/region.json'
                });

                // �������ڲ��
                $('.datepicker').datepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    endDate: new Date()
                });

                // ���ø��ı��༭��
                var edit = ckeditor.replace('ckeditor');
                // ���ø��ı��༭��
                //ckeditor.replace('ckeditor', {
                //    toolbarGroups: [
                //        {name: 'clipboard', groups: ['clipboard', 'undo']},
                //        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
                //        {name: 'insert'},
                //        {name: 'tools'},
                //        {name: 'styles'},
                //        {name: 'colors'},
                //    ]
                //});

                // �����ύ�¼� form  <form action="" class="form-horizontal">
                $('.form-horizontal').on('submit',function () {
                    // ����һ��tc_hometown��������ʽΪ��ʡ|��|��
                    var hometown = $('.hometown select').map(function() {
                        return $(this).find('option:selected').text();
                    }).toArray().join('|');

                    // �����ı��������Ϊ���ı��༭������
                    edit.updateElement();

                //��������
                $.ajax({
                    url: '/v6/teacher/modify',
                    type: 'post',
                    data:$(this).serialize()+'&tc_hometown='+hometown,
                    success: function (data) {
                        if(data.code==200){
                            //ˢ��
                            location.reload();
                        }
                    }
                });
                return false;
            });
        }
    });

});