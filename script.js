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

}

const ht = new HashTable()

ht.set('secret', 'Zena likes icecream')
ht.set('dog', 'food')
ht.set('remote', 'controller')
ht.set('marco', 'polo')
ht.set('tommy', 'hilfiger')


console.log(ht.get('dog'))
// console.log(ht)