function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05; // 시드의 5%
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = riskAmount / percentLoss; // 주문량 (USDT)

    document.getElementById('result').innerHTML = `
        주문량: ${orderAmount.toFixed(2)} USDT <br>
        진입 배율: ${(riskAmount / orderAmount).toFixed(1)} 배
    `;
}
