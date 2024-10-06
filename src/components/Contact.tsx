

export const Contact = () => {
  return (
    <section id='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form action={import.meta.env.VITE_GETFORM_URL} method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-600'>Contato</p>       
            </div>
            <input className='bg-transparent outline-none focus:border-lime-700 p-2 rounded-md border border-slate-600' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-transparent outline-none focus:border-lime-700 rounded-md border border-slate-600' type="email" placeholder='Email' name='email' />
            <textarea className='bg-transparent outline-none focus:border-lime-700 p-2 rounded-md border border-slate-600' name="message" rows={5} placeholder='Message'></textarea>
            <button className='border border-slate-600 hover:bg-lime-600 hover:border-lime-600 px-4 py-3 my-8 mx-auto flex items-center duration-300'>Enviar</button>
        </form>
    </section>
  )
}

