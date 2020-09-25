function readURL(input) {
    var i = 0;
    if (input.files) {
        $(input.files).each(function () {

            var reader = new FileReader();
            reader.readAsDataURL(this);
            reader.onload = function (e) {
                var numUploadedImages = $('.next_img').length;
                if (numUploadedImages < 10) {
                    if ($(".image_dev").find('.first_uploaded_image').length == 1) {
                        $(".image_dev").append('<img id="' + i + '" class="next_img next_img1 first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:50px; object-fit: cover; height:50px; border-radius:100%; float:left; margin-top:10px;" />');
                    } else {
                        $(".image_dev").append('<img id="' + i + '" class="next_img next_img1 not_first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:50px; height:50px;object-fit: cover; border-radius:100%; float:left; margin-top:10px;" />');
                    }
                    $(".image_dev").append('<input id="image_hidden_input_' + i + '" type="hidden" name="car_image_' + i + '" value="' + e.target.result + '" />');
                    i++;
                }

                if (numUploadedImages >= 10) {
                    $("#file1").prop('disabled', true);
                    $('.leftside3 span').css('opacity', 1);
                }

            }

        });
    }
    document.getElementById("file1").value = "";
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if ($(".image_dev2").find('.first_uploaded_image').length == 1) {
                $(".image_dev2").append('<img class="next_img next_img2 first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:50px;object-fit: cover; height:50px; border-radius:100%; float:left; margin-top:10px;" />');
            } else {
                $(".image_dev2").append('<img class="next_img next_img2 not_first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:50px; object-fit: cover; height:50px; border-radius:100%; float:left; margin-top:10px;" />');

            }

            var numUploadedImages2 = $('.next_img').length;
            if (numUploadedImages2 >= 1) {
                $("#file2").prop('disabled', true);
                $('.rightside3 span').css('opacity', 1);
            }


        }

        reader.readAsDataURL(input.files[0]);
    }
}
function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if ($(".Vip_image").find('.first_uploaded_image').length == 1) {
                $(".Vip_image").append('<img class="next_img next_img3 first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:148px; object-fit: cover; height:148px; border-radius:100%;  margin-top:0;" />');
            } else {
                $(".Vip_image").append('<img class="next_img next_img3 not_first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:148px;object-fit: cover; height:148px; border-radius:100%;  margin-top:0;" />');

            }

            var numUploadedImages2 = $('.Vip_image').length;
            if (numUploadedImages2 >= 0) {
                $("#file3").prop('disabled', true);
                $('.rightside3 span').css('opacity', 1);
                $('.Vip_image').removeClass('hidden');
                $('.Vip_image').css('height', '150px');
                $('.Vip_image').css('marginTop', '-50px');
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if ($(".Vip_image").find('.first_uploaded_image').length == 1) {
                $(".Vip_image").append('<img class="next_img next_img4 first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:50px; height:50px ;object-fit: cover; border-radius:100%; float:left; margin-top:10px;" />');
            } else {
                $(".Vip_image").append('<img class="next_img next_img4 not_first_uploaded_image" title="remove" src="' + e.target.result + '" alt="" style="border:1px solid gray;width:84px;object-fit: cover; height:84px; object-fit: cover; border-radius:100%;float:left; margin-top:0px;" />');

            }

            var numUploadedImages2 = $('Vip_image').length;
            if (numUploadedImages2 >= 0) {
                //$("#file4").prop('disabled', true);
                $('.upload-file').addClass('hidden');
                $('.rightside3 span').css('opacity', 1);
                $('.Vip_image').css('height', '96px');
                $('.Vip_image').css('marginTop', '45px');

            }


        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).on('click', '.next_img', function () {
    if ($(this).hasClass('next_img1')) {
        $("#file1").prop('disabled', false);
        $("input#image_hidden_input_" + $(this).attr('id')).remove();
        $('.leftside3 span').css('opacity', 0);

    } else if ($(this).hasClass('next_img2')) {
        $("#file2").prop('disabled', false);
        document.getElementById("file2").value = "";
        $('.rightside3 span').css('opacity', 0);
    } else if ($(this).hasClass('next_img3')) {
        {
            $("#file3").prop('disabled', false);
            document.getElementById("file3").value = "";
            $('.rightside3 span').css('opacity', 0);
            $('.Vip_image').addClass('hidden');
            $('.Vip_image').css('height', '150px');
            $('.Vip_image').css('marginTop', '-50px');
        }

    } else if ($(this).hasClass('next_img4')) {
        {
            //$("#file4").prop('disabled', false);
            document.getElementById("file4").value = "";
            $('.rightside3 span').css('opacity', 0);
            $('.upload-file').removeClass('hidden');
            $('.Vip_image').css('height', '0');
            $('.Vip_image').css('marginTop', '0');
        }
    }
    $(this).remove();
});

