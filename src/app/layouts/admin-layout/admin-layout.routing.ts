import { Routes } from '@angular/router';
import { ProfileComponent } from 'app/profile/profile.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { PixelComponent } from '../../pixel/pixel.component'
import { LogoutComponent } from '../../logout/logout.component';
import { DiscoveryComponent } from '../../discovery/discovery.component';
import { LiveSupportComponent } from '../../live-support/live-support.component'
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'discovery',      component: DiscoveryComponent },
    { path: 'pixel',      component: PixelComponent },
    { path: 'profile',      component: ProfileComponent },
    { path: 'live-support',      component: LiveSupportComponent },
    { path: 'logout',      component: LogoutComponent },
];
