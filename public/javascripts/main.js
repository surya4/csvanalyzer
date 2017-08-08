$('#inp1').click(function(){
     var textarea =  $('<textarea style="overflow:hidden"></textarea>');
textarea.on("keyup", function (e) {
      $(e.currentTarget).css("height","10px");
      // console.log($(e.currentTarget).get(0).scrollHeight);
      $(e.currentTarget).css("height",($(e.currentTarget).get(0).scrollHeight+25)+"px");
});
textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none'
     });
    $('#cont1').append(textarea);
});

$('#inp2').click(function(){
     var textarea =  $('<textarea style="overflow:hidden"></textarea>');
textarea.on("keyup", function (e) {
      $(e.currentTarget).css("height","10px");
      // console.log($(e.currentTarget).get(0).scrollHeight);
      $(e.currentTarget).css("height",($(e.currentTarget).get(0).scrollHeight+25)+"px");
});
textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none'
     });
    $('#cont2').append(textarea);
});

$('#inp3').click(function(){
     var textarea =  $('<textarea style="overflow:hidden"></textarea>');
textarea.on("keyup", function (e) {
      $(e.currentTarget).css("height","10px");
      // console.log($(e.currentTarget).get(0).scrollHeight);
      $(e.currentTarget).css("height",($(e.currentTarget).get(0).scrollHeight+25)+"px");
});
textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none'
     });
    $('#cont3').append(textarea);
});

// color picker
var colors = ['fff', '1A6564','554FB3','235560','72FC7B','C660F8','C02269','7BFBBA','EDE335','4A746F','F25534','DF502B','A97A53','540374','8CE005','F0746B','94BE4D','AF72AC','5F0638','AC58C5','DC651C','1A0C95','A4516F',
'ECFE32','7DEC6B','1488A9','4B458E','A22F49','F26E19','087F4D','A622FC','C38180','F33227','C1A3FC','D054FA','2A14C0','1939BC','9BFCD2','4A4FE4','BB50F4','A2EB7B','C85F20','CBBC89','FD43C2','88DD9D','240107','CC02C2','28DE46',
'744C71','E09CD3','A07A17','2E320F','43821D','891D59','E49717','AB7268','986DA7','CEA50C','29536B','D4F6C0','D7C592','D3A404','BD3534','15D794','2692D5','3AD007','2DAD2B','1D952C','9417CB','BE251F','A5A85A','F78A4A','567ECA',
'B5FDDB','89AAEB','980405','E0D6A2','0F88E4','2AA277','D007AE','347488','A787E2','9E2271','7AB1C2','9A2A1D','85209B','8321A0','44F666','8E13FD','697939','7CE9C8','45B766','7AB712','E90FD0','D394DC','E49DE5','62A1A1','82C49D',
'677774','747195','E89757',, 'FF99CC','FF6633', '666633', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF'];



for (var i = 0; i < colors.length; i++) {
$('.color-box').append('<li class="colors-list" data-val="' + '#' + colors[i] + '" style="background-color:#' + colors[i] + ';"></li>');
};

$(".color-selector").click(function() {
    $(".color-box").fadeToggle("slow");
  });


  $('.color-box').children('li').click(function () {
    var p = $(this).data('val');
    $('.color-selector').css('background-color', p);
    $('.color-hex').val(p);

  });