$("#file1").change(function (event) {
    var ev = (event.target.id);
    //alert(ev)
    if (ev == "file1") {
        readURL(this);
    }

});

$("#file2").change(function (event) {
    var ev = (event.target.id)
    //alert(ev)
    if (ev == "file2") {
        readURL2(this);

    }

});

$("#file3").change(function (event) {
    var ev = (event.target.id)
    //alert(ev)
    if (ev == "file3") {
        readURL3(this);
    }

});

$("#file4").change(function (event) {
    var ev = (event.target.id)
    //alert(ev)
    if (ev == "file4") {
        readURL4(this);
    }
});


$('.add-credit .bank-trans-open').addClass('active');
$('.add-credit .credit-card-open').removeClass('active');


$(".credit-card-open").click(function () {
    $(".credit-tap").show();

});


$(".credit-card-open").click(function () {
    $(".Bank-tap").hide();
    $('.add-credit .credit-card-open').addClass('active');
    $('.add-credit .bank-trans-open').removeClass('active');
});


$(".bank-trans-open").click(function () {
    $(".Bank-tap").show();


});


$(".bank-trans-open").click(function () {
    $(".credit-tap").hide();
    $('.add-credit .bank-trans-open').addClass('active');
    $('.add-credit .credit-card-open').removeClass('active');

});


$(".click-me-down").click(function () {
    $(".more-mean").slideToggle(900);
    $(".hide-show-toggle").toggle();


});


$('.remove-from-fav').click(function () {
    $(this).closest('.search-result-1').hide(800);
});


//$('.click-drop-down').click(function () {
//
//    $('.drop-down-mean').slideDown();
//
//});


$(".add-to-fav").click(function () {
    $(this).closest('.add-to-fav').hide();
    $(this).next('.fav').show();
});


$(".fav").click(function () {
    $(this).hide();
    $(this).prev('.add-to-fav').show();

});


function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}


