

export default function DividerTitle(params) {

    const {title,isBothSide} = params
  return (
    !isBothSide ?
    <div className='flex items-center'>
    <div className='h-1.5 w-24 bg-green me-2'></div>
    <h1 className='uppercase'>{title}</h1>
     
    </div>
    :
     <div className='flex items-center justify-center mt-40'>
     <div className='h-1.5 w-24 bg-green  mr-10'></div>
     <h1 className='uppercase text-2xl'>{title}</h1>
     <div className='h-1.5 w-24 bg-green  ml-10'></div>
    </div>
    
    
  )
}