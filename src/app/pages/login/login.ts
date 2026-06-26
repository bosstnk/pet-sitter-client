import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../ui/button/button';
import { BrandPawBlob, BrandQuarter, BrandStar } from '../../ui/brand-element';
import { IconFacebook, IconGoogle } from '../../ui/icon';
import { Checkbox } from '../../ui/checkbox';

@Component({
  selector: 'app-login',
  imports: [Button, BrandPawBlob, BrandQuarter, BrandStar, RouterLink, IconFacebook, IconGoogle, Checkbox],
  templateUrl: './login.html',
})
export class Login {}
