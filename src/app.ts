//you add three slashes to import from namespace
//write self closing xml tag and file name as reference path
/// <reference path = "models/drag-drop.ts"/>
///<reference path = "models/project.ts"/>
///<reference path = "state/project-state.ts"/>
///<reference path = "decorators/autobind.ts"/>
///<reference path = "components/project-input.ts"/>
///<reference path = "components/project-list.ts"/>
// This means we tell TS where to find this info

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
