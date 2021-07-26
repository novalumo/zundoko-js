console.log('------------------------------')
console.log('ズンドコキヨシ on JavaScript')
console.log('------------------------------')

// ズンドコ配列
let zndkAry = ['ズン', 'ドコ']

// ズンドコ関数
const zundoko = (ary) => {

  let count = 0
  let output = ''

  while (true) {
    output = ary[Math.floor(Math.random() * ary.length)]
    console.log(output)
    if (count == 4 && output == 'ドコ') {
      console.log('キ・ヨ・シ！')
      break
    }
    output == 'ズン' ? count++ : count = 0
  }
}

// ズンドコする
zundoko(zndkAry)
