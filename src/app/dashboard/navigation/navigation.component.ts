import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  staff_more = true;
  sp_more = true;
  delegate_more = true;
  mobile_menu = false;
  resource_more = false;
  user: any;
  name = '';
  menu = [
    { path: '', icon: '../../../assets/icons/icon - home.svg', title: 'Dashboard' },
    { path: 'sponsor', icon: '../../../assets/icons/icon - home.svg', title: 'Add Product' },
    { path: 'staff', icon: '../../../assets/icons/icon - order.svg', title: 'order' },
    { path: 'visitors', icon: '../../../assets/icons/icon - home.svg', title: 'Messages' },
    { path: 'communications', icon: '../../../assets/icons/icon - products.svg', title: 'Manage Products' },
    { path: 'activity-log', icon: '../../../assets/icons/icon - coupon.svg', title: 'Coupon' },
    { path: 'reports', icon: '../../../assets/icons/icon - advertise.svg', title: 'Adsvertise' },
    { path: 'resource-managememt', icon: '../../../assets/icons/icon - settings.svg', title: 'Settings' },
  ];
  constructor(
  ) { }

  ngOnInit(): void {

  }
  toggleMenu(): void {
    this.mobile_menu = !this.mobile_menu;
  }
}
