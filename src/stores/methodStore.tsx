import { observable } from "mobx";

const methodStore = observable({
    method: new Set<string>([]),

    add(list: string) {
        this.method.add(list)
    },
    delete(list: string) {
        this.method.delete(list)
    },
    reset() {
        this.method.clear()
    }
})

export default methodStore;