const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 0〜11 なので +1
const day = today.getDate();

console.log(`${year}年${month}月${day}日`);
