export class LanguageNotSupportedError extends Error {
  constructor(message = 'Language not supported') {
    super(message)
    this.name = 'LanguageNotSupportedError'
  }
}
