import View from './view';

const contents = View.getInstance()
document.getElementById('root').innerHTML = contents.render()