function makeUnique(str) {
    let uniStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (!uniStr.includes(str[i])) {
        uniStr += str[i]
      }
    }
    return uniStr
  }
  
  console.log(makeUnique("hello"))