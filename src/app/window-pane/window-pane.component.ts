import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-window-pane',
  templateUrl: './window-pane.component.html',
  styleUrls: ['./window-pane.component.scss'],
  animations: [
    trigger('one', [
      transition(':enter', [
        style({transform: 'translateY(50%) translateX(200%)'}),
        animate('400ms ease-in', style({transform: 'translateX(-20%) translateY(-25%) rotate(5deg)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('two', [
      transition(':enter', [
        style({transform: 'translateY(25%) translateX(200%)'}),
        animate('400ms ease-in', style({transform: 'translateX(50%) translateY(5%) rotate(-5deg)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    // trigger('one', [
    //   // :ENTER TRANSITION
    //   // Transition Styles
    //   transition('void => *', [
    //     // 'From' styles
    //     style({
    //       opacity: 0.2,
    //       transform: 'translateX(100vw) scale(0.1)'
    //     }),
    //     animate('1000ms ease-in',
    //       // 'To' styles
    //       // 1 - Comment this to remove the item's grow...
    //       style({
    //         opacity: 1,
    //         transform: 'scale(1)'
    //       })
    //     )
    //     // group([
    //     //   style({
    //     //     transform: 'translateX(100vw)'
    //     //   }),
    //     //   animate('1s ease-in',
    //     //     style({
    //     //       // transform: 'translateX(100vw)'
    //     //     })
    //     //   ),
    //     //   animate('2s 1.5s ease-in',
    //     //     style({
    //     //       opacity: 0.2,
    //     //       // transform: 'translateX(100%)'
    //     //     })
    //     //   ),
    //     // ])
    //   ]),
    //
    //   // :LEAVE TRANSITION
    //   // 2 - Uncomment this to apply the leave transition
    //   transition('* => void', [
    //     animate('1000ms ease-in-out',
    //       style({
    //         opacity: 0.2,
    //         transform: 'translateX(100%)'
    //       })
    //     )
    //   ]),
    //
    //   // GROUPED ANIMATIONS
    //   // Nos permite realizar animaciones en paralelo
    //   transition('* => void', [
    //     group([
    //       animate('1s ease',
    //         style({
    //           backgroundColor: '#ffc107'
    //         })
    //       ),
    //       animate('2s 1.5s ease',
    //         style({
    //           opacity: 0.2,
    //           transform: 'translateX(100%)'
    //         })
    //       ),
    //     ])
    //   ])
    // ])
  ]
})
export class WindowPaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
