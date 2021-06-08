console.log('------------------------------')
console.log('ズンドコキヨシ on JavaScript')
console.log('------------------------------')

// ズンドコ配列
let zndkAry = ['ズン', 'ドコ']
let count = 0
let output = ''

// ズンドコ関数
const zundoko = (ary) => { 

  while (true) {
    output = ary[Math.floor(Math.random() * ary.length)]
    console.log(output)
    if (count == 4 && output == 'ドコ') {
      console.log('キ・ヨ・シ！')
      break
    } else if (output == 'ズン') {
      count++
    } else {
      count = 0
    }
  }
}

// ズンドコする
zundoko(zndkAry)
