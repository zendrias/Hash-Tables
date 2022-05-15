class HashTable {
  constructor(size = 59) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key)
    this.keyMap[index] ? (
      this.keyMap[index].push([key, value])
    ) : (
      this.keyMap[index] = [[key, value]]
    )
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      const myData = this.keyMap[index].filter(data => {
        return data[0] === key
      })
      return myData[0][1]
    }
    return undefined
  }

  values() {
    let values = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return values
  }
  keys() {
    let keys = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][1])) {
            keys.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return keys
  }
}


class HashTable2 {
  constructor(length = 59) {
    this.keyMap = new Array(length)
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    this.keyMap[index] ? (
      this.keyMap[index].push([key, value])
    ) : (
      this.keyMap[index] = [[value, key]])
    return true
  }

  get(key) {
    const index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]
      }
    }
    return undefined
  }
}


const ht2 = new HashTable2(5)

ht2.set('kevin', 'guzman')
ht2.set('gary', 'vee')
ht2.set('grant', 'cardone')
ht2.set('dave', 'ramsey')
ht2.set('mr', 'wonderful')
console.log(ht2.get('dave'))
console.log(ht2)