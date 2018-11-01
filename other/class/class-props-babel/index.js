class Component {
  constructor(props) {
    this.props = props
  }
}

class ClassProperty extends Component {
  state = "state"
}

class Constructor extends Component {
  constructor(props) {
    super(props)
    this.state = "state"
  }
}

let classProp = new ClassProperty('props')
let construct = new Constructor('props')

console.log(classProp) // ClassProperty { props: 'props', state: 'state' }
console.log(construct) // Constructor { props: 'props', state: 'state' }
