
export default function SocialLinks(params) {

    const {title,link} = params
  return (

    <div className='flex  flex-col items-center text-center m-10'>
    <h1 className="uppercase text-base">{title}</h1>
    <a className="text-sm" href={link}>{link}</a>
    </div>


    
    
  )
}