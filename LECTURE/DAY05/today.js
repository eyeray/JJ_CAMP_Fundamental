// 오늘은 어떤 요일일까?
// if문
var print_today_el = document.querySelector('#print-today');
// console.log(print_today_el.innerHTML.replace('[ ]', ???));
var today = '일';
// if ( today === '일' )      { console.log('오늘은 일요일'); }
// else if ( today === '월' ) { console.log('오늘은 월요일'); }
// else if ( today === '화' ) { console.log('오늘은 화요일'); }
// else if ( today === '수' ) { console.log('오늘은 수요일'); }
// else if ( today === '목' ) { console.log('오늘은 목요일'); }
// else if ( today === '금' ) { console.log('오늘은 금요일'); }
// else if ( today === '토' ) { console.log('오늘은 토요일'); }
// else                      { console.info('"일, 월, 화, 수, 목, 금, 토" 중 택 1'); }
var print_message;
if ( today === '일' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '일');
}
else if ( today === '월' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '월');
}
else if ( today === '화' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '화');
}
else if ( today === '수' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '수');
}
else if ( today === '목' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '목');
}
else if ( today === '금' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '금');
}
else if ( today === '토' ) {
  print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '토');
}
else {
  console.info('"일, 월, 화, 수, 목, 금, 토" 중 택 1');
}

console.log(print_message);
// switch case break default 문 예시
switch( today ) {
  case '일':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '일');
  break;
  case '월':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '월');
  break;
  case '화':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '화');
  break;
  case '수':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '수');
  break;
  case '목':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '목');
  break;
  case '금':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '금');
  break;
  case '토':
    print_today_el.innerHTML = print_today_el.innerHTML.replace('[ ]', '토');
  break;
  default: console.info('today는 "일,월,화,수,목,금,토" 값 중 하니를 택해주세요.');
}