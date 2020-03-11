function getReducerFunction(data,element) {
    const reducerFunction = (data,element) => {
        data[element[0].placeholder] = element[0].value;
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
    $('#register_anchor').click(function (event){
        event.preventDefault();

        console.log("Inside register_anchor");
        console.log($(".user").serialize());
        var elements = [];
        $('.user :input').each(function(){
            elements.push($(this))
        })
        const formData = JSON.stringify(getFormDataJson(elements));
        $.ajax({
            url: host+'/register',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (json) {
                console.log(json);
            },
        });
        console.log(formData)
    })
   }
)