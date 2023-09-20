window.addEventListener("load", async function () {
    // load後も読み込みが発生しているためsleep
    await new Promise(s => setTimeout(s, 2000));

    var start_worktimes = document.querySelectorAll('[id$="result_start_time_text"]');
    var end_worktimes = document.querySelectorAll('[id$="result_end_time_text"]');

    var worktime = "";
    var start = "";
    var end = "";
    for (let i = 0; i < start_worktimes.length; i++) {
        start = start_worktimes[i].value.toString();
        end = end_worktimes[i].value.toString();
        worktime += start + "," + end + ",";
    }

    // 末尾カンマ削除
    worktime = worktime.slice(0, -1);
    await new Promise(s => setTimeout(s, 1000));
    if (navigator.clipboard) {
        navigator.clipboard.writeText(worktime);
        console.log("worktime copied.");
    } else {
        alert("copy function not supported, worktime will be output to console.");
    }

    await chrome.storage.local.set({'worktime': worktime}, function () {
        console.log(worktime);
    });
});
