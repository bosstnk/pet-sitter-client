import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../ui/button/button';
import { BrandPawBlob, BrandQuarter, BrandStar } from '../../ui/brand-element';
import { IconFacebook, IconGoogle } from '../../ui/icon';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    Button,
    BrandPawBlob,
    BrandQuarter,
    BrandStar,
    RouterLink,
    IconFacebook,
    IconGoogle,
  ],
  templateUrl: './register.html',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly serverError = signal<string | null>(null);
  protected readonly notice = signal<string | null>(null);
  protected readonly submitted = signal(false);

  /** โชว์ error เมื่อ invalid และผู้ใช้พิมพ์แล้ว (dirty) หรือกด submit แล้ว */
  protected showError(ctrl: AbstractControl): boolean {
    return ctrl.invalid && (ctrl.dirty || this.submitted());
  }

  protected readonly form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[\w.+-]+@[\w-]+\.com$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^0\d{9}$/)]],
      password: ['', [Validators.required, Validators.minLength(12)]],
    },
    { updateOn: 'blur' },
  );

  protected async onSubmit(): Promise<void> {
    this.serverError.set(null);
    this.notice.set(null);
    this.submitted.set(true);

    if (this.form.invalid) {
      return;
    }

    this.loading.set(true);
    try {
      const { session, error } = await this.auth.signUp(this.form.getRawValue());

      if (error) {
        this.serverError.set(error);
        return;
      }

      if (session) {
        // auto-login สำเร็จ → ไปหน้า home
        await this.router.navigate(['/']);
      } else {
        // Supabase เปิด email confirmation → ยังไม่มี session
        this.notice.set('Registration successful! Please check your email to confirm your account.');
        await this.router.navigate(['/login']);
      }
    } finally {
      this.loading.set(false);
    }
  }
}
