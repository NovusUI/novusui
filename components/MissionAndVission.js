

export default function MissionAndVission(params) {

    const {title,para} = params
  return (
    <>
     {title &&<h1 className='text-3xl font-bold uppercase'>{title}</h1>}
     <p className='text-2xl font-normal m-3'>{para}</p>
    </>
  )
}
