class Entry<V> {
    constructor(public key: string, public val: V) {}
}

class MyMap<V> {
    
    entries: Array<Entry<V>> = [];

    setItem(key: string, val: V) {
        this.entries.push(new Entry(key, val));
    }

    getItem(key: string): V {
        const entry: Entry<V>[] = this.entries.filter(ele => ele.key === key);
        return entry[0].val;
    }

    clear() {
        this.entries = [];
    }

    printMap() {
        this.entries.forEach(e => console.log("Key: " + e.key + " Value: " +e.val));
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();