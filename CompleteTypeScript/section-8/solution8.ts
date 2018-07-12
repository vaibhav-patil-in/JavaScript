class MyMap8<T> {
    private map: {[key: string]: T } = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap8 = new MyMap8<number>();
numberMap8.setItem('apples', 5);
numberMap8.setItem('bananas', 10);
numberMap8.printMap();
 
const stringMap8 = new MyMap8<string>();
stringMap8.setItem('name', "Max");
stringMap8.setItem('age', "27");
stringMap8.printMap();