
import Render1 from '../questions/Render1'
import Render2 from '../questions/Render2'
import Render3 from '../questions/Render3'

const FormRender = () => {
  return (
    <div>
      <Render1 />
      <div className="my-8 border-t-2 border-gray-300"></div>

      <Render2 />
      <div className="my-8 border-t-2 border-gray-300"></div>

      <Render3 />

    </div>
  )
}

export default FormRender
