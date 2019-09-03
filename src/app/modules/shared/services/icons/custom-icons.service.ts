import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';

export interface CustomIcon {
  name: string;
  path: string;
}

@Injectable()
export class CustomIconService {
  private readonly platformIcons: CustomIcon[] = [
    { name: 'windows', path: '../../../../../assets/images/platforms/windows.svg' },
    { name: 'ps4', path: '../../../../../assets/images/platforms/playstation4.svg' },
    { name: 'xbox', path: '../../../../../assets/images/platforms/xbox.svg' },
    { name: 'nintendo', path: '../../../../../assets/images/platforms/nintendoswitch.svg' },
    { name: 'ios', path: '../../../../../assets/images/platforms/apple.svg' },
    { name: 'android', path: '../../../../../assets/images/platforms/android.svg' }
  ];

  constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {}

  public registerPlatformIcons(): void {
    for (const platformIcon of this.platformIcons) {
      this.matIconRegistry.addSvgIcon(
        platformIcon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(platformIcon.path)
      );
    }
  }
}
