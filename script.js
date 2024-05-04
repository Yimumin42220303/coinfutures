function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05;
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss);  

    document.getElementById('result').innerText = `주문 값: ${orderAmount.toFixed(2)} USDT`;
    document.getElementById('copyButton').style.display = 'block';
}

// 입력값 복사 기능 (입력 필드 ID를 인자로 받음)
function copyValue(inputId) {
    var inputValue = document.getElementById(inputId).value;
    navigator.clipboard.writeText(inputValue)
        .then(() => {
            showCopyConfirm();
        })
        .catch(err => {
            console.error('클립보드 복사에 실패하였습니다.', err);
        });
}

// 클립보드 복사 확인 메시지 표시
function showCopyConfirm() {
    let confirmDiv = document.getElementById('copyConfirm');
    confirmDiv.style.display = 'block';
    setTimeout(() => {
        confirmDiv.style.display = 'none';
    }, 2000);
}
