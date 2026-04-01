const WIN = 0;
const LOSE = 1;
const AIKO = 2;
const GU = 0;
const CHOKI = 1;
const PA = 2;

function generateEnemyHand(){
  return Math.floor(Math.random() * 3);
}

function judge(enemyHand, myHand){
  const judgeTable = [
    [AIKO, WIN, LOSE],
    [LOSE, AIKO, WIN],
    [WIN, LOSE, AIKO],
  ]
  return judgeTable[myHand][enemyHand];
}

function buildImageFileName(result, enemyHand){
  let resultString = "";
  let enemyHandString = "";
  if (result === WIN){
    resultString = "lose";
  }
  if (result === LOSE){
    resultString = "win";
  }
  if (result === AIKO){
    resultString = "aiko";
  }
  if (enemyHand === GU){
    enemyHandString = "gu";
  }
  if (enemyHand === CHOKI){
    enemyHandString = "choki";
  }
  if (enemyHand === PA){
    enemyHandString = "pa";
  }
  return `${resultString}-${enemyHandString}.png`;
}

function buildVictoryOrDefeat(result){
  if (result === WIN) {
    return "あなたの勝ち！";
  }
  if (result === LOSE) {
    return "あなたの負け！";
  }
  if (result === AIKO){
    return "あいこ！";
  }
}

function processGameLogic(myHand) {
  const enemyHand = generateEnemyHand();
  const result = judge(enemyHand, myHand);
  const kameText = document.getElementById("kameText");
  const kameImage = document.getElementById("kameImage");
  kameText.innerHTML = buildVictoryOrDefeat(result);
  kameImage.src = `./images/${buildImageFileName(result, enemyHand)}`;
}

function loaded(){
  document.getElementById("guButton").addEventListener("click", function(){
    processGameLogic(GU);
  });
  document.getElementById("chokiButton").addEventListener("click", function(){
    processGameLogic(CHOKI);
  });
  document.getElementById("paButton").addEventListener("click", function(){
    processGameLogic(PA);
  });
}

document.addEventListener("DOMContentLoaded", loaded);
