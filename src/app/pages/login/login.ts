import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../ui/button/button';
import { BrandPawBlob, BrandQuarter, BrandStar } from '../../ui/brand-element';
import { IconFacebook, IconGoogle } from '../../ui/icon';
import { Checkbox } from '../../ui/checkbox';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    Button,
    BrandPawBlob,
    BrandQuarter,
    BrandStar,
    RouterLink,
    IconFacebook,
    IconGoogle,
    Checkbox,
  ],
  templateUrl: './login.html',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly serverError = signal<string | null>(null);
  protected readonly submitted = signal(false);

  /** โชว์ error เมื่อ invalid และผู้ใช้พิมพ์แล้ว (dirty) หรือกด submit แล้ว */
  protected showError(ctrl: AbstractControl): boolean {
    return ctrl.invalid && (ctrl.dirty || this.submitted());
  }

  protected readonly form = this.fb.nonNullable.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    },
    { updateOn: 'blur' },
  );

  protected async onSubmit(): Promise<void> {
    this.serverError.set(null);
    this.submitted.set(true);

    if (this.form.invalid) {
      return;
    }

    this.loading.set(true);
    try {
      const { error } = await this.auth.signIn(this.form.getRawValue());

      if (error) {
        this.serverError.set(error);
        return;
      }

      // เข้าสู่ระบบสำเร็จ → ไปหน้า home
      await this.router.navigate(['/']);
    } finally {
      this.loading.set(false);
    }
  }
}
