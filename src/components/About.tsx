

export const About = () => {
  return (
    <div id='about' className='w-full h-screen'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-lime-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Olá. <br /> Eu sou Francisco, prazer em conhecê-lo.</p>
          </div>
          <div>
            <p>Sou apaixonado por construir softwares excelentes que melhorem a vida das pessoas ao meu redor. Sou especialista em criar software para clientes que vão desde indivíduos e pequenas empresas até grandes corporações empresariais.</p>  
          </div>
        </div>
    </div>
  </div>
  )
}
