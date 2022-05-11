// Drag & Drop Interfaces

// you can put anything in a namespace: classes, constants, anything.
//can export items from within namespaces, very cool.
namespace DDInterfaces {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
