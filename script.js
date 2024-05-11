function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    // 주문 값 계산
    var riskAmount = seedAmount * 0.05;
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss);  

    // 반익절라인 계산
    var breakevenLine = entryPrice + (entryPrice - stopLossPrice) * 1.5;

    // 결과 표시
    document.getElementById('result').innerHTML = `주문 값: ${orderAmount.toFixed(2)} USDT<br>반익절라인(USDT): ${breakevenLine.toFixed(2)}`;
    document.getElementById('copyButton').style.display = 'block';
}
