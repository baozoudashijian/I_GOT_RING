class Suggestion {
    constructor(options) {
        this.options = options
        this.$input = $(options.input)
        this.$input.wrap('<div class="rongerSuggestion"></div>')
        this.$wrapper = this.$input.parent()
        this.$ol = $('<ol class="rongerSuggestion-list"></ol>')
        this.$input.after(this.$ol)
        this.$loading = $('<div class="rongerSuggestion-loading"></div>')
        this.$loading.html(this.options.loadingTemplate)
        this.$ol.after(this.$loading)
        this.$empty = $('<div class="rongerSuggestion-empty"></div>')
        this.$empty.html(this.options.emptyTemplate)
        this.$ol.after(this.$empty)
        this.bindEvents()
    }
    bindEvents() {
        let timeId
        this.$input.on('input', (e) => {
            if(timeId) {
                window.clearTimeout(timeId)
            }
            timeId = setTimeout(() => {
                this.$ol.empty()
                this.search(e.currentTarget.value)
                timeId = undefined
            }, 1000)
        })
        this.$ol.on('click', 'li', (e) => {
            this.$input.val($(e.currentTarget).text())
        })
    }
    search(keyword) {
        this.$wrapper.removeClass('empty')
        this.$wrapper.addClass('loading')
        this.options.search(keyword, (array) => {
            this.$wrapper.removeClass('loading')
            if(!array || array.length === 0) {
                this.$wrapper.addClass('empty')
            }
            array.forEach((text) => {
                this.$ol.append($('<li></li>').text(text))
            })
        })
    }
}

var s = new Suggestion({
    input: 'input',
    search: function(text, callback) {
        if(text === '0') {
            return callback([])
        }
        let array = []
        for(let i=0; i<5; i++) {
            var n = parseInt(Math.random() * 100, 10)
            array.push(text+n)
        }
        setTimeout(() => {
            callback(array)
        }, 2000)
    },
    loadingTemplate: '加载中',
    emptyTemplate: '搜索结果为空！'
})