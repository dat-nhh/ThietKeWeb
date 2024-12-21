
$(document).ready(function(){
    // bai 20
    $('.b20').change(function(e20){
        alert('Bạn đã chọn: ' + e20.currentTarget.value);
    });

    // bai 21
    $('#b21').click(function(){
        alert('chào bạn');
    });

    // bai 22
    $('#b22').click(function(){
        alert('Tạm biệt');
        window.close();
    });

    // bai 23
    $('#b23').click(function(){
        c = confirm('Đến website NTU');
        if(c) 
            $('#b23').attr('href','https://www.ntu.edu.vn');
    });

    // bai 27
    $('.b27').click(function(e27){
        if(e27.currentTarget.value == '^')
            kq = Math.pow($('#b27_a').val(), $('#b27_b').val())
        else
            kq = $('#b27_a').val() + e27.currentTarget.value + $('#b27_b').val();
        $('#b27_c').val(eval(kq));
    });
});