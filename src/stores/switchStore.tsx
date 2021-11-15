import { observable } from "mobx";

const switchStore = observable({
    switch: false,

    control(status: boolean) {
        this.switch = status
    },
})

export default switchStore;