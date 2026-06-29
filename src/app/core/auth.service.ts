import { Injectable, signal } from '@angular/core';
import { AuthError, Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase.client';

export interface SignUpInput {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface AuthResult {
  user: User | null;
  session: Session | null;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  /** ผู้ใช้ปัจจุบัน — sync กับ session ของ Supabase */
  readonly currentUser = signal<User | null>(null);

  constructor() {
    // โหลด session ที่มีอยู่ตอนเริ่มแอป + เฝ้าฟังการเปลี่ยนแปลง
    supabase.auth.getSession().then(({ data }) => {
      this.currentUser.set(data.session?.user ?? null);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUser.set(session?.user ?? null);
    });
  }

  /** สมัครสมาชิกด้วย email/password — เก็บ name/phone ไว้ใน user_metadata */
  async signUp({ email, password, name, phone }: SignUpInput): Promise<AuthResult> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name, phone } },
      });
      return { user: data.user, session: data.session, error: this.toMessage(error) };
    } catch (e) {
      return { user: null, session: null, error: this.toMessage(e) };
    }
  }

  /** เข้าสู่ระบบด้วย email/password (สำหรับหน้า login) */
  async signIn({ email, password }: SignInInput): Promise<AuthResult> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      return { user: data.user, session: data.session, error: this.toMessage(error) };
    } catch (e) {
      return { user: null, session: null, error: this.toMessage(e) };
    }
  }

  /** ออกจากระบบ */
  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }

  /** แปลง error เป็นข้อความอ่านง่าย (null ถ้าไม่มี error) */
  private toMessage(error: unknown): string | null {
    if (!error) return null;
    if (error instanceof AuthError) return error.message;
    if (error instanceof Error) return error.message;
    return 'Something went wrong. Please try again.';
  }
}
