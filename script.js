function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);
    var riskPercentage = parseFloat(document.getElementById('riskPercentage').value) / 100; // 백분율로 변환

    // 주문 값 계산
    var riskAmount = seedAmount * riskPercentage; // 사용자 설정 위험 금액
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss);  

    // 반익절라인 계산
    var breakevenLine = entryPrice + (entryPrice - stopLossPrice) * 1.5;

    // 결과 표시
    document.getElementById('result').innerHTML = `주문 값: ${orderAmount.toFixed(2)} USDT<br>반익절라인: ${breakevenLine.toFixed(2)} USDT`;
}
