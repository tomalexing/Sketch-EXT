openModal = (selector, options = {}) ->
  modal     = if selector instanceof $ then selector else $(selector)
  closeBtn  =  modal.find('.modal__close').add(modal.find('.modal__close2'))

  console.log closeBtn
  modal.fadeIn 500, ->
    modal.addClass 'is-open'
    setTimeout ->
      options.afterOpen?()
    , 500

  closeBtn.one 'click', (e) ->
    do e.preventDefault
    options.beforeClose?()
    modal
      .removeClass 'is-open'
      .delay 500
      .fadeOut 500

module.exports = openModal
