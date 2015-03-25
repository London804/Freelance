$(function(){
    $(document).ready(function() {
        $("#contact-form-submit").click(function (e) {

            e.preventDefault(); // prevent page reload
            $.ajax({
                type: "POST",
                url: '/contact',
                data: $("#contact-form").serialize(),
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                success: function (response) {
                    $("#submitResponse").html(response);
                }
            });
        });


    });


});