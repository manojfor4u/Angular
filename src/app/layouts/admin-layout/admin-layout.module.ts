import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProfileComponent } from '../../profile/profile.component'
import { PixelComponent } from '../../pixel/pixel.component'
import { LogoutComponent } from '../../logout/logout.component';
import { DiscoveryComponent } from '../../discovery/discovery.component';
import { LiveSupportComponent } from '../../live-support/live-support.component'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    LogoutComponent,
    PixelComponent,
    DiscoveryComponent,
    LiveSupportComponent
  ]
})

export class AdminLayoutModule { }
