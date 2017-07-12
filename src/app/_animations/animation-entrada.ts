import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const entrada = 
	trigger('entrada', [
		transition('void => *', [ // :enter
			animate(3000, keyframes([
				style({opacity: '0', transform: 'translateY(-100%) scale(0.2)', offset: 0 }),
				style({opacity: '1', transform: 'translateY(-20px) scale(0.5)', offset: 0.85 }),
				style({opacity: '1', transform: 'translateY(0) scale(1)', offset: 1 })
			]))
		]),
		transition('* => void', [ // :leave
			animate('.5s 800ms', style({ transform: 'scale(0)' }))
		])
	]);