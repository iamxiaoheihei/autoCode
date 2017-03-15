(function($) {
	/**
	 * 表格排序
	 */
	$.fn.mysorttable = function(opts) {
		// 判断是否开始排序
		var _isSort = false;
		var sortEle = $(this).find("tbody");
		var _that = this;
		var setting = $.extend({
			begin : "beginOrder",
			save : "saveOrder",
		    updateUrl:"sinze/group/updateByTid"
		}, opts || {});

		// table的元素的排序，开始排序
		sortEle.sortable({
			// axis:"y"这个就是表示移动只在y轴上移动
			axis : "y",
			helper : function(e, ele) {
				// 原始元素的td对象
				var _original = ele.children();
				// 克隆元素td获取一个新的td元素
				var _helper = ele.clone();
				// children获取对象的子元素，index表示当前元素的序号
				_helper.children().each(function(index) {
					// 设置克隆元素的宽度和原始宽度一样
					$(this).width(_original.eq(index).width());
					$(this).height(_original.eq(index).height());
				});
				// 为拖动的对象加入背景颜色
				_helper.css("background", "#c1d7f4");
				return _helper;
			},
			update : function(e, ui) {
				// 拖动完后，重新排序，update事件是每次拖动后都会执行的
				setOrders();
			}
		});

		// 取消排序
		sortEle.sortable("disable");

		// 开始排序
		$("#" + setting.begin).click(beginOrders);

		// 保存排序的结果
		$("#" + setting.save).click(saveOrders);

		// 添加td，并排序
		function beginOrders() {
			if (!_isSort) {
				// 添加td序号
				$(_that).find("thead tr").append('<td align="center" class="tableBC">序号</td>');
				// 设置序号
				setOrders();
				// 添加一个td
				$(_that).find("tfoot tr").append('<td align="center">拖动排序</td>');
				// 允许排序
				sortEle.sortable("enable");
				_isSort = true;
			} else {
				alert("已经处于排序状态");
			}
		}

		// 保存排序后的信息
		function saveOrders() {
			if (_isSort) {
				// serialize这个方法就要在id上加入一个下划线。例如id_${c.id
				// }，加入key参数就可以得到ids={}的数组
				var idArg = sortEle.sortable("serialize", {key : "ids"});
				// 使用ajax无刷新交互数据，，URL就是在原地址的基础上加上updateSort，，得到回调函数用来判断更新是否成功
				$.ajax({
					type : 'POST',
					url : ''+setting.updateUrl+'?' + idArg,
					dataType : 'json',
					data : "parentID=0",
					success : function(data) {
						if (data==1) {
							// 遍历元素
							$(_that).find("tr").each(function() {
								// 删除最后一个元素信息
								$(this).children().last().remove();
							});
							// 取消排序
							sortEle.sortable("disable");
							_isSort = false;
						}
						window.parent.parent.centerFrame.location.reload();
						parent.location.reload();
					},
					error : function() {
						alert('系统错误！请联系管理员！');
					}
				});
			} else {
				alert("还不是排序状态");
			}
		}

		// 为每行的后面添加序号，
		function setOrders() {
			// each表示遍历每个元素，index是元素的序号，从0开始的
			$(_that).find("tbody tr").each(function(index) {
				if (_isSort) {
					// 开始排序后使用这个来添加序号，，这个this是用的闭包中的this
					$(this).find("td:last").html((index + 1));
				} else {
					// 没有开始排序使用这个来添加序号
					$(this).append('<td align="center">' + (index + 1) + '</td>');
				}
			});
		}

		return sortEle;
	};
})(jQuery);