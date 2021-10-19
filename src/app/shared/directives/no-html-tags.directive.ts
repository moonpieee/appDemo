import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoHtmlTags]'
})
export class NoHtmlTagsDirective {

  constructor(private el: ElementRef) { }

  /**
   * regex provided in email ==> '^[<>/:&+%;\"]|\\.\\w{2,4}*$';
   * 
   * Tried using the same, but its not working so added a alphanumeric regex
   */

  regexForAlphaNumeric = '^[a-zA-Z0–9 _]*$';
  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexForAlphaNumeric).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  validateFields(event) {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text/plain').replace(/^[a-zA-z0-9 -]/g, '');
    document.execCommand('insertHTML', false, pasteData);
  }

}
