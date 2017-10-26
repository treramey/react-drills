<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This project is geared towards helping you improve your React skills. We will provided minimal guidance compared to most afternoon projects that offer detailed instructions. Therefore, this project can be used as a good check if you are truly understanding and implementing React on your own. When you first go through these set of problems, you may need to look at solutions for help. The goal, however, should be to get to the point where you can complete all sets of problems without any help from solutions and/or mentors.

## Challenge

Once you get to the point where you no longer have to look at the solutions and/or ask mentors for help, time yourself to see how long it takes you to complete all of these sets. After your first time, try to beat that time at least twice. The project is called React Drills for a reason! Repetition will help solidify these React concepts.

Good Luck!

## Setup

To help speed up the process of moving from question to question we have provided a bunch of `app-#/` folders that have been created using the `create-react-app` CLI. Therefore, if you are currently on question 1, you will put your work inside of `app-1`. If you are currently on question 4, you will put your work inside of `app-4`.

* Run `npm install` in each `app-#/` folder before starting the questions.
  * You can either run `npm install` for each `app-#/` before starting question one or just remember to run `npm install` as you move from question to question.

You can then test your work for each question, as you develope a solution, by running `npm run start`.

## Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios

1. Create a basic react app where you type in a text box and it shows up as text somewhere else on the screen.
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  handleChange(value) {
    this.setState({
      message: value
    })
  }  

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        {this.state.message}
      </div>
    );
  }
}

export default App;
```

</details>
</br>

2. Create an app where there is an array of data (in the component's state) that is shown on the screen as a list
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
```

</details>
</br>

3. Create an app where there is a list of data on the screen (from component's state) where you can type to filter what's shown in the list.
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ],
      filterString: ""
    }
  }

  handleChange(filter) {
    this.setState({
      filterString: filter
    })
  }

  render() {
    let foodsToDisplay = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterString);
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    console.log(foodsToDisplay);
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
```

</details>
</br>

4. Create an app hitting an api (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc).
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1")
    .then((response) => {
      this.setState({
        lukeSkywalker: response.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.lukeSkywalker.name}</h1>
        <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
        <h1>Height: {this.state.lukeSkywalker.height}</h1>
        <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
      </div>
    );
  }
}

export default App;
```

</details>
</br>

5. Make a larger app if you have time.

## Set 2

6. Create a "login" element component that includes two text inputs, "username" and "password", and a button ("login"). When the login button is clicked, show an alert.
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
```

</details>

<details>
<summary><code> Login.js </code></summary>

```javascript
import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange(name) {
        this.setState({
            username: name
        })
    }

    handlePasswordChange(pass) {
        this.setState({
            password: pass
        })
    }

    handleLogin() {
        alert("Username: " + this.state.username + " Password: " + this.state.password);
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUsernameChange(e.target.value)} type="text"/>
                <input onChange={(e) => this.handlePasswordChange(e.target.value)} type="text"/>
                <button onClick={() => this.handleLogin()}>Login</button>
            </div>
        )
    }
}

export default Login;
```

</details>
</br>

7. Create a component that is passed an image string via props and renders the image via an `<img />` tag.
### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Below is my image:</h1>
        <Image myImage={"https://http.cat/200"}/>
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Image.js </code></summary>

```javascript
import React from 'react';

export default function Image(props) {
    return (
        <div>
            <img src={props.myImage} alt=""/>
        </div>
    )
}
```

</details>
</br>

8. Create an app that displays your to-do list. You will need two components, your App component and a Todo component. Pass individual to-do items as props to the Todo component.
    - To-do list on App component state.
    - Todo component renders 1 to-do item.

### Solution
<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInputChange(value) {
    this.setState({
      input: value
    })
  }
  handleAddChore(value) {
    this.setState({
      list: [...this.state.list, value],
      input: ''
    })
  }
  render() {
    let list = this.state.list.map((e,i) => {
      return (
        <TodoList key={i} chore={e} />
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.input} placeholder="Enter new chore" onChange={(e) => this.handleInputChange(e.target.value)}/>
          <button onClick={() => this.handleAddChore(this.state.input)}>Add</button>
        </div>
        <hr/>
        {list}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> TodoList.js </code></summary>

```javascript
import React from 'react';

export default function TodoList (props) {
    return (
        <div>
            {props.chore}
        </div>
    )
}
```

</details>
</br>

## Set 3 (Routing)

9. Create an app that has three routes (using `react-router-dom`):
   * home `'/'`
   * sign up `'/signup'`
   * details `'/details'`

- Create a simple menu for each view that allows you to navigate between all three routes.

- Use any of the APIs listed in app #4 above and display the data in the details route.
### Solution
<details>
<summary><code> index.js </code></summary>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();

```

</details>

<details>
<summary><code> router.js </code></summary>

```javascript
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';

export default (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/details' component={Details}/>
        </Switch>
)
```

</details>

<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>
        <hr/>
        {router}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Home.js </code></summary>

```javascript
import React from 'react';

export default function Home() {
    return (
        <div>
            <h1>This is the home page.</h1>
        </div>
    )
}
```

</details>

<details>
<summary><code> Signup.js </code></summary>

```javascript
import React from 'react';

export default function Signup() {
    return (
        <div>
            <h1>This is the signup page.</h1>
        </div>
    )
}
```

</details>

<details>
<summary><code> Details.js </code></summary>

```javascript
import React from 'react';

export default function Details() {
    return (
        <div>
            <h1>This is the details page.</h1>
        </div>
    )
}
```

</details>
</br>

10. Create an app that has two routes (using `react-router-dom`):
      * products `'/'`
      * details `'/details/:id'`
  - Hitting an api, show all products/info/people (depends on the api you hit) on the `products` route.
  - When you click on a specific product, show the details in the `details` route. 
### Solution
<details>
<summary><code> index.js </code></summary>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();

```

</details>

<details>
<summary><code> router.js </code></summary>

```javascript
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';

export default (
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route path='/details/:id' component={Details}/>
    </Switch>
)
```

</details>

<details>
<summary><code> App.js </code></summary>

```javascript
import React, { Component } from 'react';
import './App.css';

import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;

```

</details>

<details>
<summary><code> Products.js </code></summary>

```javascript
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products')
        .then((response) => {
            console.log(response.data);
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        let products = this.state.products.map((e,i) => {
            if(e.image) {
                return(
                    <Link to={`/details/${e.id}`} key={i}>
                        <img className="product-image" src={e.image}/>
                    </Link>
                )
            }
            
        })
        return (
            <div>
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}

export default Products;
```

</details>

<details>
<summary><code> Details.js </code></summary>

```javascript
import React, {Component} from 'react';

import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({
                item: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img className="product-image" src={this.state.item.image}/>
                <h4>{`Price: $${this.state.item.price}.00`}</h4>
            </div>
        )
    }
}

export default Details;
```

</details>
</br>


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>