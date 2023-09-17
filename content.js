var worktime = "";
window.addEventListener("load", async function () {
    await new Promise(s => setTimeout(s, 3000))
    console.log("ページ読み込み完了");

// var elememt = document.querySelectorAll('h1');
// console.log(elememt);

// var elememt = document.querySelectorAll('th');
// console.log(elememt)

    var element = document.querySelectorAll("input[value='2023年09月度']");

    start_worktimes = document.querySelectorAll('[id$="result_start_time_text"]');
    // console.log(start_worktimes);
    end_worktimes = document.querySelectorAll('[id$="result_end_time_text"]');
    // console.log(end_worktimes);

    // var worktimes = [];
    // var index= 0;
    // for (let i = 0; i < start_worktimes.length; i++) {
    //     worktimes[index] = start_worktimes[i];
    //     index++;
    //     worktimes[index] = end_worktimes[i];
    //     index++;
    // }
    // console.log(worktimes);

    // var worktime = "";
    // for (let i = 0; i < start_worktimes.length; i++) {
    //     worktime += start_worktimes[i].value.toString() + "," + end_worktimes[i].value.toString() + ",";
    // }
    // worktime = worktime.slice(0, -1);
    // console.log(worktime);

    var start = "";
    var end = "";
    for (let i = 0; i < start_worktimes.length; i++) {
        start = start_worktimes[i].value.toString();
        end = end_worktimes[i].value.toString();
        if (start && end) {
            worktime += start + "," + end + ",";
        }
    }
    worktime = worktime.slice(0, -1);
    sessionStorage.setItem("worktime", worktime);
    console.log(worktime);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(worktime);
        console.log("worktime copied.");
    } else {
        alert("copy method not supported, see console.");
    }
});

// worktime = sessionStorage.getItem("worktime");
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("dom loaded!");
//
//     if (navigator.clipboard) {
//         console.log(worktime + "をコピー")
//         navigator.clipboard.writeText(worktime);
//         console.log("worktime copied.");
//     } else {
//         alert("copy function not supported.");
//     }
// });

// console.log(element[0].form.outerHTML);
//
// var text = element[0].form.children[5].outerHTML;
// console.log(text);
//
// var text2 = element[0].form.children[5].outerHTML;
// console.log(text2);

// console.log(element[0].form.children[5].children[1].children);
// console.log(element[0].form.children[5].children[1].childNodes[1]);
// console.log(element[0].form.childNodes[8]);
// console.log(element[0].form.childNodes.children);
// console.log(element[0].form.childNodes[8].childNodes[3]);


// var elements = document.getElementsByTagName('input');
// console.log(elements);
//
// var input_tag
// var index = 0;
// for (let element of elements) {
//     console.log(element);
//     console.log(element.className);
//     if (index == 2) {
//         input_tag = element;
//     }
//     index++;
// }
//
// console.log(input_tag);
// console.log(input_tag.className);
// console.log(input_tag.list);
// console.log(input_tag.maxLength);
//
// elememt = document.querySelectorAll('input[id="form_working_records_attributes_23685_2023-09-01_result_start_time_text"]');
// console.log(elememt);
// console.log(elememt.values());
// console.log(elememt.length);

// elememt = document.querySelectorAll('[id$="result_start_time_text"]');
// console.log(elememt);
//
// var worktimes_array_iterator = elememt.values();
// console.log(worktimes_array_iterator);
//
// var worktimes_iterator = worktimes_array_iterator[Symbol.iterator]();
// console.log(worktimes_iterator);
//
// let itr = worktimes_iterator.next();
// while ( !itr.done ) {
//     console.log(itr.value);
//     itr = itr.next();
// }

// for (const worktimes of worktimes_iterator) {
//     console.log(worktimes);
// }


// console.log(elememt.forEach(i => console.log(i)));
// console.log(elememt.forEach(i => console.log(i.values)));

// submit_button.addEventListener("click", function () {
//     console.log("submit clicked!");
//
//     console.log(forms);
//
//     var worktimes = String(input_form.value).split(',');
//     console.log(worktimes);
//
//     console.log((forms[0]));
//     // console.log(forms[0].value);
//     // console.log(worktimes[0]);
//     // forms[0].value = worktimes[0];
// });
