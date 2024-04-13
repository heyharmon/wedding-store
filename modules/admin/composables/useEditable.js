export default function useComposableFunction() {
  const isEditing = ref(false)
  const editableElement = ref()

  const editableClasses = computed(() => {
    let base = 'hover:bg-indigo-400/20 rounded-lg cursor-pointer '
    let active = 'ring-2 ring-indigo-600 outline-none cursor-text '

    return isEditing.value === true ? base + active : base
  })

  function update(event) {
    console.log('Updated...')
    // if (event.target.innerText === '') editableElement.value.innerText = 'Header'
    // inputText.value = props.modelValue == "" ? props.placeholder : props.modelValue
  }

  function onClick(event) {
    isEditing.value = true
    setTimeout(() => {
      (editableElement.value).focus()
    }, 10)
    // inputText.value = props.modelValue || ""
  }

  function onInput(event) {
    console.log('Input...')
  }

  function onBlur(event) {
    isEditing.value = false;
    update()
  }

  function onPaste(event) {
    event.preventDefault()
    let text = (event.originalEvent || event).clipboardData.getData('text/plain')
        text = replaceAll(text, '\r\n', ' ');
        text = replaceAll(text, '\n', ' ');
        text = replaceAll(text, '\r', ' ');
    window.document.execCommand('insertText', false, text);
  }

  function onKeypress(event) {
    if (event.key == 'Enter') {
      event.preventDefault()
      isEditing.value = false
    }
  }

  function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
  }

  return {
    isEditing,
    editableElement,
    editableClasses,
    onClick,
    onInput,
    onBlur,
    onPaste,
    onKeypress,
  }
}