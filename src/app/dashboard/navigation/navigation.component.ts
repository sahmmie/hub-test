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
    { path: '', icon: 'dashboard', title: 'Dashboard' },
    { path: 'sponsor', icon: 'supervised_user_circle', title: 'Add Product' },
    { path: 'staff', icon: 'admin_panel_settings', title: 'order' },
    { path: 'visitors', icon: 'people_outline', title: 'Messages' },
    { path: 'delegates', icon: 'supervisor_account', title: 'Delegates' },
    { path: 'exhibitors', icon: 'supervised_user_circle', title: 'Exhibitors' },
    { path: 'communications', icon: 'message', title: 'Manage Products' },
    { path: 'activity-log', icon: 'event_note', title: 'Coupon' },
    { path: 'reports', icon: 'feed', title: 'Adsvertise' },
    { path: 'resource-managememt', icon: 'web_asset', title: 'Settings' },
  ];
  constructor(
  ) { }

  ngOnInit(): void {

  }
  toggleMenu(): void {
    this.mobile_menu = !this.mobile_menu;
  }
}
