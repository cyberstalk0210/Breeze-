import './sideBar.css'
import IconSideBar from '../icons/icons'
const sidebar = function sideBar({ props, onchange }) {
  return (
    <div className='h-100 '>
      <div className='sideBar' >

        <div className='icon pt-4'>
          <i class="fa-solid fa-umbrella"></i>
        </div>

        <div className='icons pt-5 w-100'>
          {props.map(item => (
            <IconSideBar
              name={item.name}
              key={item.id}
              link={item.link} />
          ))}
        </div>

      </div>
    </div >
  )
}
export default sidebar