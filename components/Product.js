


export default function Product(params) {

    const {title,para} = params
  return (
    <div className="bg-[#78748F7A] mx-4 my-4 text-center px-1.5 pt-8 pb-20 space-y-10 rounded-2xl shadow-2xl">
     <h1 className='text-2xl font-normal uppercase'>{title}</h1>
     <p className='text-xl font-normal '>{para}</p>
    </div>
  )
}
