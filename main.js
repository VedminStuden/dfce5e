//when you open df chat archive viwer, its automatically adds html elements on the viewer.
//Df 로그 아카이브를 켰을 때 자동적으로 아카이브 창에 html 요소를 추가합니다.
 
Hooks.on("renderDFChatArchiveViewer", (message, html, data) => { 
    // 모든 메시지 헤더를 선택합니다.
    let messageHeaders = document.querySelectorAll('#df-chat-log .chat-message .message-header h4');
    // 각 메시지 헤더에 요소를 추가하도록 지정합니다.
    messageHeaders.forEach((messageHeader) => { 
    // subtitle 요소를 생성합니다.
    let subtitleElement = document.createElement('span');
    subtitleElement.className = 'subtitle';
    subtitleElement.innerHTML = `${game.user.name}`;   
    // title 요소를 메시지 헤더의 첫 번째 자식 요소로 추가합니다.
    messageHeader.append(subtitleElement);
    })});


