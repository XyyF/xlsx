// import xlsx from 'xlsx'
import ZRender from 'zrender'
import DrawUtil from './utils/draw-tools'

class Xlsx {
    constructor(instance) {
        // zRender实例
        this.zr = instance
    }

    // 初始化table
    initTable(opts) {
        const tableGroup = DrawUtil.initTable(opts)
        this.zr.add(tableGroup)
    }
}

// 初始化Dom
Xlsx.init = (dom, opts) => {
    const instance = ZRender.init(dom, opts)
    return new Xlsx(instance)
}



window.zrender = ZRender
window.DrawUtil = DrawUtil

export default Xlsx