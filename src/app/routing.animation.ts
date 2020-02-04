import {
    animate,
    AnimationTriggerMetadata,
    query,
    style,
    transition,
    trigger
} from '@angular/animations';

export function fadeInOutRoutingAnimation(): AnimationTriggerMetadata {
    return trigger('fadeAnimation', [
        transition('* => *', [
            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.5s', style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
    ]);
}