function getReducerFunction(data,element) {
    const reducerFunction = (data,element) => {
        data[element[0].id] = element[0].value;
        return data;
    };
    return reducerFunction(data,element);
}

function getFormDataJson(formElements) {
    console.log("Inside getFormDataJson");
    const formToJSON_deconstructed = formElements => {
        const reduceInitialValue = {};
        console.log('Initial `data` value:', JSON.stringify(reduceInitialValue));
        formData = [].reduce.call(formElements, getReducerFunction, reduceInitialValue);
        return formData;
    };
    return formToJSON_deconstructed(formElements)
}

$(function($) {

    //$("#page-heading .container").text("Create J2K DCP")
    $("div a#page-heading").text("Create J2K DCP");

    $('#btn').click(function (event) {
    //var config = require('./config.json');
    //var forms = document.getElementsByClassName('needs-validation');
    //var form = 
    var flag = true;
     /*var validation = Array.prototype.filter.call(forms, function(form) {
        if (form.checkValidity() === false) {
            flag = false;
          event.preventDefault();
          event.stopPropagation();
            form.classList.add('was-validated');
        }
    });*/
        //console.log(form);
        if($('input[name="wt_embed_output"]').val().length > 0){
            $('#video_link').val($('input[name="wt_embed_output"]').val());
        }
        console.log(flag);
       $('#form-dcp input[type="text"],input[type="hidden"],input[type="number"]').each(function(){
           var ele = $(this);

               if(ele.val().length == 0){
               console.log(ele);
                   /*if(ele.attr("type")=="hidden"){
                        ele.removeAttr("class");
                        ele.attr("class","wt_embed_output form-control is-invalid");
                   }*/
                   if(ele.attr("id")=="video_link" || ele.attr("id")=="we_link"){
                         if($("#video_link").val().length > 0 && $("#we_link").val().length == 0){
                             $("#we_link").removeAttr("class");
                             $("#we_link").attr("class","form-control");
                         }else if($("#video_link").val().length == 0 && $("#we_link").val().length > 0){
                             $("#video_link").removeAttr("class");
                             $("#video_link").attr("class","form-control");
                         } else if($("#video_link").val().length == 0 && $("#we_link").val().length == 0){
                             $("#video_link").removeAttr("class");
                             $("#video_link").attr("class","form-control is-invalid");
                             $("#we_link").removeAttr("class");
                             $("#we_link").attr("class","form-control is-invalid");
                         } else {
                             $("#video_link").removeAttr("class");
                             $("#video_link").attr("class","form-control is-valid");
                             $("#we_link").removeAttr("class");
                             $("#we_link").attr("class","form-control is-valid");
                         }
                    }
                   else if(ele.attr("id")=="censor_link" || ele.attr("id")=="exampleFormControlFile1"){
                            if($("#censor_link").val().length > 0 && $("#exampleFormControlFile1").val().length == 0){
                                $("#exampleFormControlFile1").removeAttr("class");
                                $("#exampleFormControlFile1").attr("class","form-control");
                            }else if($("#censor_link").val().length == 0 && $("#exampleFormControlFile1").val().length > 0){
                                $("#censor_link").removeAttr("class");
                                $("#censor_link").attr("class","form-control");
                            } else if($("#censor_link").val().length == 0 && $("#exampleFormControlFile1").val().length == 0){
                                $("#censor_link").removeAttr("class");
                                $("#censor_link").attr("class","form-control is-invalid");
                                $("#exampleFormControlFile1").removeAttr("class");
                                $("#exampleFormControlFile1").attr("class","form-control is-invalid");
                            } else {
                                $("#censor_link").removeAttr("class");
                                $("#censor_link").attr("class","form-control is-valid");
                                $("#exampleFormControlFile1").removeAttr("class");
                                $("#exampleFormControlFile1").attr("class","form-control is-valid");
                            }
                   }
                   else if(ele.attr("id")=="slide_link" || ele.attr("id")=="we_link_slide"){
                            if($("#slide_link").val().length > 0 && $("#we_link_slide").val().length == 0){
                               $("#we_link_slide").removeAttr("class");
                               $("#we_link_slide").attr("class","form-control");
                            }else if($("#slide_link").val().length == 0 && $("#we_link_slide").val().length > 0){
                               $("#slide_link").removeAttr("class");
                               $("#slide_link").attr("class","form-control");
                            } else if($("#slide_link").val().length == 0 && $("#we_link_slide").val().length == 0){
                               $("#slide_link").removeAttr("class");
                               $("#slide_link").attr("class","form-control is-invalid");
                               $("#we_link_slide").removeAttr("class");
                               $("#we_link_slide").attr("class","form-control is-invalid");
                            } else {
                               $("#slide_link").removeAttr("class");
                               $("#slide_link").attr("class","form-control is-valid");
                               $("#we_link_slide").removeAttr("class");
                               $("#we_link_slide").attr("class","form-control is-valid");
                            }
                      }
                   else{
                        ele.removeAttr("class");
                        ele.attr("class","form-control is-invalid");
                   }
               }else{
                   if(ele.attr("type")=="hidden"){
                       ele.removeAttr("class");
                       ele.attr("class","wt_embed_output form-control is-valid");
                   }else{
                        ele.removeAttr("class");
                        ele.attr("class","form-control is-valid");
                   }
               }
               if(ele.attr("id")=="mobile"){
                   var mobile = ele.val();
                   if(mobile.length < 10){
                        ele.removeAttr("class");
                        ele.attr("class","form-control is-invalid");
                   }
               }
               if(ele.attr("id")=="email"){
                   var email = ele.val();
                   console.log(email+" "+email.indexOf("@")+" "+email.indexOf(".com"));
                   if(email.indexOf("@") < 2 || email.indexOf(".com") < 5) {
                        ele.removeAttr("class");
                        ele.attr("class","form-control is-invalid");
                   }else if((email.indexOf("@") > email.indexOf(".com")) ||
                           (email.indexOf("@")+1 == email.indexOf(".com"))) {
                          ele.removeAttr("class");
                          ele.attr("class","form-control is-invalid");
                   }
                   else{
                        ele.removeAttr("class");
                        ele.attr("class","form-control is-valid");
                   }
               }

       });
        event.preventDefault();
    //console.log(validation);

         var elements = [];
        $('#form-dcp input').each(function(){
            if($(this).attr("class") == "form-control is-invalid"){
            console.log($(this).attr("class"));
                flag = false;
                return false;
            }else{
                elements.push($(this));
            }

        })

        if(flag == true){
    var formData = JSON.stringify(getFormDataJson(elements));
    var file = $('#exampleFormControlFile1')[0].files[0];

    var form = new FormData();
    form.append("file",file);
    form.append("formdata",formData);
    console.log(form);
        $.ajax({
            //url:host+'/dcp/j2krequest',
            url: host+'/activity/upload',
            type: 'post',
            //dataType: 'json',
            processData: false,
                contentType: false,
            success: function (data) {
                console.log(data);
            },
            data: form
        });
        console.log(formData);   
        }
                    

    });

    $('input[name="wt_embed_output"]').change(function(){
        var hiddenValue = $(this).val();
        console.log(hiddenValue);
    });
})