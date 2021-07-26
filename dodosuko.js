console.log('------------------------------')
console.log('ラブ注入 on JavaScript')
console.log('------------------------------')

// ドドスコ配列
let ddskAry = ['ド', 'スコ']

// ドドスコ関数
const loveInjection = (ary) => {

  let dodoCount = 0
  let sukoCount = 0
  let allCount  = 0
  let output = ''

  while (true) {
    output = ary[Math.floor(Math.random() * ary.length)]
    console.log(output)

    // ゲージ満タン時
    if (allCount == 3) {
      console.log('ラブ注入！')
      break
    }

    
    output == 'ド' ? dodoCount++ : dodoCount = 0
  }
}

// 踊る
loveInjection(ddskAry)
