var today = new Date();
var date = new Date();
function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() -1, today.getDate());
    buildCalendar();
}
function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() +1, today.getDate());
    buildCalendar();
}
function buildCalendar() {
    var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);

    var tbCalendar = document.getElementById("calendar");
    var tbCalendarYM = document.getElementById("tbCalendarYM");

    tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    while (tbCalendar.rows.length >2) {
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
    }
    var row = null;
    row = tbCalendar.insertRow();
    var cnt = 0;
    for (i=0; i<doMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt = cnt +1;
    }
    for (i=1; i<=lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt +1;
        if(cnt % 7 ==1 ) {
            cell.innerHTML = "<font color=#79DC2>" + i +"<br>" + "바부";
        }
        if (cnt%7 == 0){/* 1주일이 7일 이므로 토요일 구하기*/
                  //월화수목금토일을 7로 나눴을때 나머지가 0이면 cnt가 7번째에 위치함을 의미한다
                  cell.innerHTML = "<font color=skyblue>" + i
                  //7번째의 cell에만 색칠
                   row = calendar.insertRow();
                   //토요일 다음에 올 셀을 추가
        }
              /*오늘의 날짜에 노란색 칠하기*/
        if (today.getFullYear() == date.getFullYear()
            && today.getMonth() == date.getMonth()
            && i == date.getDate()) {
            //달력에 있는 년,달과 내 컴퓨터의 로컬 년,달이 같고, 일이 오늘의 일과 같으면
        cell.bgColor = "#FAF58C";//셀의 배경색을 노랑으로 
        }
    }
}

buildCalendar();