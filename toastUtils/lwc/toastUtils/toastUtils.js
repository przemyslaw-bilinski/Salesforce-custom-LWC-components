import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const SUCCESS = 'success';
const ERROR = 'error';
const WARNING = 'warning';
const INFO = 'info';

const DISMISSABLE = 'dismissable';
const PESTER = 'pester';
const STICKY = 'sticky';

const showToast = (context, { title = '', message = '', messageData = {}, variant = INFO, mode = DISMISSABLE, }) => {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        messageData: messageData,
        variant: variant,
        mode: mode,
    });
    context.dispatchEvent(event);
};

export { showToast, SUCCESS, ERROR, WARNING, INFO, DISMISSABLE, PESTER, STICKY };