$(document).ready(function () {

    $('.title-of-taps .bank_transfer').addClass('active');
    $('.taps2').addClass('open');

    $('.title-of-taps .bank_transfer').click(function (e) {
        $('.taps3').removeClass('open');
        $('.taps2').addClass('open');
        $('.title-of-taps .bank_transfer').addClass('active');
        $('.title-of-taps .credit_card').removeClass('active');

    });


    $('.title-of-taps .credit_card').click(function (e) {
        $('.taps2').removeClass('open');
        $('.taps3').addClass('open');
        $('.title-of-taps .bank_transfer').removeClass('active');
        $('.title-of-taps .credit_card').addClass('active');

    });


    $('.bank-transfer-vip').addClass('active');
    $('.makepay-tap2').show();

    $('.bank-transfer-vip').click(function (e) {

        $('.bank-transfer-vip').addClass('active');
        $('.balance-vip').removeClass('active');
        $('.credit-card-vip').removeClass('active');
        $('.cash-vip').removeClass('active');


        $('.makepay-tap2').show();
        $('.makepay-tap1').hide();
        $('.makepay-tap3').hide();
        $('.makepay-tap4').hide();

    });


    $('.credit-card-vip').click(function (e) {

        $('.credit-card-vip').addClass('active');
        $('.balance-vip').removeClass('active');
        $('.bank-transfer-vip').removeClass('active');
        $('.cash-vip').removeClass('active');


        $('.makepay-tap3').show();
        $('.makepay-tap1').hide();
        $('.makepay-tap2').hide();
        $('.makepay-tap4').hide();

    });


    $('.cash-vip').click(function (e) {

        $('.cash-vip').addClass('active');
        $('.balance-vip').removeClass('active');
        $('.bank-transfer-vip').removeClass('active');
        $('.credit-card-vip').removeClass('active');


        $('.makepay-tap4').show();
        $('.makepay-tap1').hide();
        $('.makepay-tap2').hide();
        $('.makepay-tap3').hide();

    });


    $('.down-call').click(function (e) {
        $('.phone-mean').slideToggle();
    });

    $('a.show-option').click(function (evt) {
        evt.preventDefault();
        $(this).siblings('.options').slideToggle();
    });


    $('.down').click(function (e) {
        e.preventDefault();
        $('.brand-mean').slideDown(250);
        $('.down').hide();
        $('.up-brand').show();
    });

    $('.up-brand').click(function (e) {
        e.preventDefault();
        $('.brand-mean').slideUp(250);
        $('.up-brand').hide();
        $('.down').show();
    });


    $('.down-op').click(function (e) {
        e.preventDefault();
        $('.option-mean').slideDown(250);
        $('.down-op').hide();
        $('.up-op').show();


    });

    $('.up-op').click(function (e) {
        e.preventDefault();
        $('.option-mean').slideUp(250);
        $('.up-op').hide();
        $('.down-op').show();
    });


    $('.brand-hide').click(function (e) {
        $(".brand-hide").hide();
        $(this).show();
    });


$(document).click(function (e)
{
    var container = $(".click-drop-down");

     if (!container.is(e.target)&& container.has(e.target).length === 0) 
		 // if the target of the click isn't the container...
		// ... nor a descendant of the container
    {
        $('.drop-down-mean').slideUp();
    }
});


    $('.click-drop-down').click(function () {
        $('.drop-down-mean').slideToggle();



});




	

    $('.down-total-price').click(function () {
        $('.slide-price-car').slideDown(700);
		$(".down-total-price").hide();
		$(".up-total-price").show();

});

     $('.up-total-price').click(function () {
        $('.slide-price-car').slideUp(800);
		$(".down-total-price").show();
		$(".up-total-price").hide();

});


    $(".add-to-fav").click(function () {
        $(this).closest('.add-to-fav').hide();
        $(this).next('.fav').show();
    });

    $(".fav").click(function () {
        $(this).hide();
        $(this).prev('.add-to-fav').show();
    });


    $('.Renting-tile .all').addClass('active');

    $(".Renting-tile .all").click(function () {

        $(".pro-mean-3").show();
        $('.all').addClass('active');
        $(".pro-mean-4").hide();
        $('.approval').removeClass('active');

        $('.payment').removeClass('active');
        $(".pro-mean-6").hide();
        $('.paid').removeClass('active');
        $(".pro-mean-7").hide();
        $('.finished').removeClass('active');


    });


    $(".approval").click(function () {
        $(".pro-mean-4").show();
        $('.approval').addClass('active');
        $(".pro-mean-3").hide();
        $(".pro-mean-5").hide();
        $('.all').removeClass('active');
        $('.payment').removeClass('active');
        $(".pro-mean-6").hide();
        $('.paid').removeClass('active');
        $(".pro-mean-7").hide();
        $('.finished').removeClass('active');


    });


    $(".payment").click(function () {
        $(".pro-mean-5").show();
        $('.payment').addClass('active');
        $(".pro-mean-3").hide();
        $(".pro-mean-4").hide();
        $(".pro-mean-6").hide();
        $('.approval').removeClass('active');
        $('.all').removeClass('active');
        $('.paid').removeClass('active');
        $(".pro-mean-7").hide();
        $('.finished').removeClass('active');


    });


    $(".paid").click(function () {
        $(".pro-mean-6").show();
        $('.paid').addClass('active');
        $(".pro-mean-3").hide();
        $(".pro-mean-4").hide();
        $(".pro-mean-5").hide();
        $('.payment').removeClass('active');
        $('.approval').removeClass('active');
        $('.all').removeClass('active');
        $(".pro-mean-7").hide();
        $('.finished').removeClass('active');


    });


    $(".finished").click(function () {
        $(".pro-mean-7").show();
        $('.finished').addClass('active');
        $(".pro-mean-3").hide();
        $(".pro-mean-6").hide();
        $(".pro-mean-4").hide();
        $(".pro-mean-5").hide();
        $('.payment').removeClass('active');
        $('.approval').removeClass('active');
        $('.all').removeClass('active');
        $('.paid').removeClass('active');


    });

    $('.cancel-btn').click(function () {
            $(this).closest('.approval-mean').fadeOut(400);
        }
    );

    $('.deny-btn').click(function () {
            $(this).closest('.approval-mean').fadeOut(400);
        }
    );

    $('.approve').click(function () {
            $(this).closest('.approval-mean').fadeOut(400);
        }
    );

    $('.sing-mean span').click(function (e) {
        $('.singup-mean').addClass('open');
    });
    $('.back').click(function (e) {
        $('.singup-mean').removeClass('open');
    });

});

