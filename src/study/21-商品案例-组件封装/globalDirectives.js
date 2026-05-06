export const focus = {
  mounted(el) {
    el.focus()
  }
}

export function setupGlobalDirectives(app) {
  app.directive('focus', focus)
}