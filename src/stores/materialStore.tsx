import { observable } from "mobx";

const materialStore = observable({
    material: new Set<string>([]),

    add(list: string) {
        this.material.add(list)
    },
    delete(list: string) {
        this.material.delete(list)
    },
    reset() {
        this.material.clear()
    }
})

export default materialStore;