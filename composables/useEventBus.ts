import mitt from "mitt";

interface Modal {
	name: string;
	visible: Boolean;
}
type ApplicationEvents = {
	"modal:toggle": Modal;
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
