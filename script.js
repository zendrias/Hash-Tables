class HashTable {
  constructor(size = 5) {
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

const ht = new HashTable()

ht.set('secret', 'Zena likes icecream')
ht.set('dog', 'food')
ht.set('remote', 'controller')
ht.set('marco', 'polo')




console.log(ht.keys())
// console.log(ht)