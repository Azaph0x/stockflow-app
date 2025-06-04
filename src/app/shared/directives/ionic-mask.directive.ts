import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxMaskConfig, NgxMaskDirective, NgxMaskService, NGX_MASK_CONFIG, provideNgxMask } from 'ngx-mask';

@Directive({
  selector: 'ion-input[mask]',
  providers: [provideNgxMask()],
  standalone: true
})
export class IonicMaskDirective extends NgxMaskDirective implements OnInit, AfterViewInit {
  constructor(
    @Inject(DOCUMENT) document: any,
    @Inject(NGX_MASK_CONFIG) config: NgxMaskConfig,
    maskService: NgxMaskService,
    private elementRef: ElementRef,
    private ngControl: NgControl
  ) {
    super();
  }

  inputValue = '';

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Wait for next tick to ensure form control is initialized
    setTimeout(() => {
      this.applyInitialValue();

      // Subscribe to value changes
      if (this.ngControl && this.ngControl.valueChanges) {
        this.ngControl.valueChanges.subscribe(value => {
          // Only apply when the value changes programmatically (not from user input)
          // This prevents double application of the mask
          if (value !== null && value !== undefined &&
            this.inputValue !== value &&
              document.activeElement !== this.elementRef.nativeElement) {
            this.applyValueWithMask(value);
          }
        });
      }
    });
  }

  private applyInitialValue(): void {
    if (this.ngControl && this.ngControl.value) {
      this.applyValueWithMask(this.ngControl.value);
    }
  }

  private applyValueWithMask(value: any): void {
    if (value === null || value === undefined) return;
    if(!this.mask()) return;
    // Apply mask to value
    const maskedValue = this._maskService.applyMask(value.toString(), this.mask()!);

    // Get the native input element (in ion-input, the actual input is inside the shadow DOM)
    const ionInput = this.elementRef.nativeElement;

    // Try to access the native input element
    const nativeInput = ionInput.querySelector('input') || ionInput;

    // Update the displayed value
    nativeInput.value = maskedValue;

    // Store value internally
    this.inputValue = maskedValue;

    // Update form model if needed
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValue(maskedValue, { emitEvent: false });
    }

    // Dispatch input event to trigger change detection
    const event = new Event('input', { bubbles: true });
    nativeInput.dispatchEvent(event);
  }
}
