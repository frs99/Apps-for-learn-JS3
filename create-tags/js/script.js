//educational training
//Fares Djefaflia - @FrsCodes
//jun 4 2021

var data, btnAdd, btnDelete, allTags, listTags;
    data = document.querySelector('.form-control');
    btnAdd = document.querySelector('.add');
    btnDelete = document.querySelector('.delete');
    allTags = document.querySelector('.all-tags');
    alertNote = document.getElementsByClassName('alertNote');
    listTags = [];

/*
When the button is pressed:
- When the button is pressed:
- The entered value will be read
- The entered value will be added to the empty array A new HTML element will be created
- The first text value will be entered into the new element
*/
btnAdd.onclick = function add(){
    //If the length of the input value is less than one - اذا كان طول القيمة المدخلة اقل من واحد
    if (data.value.length < 1 ){
        //Show alert
        alertNote[0].style.display = 'block';
    }
    //Other: The value will be a text or a number and its length is greater than one - غير ذلك: القيمة ستكون نصية او رقم و طولها اكبر من واحد
    else {
        //Cancel error alerts in case of previous wrong entries - الغاء تنبيهات الاخطاء في حالة ادخالات خاطئة سابقة
        alertNote[0].style.display = 'none';
        alertNote[1].style.display = 'none';

        //Add the entered value to the array - اضافة القيمة المدخلة الى المصفوفة
        listTags.push(data.value);

        //Create a variable for a new element - انشاء متغير من اجل عنصر جديد
        var newTag;
        //Create a new empty item - انشاء عنصر جديد فارغ
        newTag = document.createElement('div');
        //Put the new element inside the parent element that brings them all together - وضع العنصر الجديد داخل العنصر الاب الذي سيجمعهم جميعا
        allTags.appendChild(newTag);
        //Give the new item a class whose style has already been determined - اعطاء العنصر الجديد كلاس تم تحديد الستايل الخاص به من قبل
        newTag.setAttribute('class', 'tag');

        //Insert the first text value into the new element - ادخال القيمة النصية الاولى الى داخل العنصر الجديد
        newTag.textContent = data.value;

        //Return the entered text value to zero - اعادة القيمة النصية المدخلة الى قيمة صفر
        data.value = "";
    }
};

/*
When you press delete:
inside repetition
The value entered is compared to one of the values in the array.

If it is equal to:
Its html element will be deleted
The value will be deleted from the array
Return the input value to zero
Close any alert from any previous error

Other:
Show alert that the entered value does not already exist.
*/
var itemDelete = document.getElementsByClassName('tag');
btnDelete.onclick = function deleteItem(){
    //inside loop - داخل التكرار
    for (dlt = 0; dlt < listTags.length; dlt++){
        //Compare if the value entered is equal to one of the elements of the array - مقارنة اذا كان القيمة المدخلة مساوية لاحد العناصر من المصفوفة
        if (data.value === listTags[dlt]){
            //delete element from html - حذف العنصر من html 
            allTags.removeChild(itemDelete[dlt]);

            //Delete the element from the array - حذف العنصر من المصفوفة
            listTags.splice(dlt, 1);

            //Return the input value to zero - اعادة قيمة الادخال الى صفر
            data.value ="";

            //Cancel error alerts in case of previous wrong entries - الغاء تنبيهات الاخطاء في حالة ادخالات خاطئة سابقة
            alertNote[0].style.display = 'none';
            alertNote[1].style.display = 'none';
            break;
        }
        //Also if the value entered is not equal to one of the elements in the array - ايضا اذا كانت القيمة المدخل غير مساوية لاحد العناصر في المصفوفة 
        else if(data.value != listTags[dlt]){
            //Show an error alert - اظهر تنبيه حول خطأ
            alertNote[1].style.display = 'block';
        };
    };
};