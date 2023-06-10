import mitt from "mitt";

interface modalEvent {
	modalName: string;
	showModal: boolean;
}
type ApplicationEvents = {
	"modal:toggle": modalEvent;
	"event:onClick": any;
};

const emitter = mitt<ApplicationEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;

/*
fire an event
useEvent('user:registered', { name: 'Israel'})
// capture
useListen('user:registered', (user) => console.log(user))
*/
