define(['jquery', 'common', 'nprogress'], function($, undefined, nprogress) {

	// ��ҳ���е�js������ϣ�������������
	nprogress.done();

	// �����޸�
	$('#repass-form').on('submit', function () {
		$.ajax({
			url: '/v6/teacher/repass',
			type:'post',
			data:$(this).serialize(),
			success: function () {
				$('#logout').trigger('click');
			}
		});
		return false;
	});
});