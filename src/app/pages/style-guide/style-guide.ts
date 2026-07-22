import { Component } from '@angular/core';
import { Button } from '../../ui/button/button';
import {
  BrandArch,
  BrandStar,
  BrandCircle,
  BrandQuarter,
  BrandPawBlob,
  BrandTriangle,
  BrandDonut,
  BrandBlob,
  BrandTogglePill,
} from '../../ui/brand-element';
import { IconBell, IconChat, IconMenu } from '../../ui/icon';

interface Swatch {
  name: string;
  hex: string;
}

interface TypeSample {
  token: string;
  cls: string;
  sample: string;
  meta: string;
}

@Component({
  selector: 'app-style-guide',
  imports: [
    Button,
    BrandArch,
    BrandStar,
    BrandCircle,
    BrandQuarter,
    BrandPawBlob,
    BrandTriangle,
    BrandDonut,
    BrandBlob,
    BrandTogglePill,
    IconBell,
    IconChat,
    IconMenu,
  ],
  templateUrl: './style-guide.html',
})
export class StyleGuide {
  readonly orange: Swatch[] = [
    { name: '100', hex: '#FFF1EC' },
    { name: '200', hex: '#FFD5C2' },
    { name: '300', hex: '#FFB899' },
    { name: '400 Hover', hex: '#FF986F' },
    { name: '500 Main', hex: '#FF7037' },
    { name: '600 Press', hex: '#E44A0C' },
  ];

  readonly gray: Swatch[] = [
    { name: '100', hex: '#DCDFED' },
    { name: '200', hex: '#AEB1C4' },
    { name: '300', hex: '#7B7E8F' },
    { name: '400', hex: '#5B5D6F' },
    { name: '500', hex: '#3A3B46' },
  ];

  readonly accent: Swatch[] = [
    { name: 'Green 500', hex: '#1CCD83' },
    { name: 'Green 100', hex: '#E7FDF4' },
    { name: 'Blue 500', hex: '#76D0FC' },
    { name: 'Blue 100', hex: '#ECFBFF' },
    { name: 'Pink 500', hex: '#FA8AC0' },
    { name: 'Pink 100', hex: '#FFF0F1' },
    { name: 'Yellow 200', hex: '#FFCA62' },
  ];

  readonly utility: Swatch[] = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Error', hex: '#EA1010' },
    { name: 'Divider', hex: '#E4E6ED' },
  ];

  readonly typography: TypeSample[] = [
    { token: 'H1', cls: 'text-h1', sample: 'Heading', meta: '56 / 64 · Bold 700' },
    { token: 'H2', cls: 'text-h2', sample: 'Heading Two', meta: '36 / 44 · Bold 700' },
    { token: 'H3', cls: 'text-h3', sample: 'Heading Three', meta: '24 / 32 · Bold 700' },
    { token: 'H4', cls: 'text-h4', sample: 'Heading Four', meta: '20 / 28 · Bold 700' },
    {
      token: 'Body 1',
      cls: 'text-body-1 text-gray-500',
      sample: 'The quick brown fox jumps',
      meta: '18 / 26 · Medium 500',
    },
    {
      token: 'Body 2',
      cls: 'text-body-2 text-gray-500',
      sample: 'The quick brown fox jumps over the lazy dog',
      meta: '16 / 28 · Medium 500',
    },
    {
      token: 'Body 3',
      cls: 'text-body-3 text-gray-500',
      sample: 'The quick brown fox jumps over the lazy dog',
      meta: '14 / 24 · Medium 500',
    },
    { token: 'Kicker', cls: 'text-kicker', sample: 'Section Label', meta: '14 / 24 · Bold + UC' },
  ];

  readonly radii = [
    { value: '6px', cls: 'rounded-md', use: 'Checkbox' },
    { value: '8px', cls: 'rounded-input', use: 'Input · Icon' },
    { value: '16px', cls: 'rounded-card', use: 'Card · Modal' },
    { value: '99px', cls: 'rounded-pill', use: 'Button · Badge' },
  ];
}
