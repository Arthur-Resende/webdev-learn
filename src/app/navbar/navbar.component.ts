import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  lightMode = true

  changeTheme() {
    let current_mode = '';
    let new_mode = '';

    if (this.lightMode === true) {
      current_mode = 'lightmode';
      new_mode = 'darkmode';
    } else {
      current_mode = 'darkmode';
      new_mode = 'lightmode';
    }

    let elements = document.querySelectorAll('.'+current_mode);
    elements.forEach(element => {
      element.setAttribute("class", new_mode)
    });

    this.lightMode = !this.lightMode;
  }
}
