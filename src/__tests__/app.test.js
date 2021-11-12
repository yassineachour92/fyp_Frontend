import {render,screen,cleanup} from '@testing-library/react';
import App from '../App'
test('test',()=>{
    render(<App />)
    const appElement=screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
})