function copyToClipboard(elementId) {
    var content = document.getElementById('result').innerText;
    var text = '';
    if (elementId === 'orderAmount') {
        // 주문 값에서 숫자만 추출
        text = content.split('USDT')[0].split(': ')[1].trim();
    } else if (elementId === 'breakevenLine') {
        // 반익절라인에서 숫자만 추출
        text = content.split('USDT')[1].split(': ')[1].trim();
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyConfirm();
        })
        .catch(err => {
            console.error('클립보드 복사에 실패하였습니다.', err);
        });
}

function showCopyConfirm() {
    let confirmDiv = document.getElementById('copyConfirm');
    confirmDiv.style.display = 'block';
    setTimeout(() => {
        confirmDiv.style.display = 'none';
    }, 2000);
}
