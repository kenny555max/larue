$(document).ready(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg');
        $(this).css({
            'background-image': 'url(' + bg + ')'
        })
    })
})