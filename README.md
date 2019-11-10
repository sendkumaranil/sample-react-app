This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Examples:<br/>
<p>Single html element render:</p>
        <pre>ReactDOM.render(<h1>Welcome to Customer Portal!</h1>,document.getElementById('root'));</pre>
<p>Multiple html elements render wrap in single html element:</p>
        <pre>ReactDOM.render(<div><h1>Anil Kumar</h1><ul><li>India</li><li>Bengaluru</li><li>Karnataka</li></ul></div>,document.getElementById('root2'));</pre>
<p>Function Component Render:</p>
        <pre>ReactDOM.render(<MyInfo />,document.getElementById('root3'));</pre>
<p>Parent/Child Function Component Render:</p>
        <pre>ReactDOM.render(<OrderInfo />,document.getElementById('root4'));</pre>
