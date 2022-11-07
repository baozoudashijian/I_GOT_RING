// 循环所有tab
$('.tabs').each(function(index, element) {
    $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
    $(element).children('.tabs-content').children('li').eq(0).addClass('active')
})

$('.tabs').on('click', '.tabs-bar > li', function(e) {
    var $li = $(e.currentTarget)

    $li.addClass('active').siblings().removeClass('active')
    var index = $li.index()
    // 从里面往外面找
    var $content = $li.closest('.tabs').find('.tabs-content > li').eq(index)
    $content.addClass('active').siblings().removeClass('active')
})