function fill()
    {    
      $("#<%=MyTextBox.ClientID%>").val($("#<%=FileUpload.ClientID%>").val())
    }
 










//islam


/*    $(".btn-1").click(function () {
		scrollTo(0,0);
        $(".host2").show();
		
		$(".host-1").hide();
		$(".btn-2").show();

    });



    $(".btn-2").click(function () {
		scrollTo(0,0);
        $(".host3").show();
		$(".host-1").hide();
		$(".host2").hide();
		$(".btn-2").hide();
        $(".btn-3").show();
    });




    $(".btn-3").click(function () {
		scrollTo(0,0);
        $(".host4").show();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").hide();
		$(".btn-2").hide();
		$(".btn-3").hide();
        $(".btn-4").show();
    });



 $(".").click(function () {
	 scrollTo(0,0);
        $(".host4").show();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").hide();
		$(".btn-2").hide();
		$(".btn-3").hide();
        $(".btn-4").show();
    });*/
	
/* ------------------------maher 3la 72a------------------------- */
	$(".btn-1").click(function () {
			 $(".step-tow").addClass('active');
			 $(".step-one").removeClass('active');
			 $(".step-three").removeClass('active');
			 $(".step-four").removeClass('active');
			
			scrollTo(0,0);
			
			$(".host4").hide();
			$(".host-1").hide();
			$(".host2").show();
			$(".host3").hide();
			$(".btn-2").show();
			$(".btn-3").hide();
			$(".btn-4").hide();
	});
	
	
	$(".btn-2").click(function () {
			
		 $(".step-tow").removeClass('active');
		 $(".step-one").removeClass('active');
		 $(".step-three").addClass('active');
		 $(".step-four").removeClass('active');
		
		scrollTo(0,0);
		
		$(".host4").hide();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").show();
		$(".btn-2").hide();
		$(".btn-3").show();
		$(".btn-4").hide();
	});
	
	$(".btn-3").click(function () {
			
		 $(".step-tow").removeClass('active');
		 $(".step-one").removeClass('active');
		 $(".step-three").removeClass('active');
		 $(".step-four").addClass('active');
		
		scrollTo(0,0);
		
		$(".host4").show();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").hide();
		$(".btn-2").hide();
		$(".btn-3").hide();
		$(".btn-4").show();
	});
	
/* ------------------------maher 3la 72a------------------------- */

	$(".step-one").addClass('active');
	
		$(".step-one").click(function () {
			
			 $(this).addClass('active');
			 $(".step-tow").removeClass('active');
			 $(".step-three").removeClass('active');
			 $(".step-four").removeClass('active');
			
			scrollTo(0,0);
			
			$(".host4").hide();
			$(".host-1").show();
			$(".host2").hide();
			$(".host3").hide();
			$(".btn-2").hide();
			$(".btn-3").hide();
			$(".btn-4").hide();
		});
		
		
		
		
		$(".step-tow").click(function () {
			
		 $(this).addClass('active');
		 $(".step-one").removeClass('active');
		 $(".step-three").removeClass('active');
		 $(".step-four").removeClass('active');
		
		scrollTo(0,0);
		
		$(".host4").hide();
		$(".host-1").hide();
		$(".host2").show();
		$(".host3").hide();
		$(".btn-2").show();
		$(".btn-3").hide();
		$(".btn-4").hide();
	});
		
		
		
		
		
			$(".step-three").click(function () {
		 $(this).addClass('active');
		 $(".step-one").removeClass('active');
		 $(".step-tow").removeClass('active');
		 $(".step-four").removeClass('active');
		scrollTo(0,0);
		
		$(".host4").hide();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").show();
		$(".btn-2").hide();
		$(".btn-3").show();
		$(".btn-4").hide();
	});
		
		$(".step-four").click(function () {
		 $(this).addClass('active');
		 $(".step-one").removeClass('active');
		 $(".step-tow").removeClass('active');
		 $(".step-three").removeClass('active');
		scrollTo(0,0);
		
		$(".host4").show();
		$(".host-1").hide();
		$(".host2").hide();
		$(".host3").hide();
		$(".btn-2").hide();
		$(".btn-3").hide();
		$(".btn-4").show();
	});
		
	