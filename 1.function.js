// Class Component
class Hello {

}

// Function Component
const Test = () => {
  return <div>123</div>
}

// Vue2
{
  data: {
    name: '123'
  },
  methods: {
    clicked() {

    }
  }
}
// 因为考虑状态的复用性问题
// 一个组件，复用 状态+UI
// Mixin，解决一些复用性问题
// 但是 Mixin 存在很多问题

// Vue3
// Composition API
const useName = () => {
  const { ref, reactive, computed, watch, onMounted } = Vue
  const name = ref('衣二三')
  const clicked = () => {

  }


  return {
    name,
    clicked
  }
}

const {name, clicked} = useName()
// 以此将状态逻辑与 UI 逻辑分离

// React
const useName = () => {
  const [name, setName] = useState('123')
  const clicked = useCallback(() => {

  })

  return {
    name,
    clicked
  }
}
