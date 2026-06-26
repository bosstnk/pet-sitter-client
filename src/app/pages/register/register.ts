import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../ui/button/button';
import { BrandPawBlob, BrandQuarter, BrandStar } from '../../ui/brand-element';
import { IconFacebook, IconGoogle } from '../../ui/icon';

@Component({
  selector: 'app-register',
  imports: [Button, BrandPawBlob, BrandQuarter, BrandStar, RouterLink, IconFacebook, IconGoogle],
  templateUrl: './register.html',
})
export class Register {}
