function getCheckedRPs() {
    var targetField = document.getElementById("rendezvousPoints");
    targetField.value = "";

    var rpList = document.getElementsByClassName("rd");

    var arr = [];
    for(i = 0; i<rpList.length; i++) {
        if(rpList[i].checked === true) {
            arr.push(rpList[i])
        }
    }

    for(i = 0; i<arr.length; i++) {
        if(i === arr.length - 1) {
            targetField.value += arr[i].value;
            break;
        }
        targetField.value += arr[i].value + ", ";
    }
}