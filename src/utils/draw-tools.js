import zrender from 'zrender'

export default {
    // 绘制纵向文本
    drawText (str, dx, dy) {
        var shape = new zrender.Rect({
            position: [dx, dy],
            scale: [1, 1],
            style: {
                fill: 'red',
                text: str,
            },
            shape: {
                x: 100,
                y: 50,
                width: 150,
                height: 100
            }
        });
        return shape
    },
    // 初始化table
    initTable({width, height}) {
        var tableGroup = new zrender.Group()
        for (let i = 0; i <= 30; i++) {
            // 横线
            var line1 = new zrender.Line({
                shape: {
                    x1: 0,
                    y1: height * i,
                    x2: width * 30,
                    y2: height * i,
                }
            })
            // 竖线
            var line2 = new zrender.Line({
                shape: {
                    x1: width * i,
                    y1: 0,
                    x2: width * i,
                    y2: height * 30,
                }
            })
            tableGroup.add(line1)
            tableGroup.add(line2)
        }
        tableGroup.attr('position', [10, 10])
        return tableGroup
    }
}