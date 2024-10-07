import { data } from '../data/data'


export const Projetos = () => {
  return (
    <div id='projetos' className='w-full md:h-screen'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4'>
        <div className='py-8'>
            <p className='text-4xl font-bold inline border-b-4 border-lime-600'>Projetos</p>
            <p className="py-6">Projetos desenvolvidos por mim</p>
        </div>
        {/* container */}
        <div className=' bg-slate-800 p-4 w-full rounded-lg'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Grid item */}

              {
                data.map(item => (
                  <div key={item.id}
                  style={{backgroundImage: `url(${item.image})`}}
                  className="shadow-lg shadow-[#040c16] group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
                        {/* hover effect */}
                      <div className="opacity-0 group-hover:opacity-100">
                       <span className='text-2xl font-bold tracking-wide'>{item.name}</span>
                        <div className='pt-8 text-center'>
                          <a href={item.live} target="_blank">
                            <button  className="text-center rounded-lg px-4 py-3 m-2
                               bg-white text-gray-700 font-bold text-lg">Demo</button>
                          </a>
                          <a href={item.github} target="_blank">
                            <button  className="text-center rounded-lg px-4 py-3 m-2
                               bg-white text-gray-700 font-bold text-lg">Code</button>
                          </a>
                        </div>
                      </div>
                  </div>

                ))
              }
        

      

        </div>
        </div>
       
      </div>
    </div>
  )
}
