// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'assets',
				loadChildren: 'app/views/pages/apps/assets/assets.module#AssetsModule',
			},
			{
				path: 'profile',
				loadChildren: 'app/views/pages/apps/profile/profile.module#ProfileModule'
			},
			{
				path: 'users',
				loadChildren: 'app/views/pages/apps/users/users.module#UsersModule'
			},
			{
				path: 'quizes',
				loadChildren: 'app/views/pages/apps/quiz/quizes.module#QuizesModule'
			},
			{
				path: 'computations',
				loadChildren: 'app/views/pages/apps/computations/computations.module#ComputationsModule'
			},
			{
				path: 'parables',
				loadChildren: 'app/views/pages/apps/parables/parables.module#ParablesModule'
			},
			{
				path: 'adverts',
				loadChildren: 'app/views/pages/apps/adverts/adverts.module#AdvertsModule'
			},
			{
				path: 'reports',
				loadChildren: 'app/views/pages/apps/report/reports.module#ReportsModule'
			},
			{
				path: 'md-tasks',
				loadChildren: 'app/views/pages/apps/md-tasks/md-tasks.module#MdTasksModule'
			},
			// {
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
