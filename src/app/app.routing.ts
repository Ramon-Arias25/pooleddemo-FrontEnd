import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user.edit/user.edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowerComponent } from './components/follower/follower.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'edit-profile', component: UserEditComponent},
    {path: 'people/:page', component: UsersComponent},
    {path: 'people', component: UsersComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'following/:id/:page', component: FollowingComponent},
    {path: 'follower/:id/:page', component: FollowerComponent},
    {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);