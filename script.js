function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select(); // 입력 필드 선택
    document.execCommand("copy"); // 텍스트 복사
    alert("Copied the text: " + copyText.value); // 사용자에게 복사 완료 알림
}

function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05; // 시드의 5%
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss); // 주문량 (USDT)의 절대값

    document.getElementById('result').innerHTML = `주문량: ${orderAmount.toFixed(2)} USDT`;
}
