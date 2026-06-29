import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import {
  BrandPawBlob,
  BrandStar,
  BrandQuarter,
  BrandBlob,
  BrandCircle,
  BrandArch,
  BrandDonut,
  BrandTriangle,
  BrandTogglePill,
} from '../../ui/brand-element';
import { IconBell, IconChat, IconMenu } from '../../ui/icon';
import { Logo } from '../../ui/logo/logo';
import { Button } from '../../ui/button/button';
import { RatingSelect } from '../../ui/rating-select';
import { Dropdown } from '../../ui/dropdown';
import { Checkbox } from '../../ui/checkbox';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    BrandPawBlob,
    BrandStar,
    BrandQuarter,
    BrandBlob,
    BrandCircle,
    BrandArch,
    BrandDonut,
    BrandTriangle,
    BrandTogglePill,
    Logo,
    IconBell,
    IconChat,
    IconMenu,
    Button,
    RatingSelect,
    Dropdown,
    Checkbox
  ],
  templateUrl: './home.html',
})
export class Home {
  private readonly auth = inject(AuthService);

  /** ผู้ใช้ปัจจุบัน (null = ยังไม่ล็อกอิน) */
  protected readonly user = this.auth.currentUser;

  /** ชื่อที่ใช้แสดง (จาก metadata name ถ้าไม่มีใช้ email) */
  protected readonly displayName = computed(() => {
    const u = this.user();
    if (!u) return '';
    return (u.user_metadata?.['name'] as string) || u.email || '';
  });

  /** ตัวอักษรย่อสำหรับ avatar */
  protected readonly initial = computed(() => {
    const name = this.displayName();
    return name ? name.charAt(0).toUpperCase() : '?';
  });

  protected logout(): void {
    void this.auth.signOut();
  }
}
