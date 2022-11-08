
class Dialog {
    constructor(options) {
        this.options = options
        this.init()
    }
    init() {
        let {title, content, buttons} = this.options
        let $buttons = buttons.map((buttonOptions) => {
            let $b = $('<button></button>')
            $b.text(buttonOptions.text)
            $b.on('click', buttonOptions.action)
            return $b
        })
        let template = `
            <div>
                <header>${title}</header>
                <main>${content}</main>
                <footer></footer>
            </div>    
        `
        var $dialog = $(`<div></div>`).html(template)
        $dialog.append($buttons)
        this.$dialog = $dialog
        
    }
    open() {
        this.$dialog.appendTo('body')
    }
    close() {
        this.$dialog.detach()
    }
}

x.onclick = function() {
    var dialog = new Dialog({
        title: '标题',
        content: '<b>欢迎</b>',
        buttons: [{
            text: '确定',
            action: function() {
                setTimeout(() => {
                    dialog.close()
                }, 0)
            }
        },{
            text: '取消',
            action: function() {
                dialog.close()
            }
        }]
    })
    dialog.open()

}