import { Component } from '@angular/core';

import { mergeMap } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor (private headerService: HeaderService, private projectsService: ProjectsService) {}

  isHome$ = this.headerService.isHome();

  projects = this.isHome$.pipe(
    mergeMap(atHome => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];
}
