import { Component } from '@angular/core';
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
export class Home {}
