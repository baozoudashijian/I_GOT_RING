
class Dialog {
    constructor(options) {
        this.options = options
        this.init()
    }
    get template() {
        let {title, content} = this.options
        return `
            <div class="rongerWrapper">
                <header class="rongerHeader">${title}</header>
                <div class="rongerBody">
                    <main class="rongerMain">${content}</main>
                    <footer class="rongerFooter"></footer>
                </div>
            </div>    
        `
    }
    init() {
        let {buttons} = this.options
        let $buttons = buttons.map((buttonOptions) => {
            let $b = $('<button></button>')
            $b.text(buttonOptions.text)
            $b.on('click', buttonOptions.action)
            return $b
        })
        
        var $dialog = $(`<div class="rongerDialog"></div>`).html(this.template)
        $dialog.find('footer').append($buttons)
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