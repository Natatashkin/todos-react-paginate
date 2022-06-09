import { createPortal } from 'react-dom';

const portalsRoot = document.createElement('div');
portalsRoot.classList.add('portal-root');
document.body.appendChild(portalsRoot);

const Portal = props => createPortal(props.children, props.node || portalsRoot);

export default Portal;
