function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05;
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss);  // 주문량을 절대값으로 계산

    document.getElementById('result').innerText = `주문 값: ${orderAmount.toFixed(2)} USDT`;
    document.getElementById('copyButton').style.display = 'block'; // 계산 후 복사하기 버튼 표시
}

// 클립보드로 복사 기능
function copyToClipboard() {
    var content = document.getElementById('result').innerText;
    var numericValue = content.replace(/[^\d.-]/g, ''); // "USDT" 및 '주문 값:' 텍스트를 제외하고 숫자만 추출
    navigator.clipboard.writeText(numericValue)
        .then(() => {
            let confirmDiv = document.getElementById('copyConfirm');
            confirmDiv.style.display = 'block';
            setTimeout(() => {
                confirmDiv.style.display = 'none';
            }, 2000); // 2초 후 메시지가 사라지도록 설정
        })
        .catch(err => {
            console.error('클립보드 복사에 실패하였습니다.', err);
        });
}
