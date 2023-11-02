import Image from 'next/image'
import MissionAndVssion from "../components/MissionAndVission"
import SubTitle from "../components/SubTitle"
import Product from "../components/Product"
import {uiux,motivatedProductTitle} from "../components/content"
import DividerTitle from "../components/DividerTitle"
import SocialLink from "../components/SocialLinks"

export default function Home() {

  const ouMissionPara = "Brand is a branding product that is focused on helping small brands gain the attraction they need to move their brand to the next level.At Brand our we give your product the final touch, A touch of class with Tech. Let us hold hands while we grow."
  const ourVissionPara = `
  Brand is a branding product that is focused on helping small brands 
gain the attraction they need to move their brand to the next level.
At Brand our we give your product the final touch, A touch of class with 
Tech. Let us hold hands while we grow.
  `
  const aboutUs1 = `Brand is a branding product that is focused on helping small brands 
  gain the attraction they need to move their brand to the next level.`
  
  const aboutUs2 =`At Brand our we give your product the final touch, A touch of class with 
  Tech. Let us hold hands while we grow.`

  return (
    <main>
      <section className="h-screen px-4" id='home'>
       
        <nav className="h-1/6 p-4 flex justify-center items-center" >
          <div className="flex items-center absolute left-6 lg:left-120px ">
            <h1 className=" text-xl font-bold">NovusUi</h1>
          </div>
          <ul className="hidden lg:flex justify-center">
            <li className="nav-list"><a href={"#home"}>home</a></li>
            <li className="nav-list"><a href={"#works"}>our works</a></li>
            <li className="nav-list"><a href={"#about"}>about</a></li>
            <li className="nav-list"><a href={"#s-mat"}>study materials</a></li>
          </ul>

        </nav>

        <div className='h-5/6 text-center flex flex-col justify-center items-center space-y-20 '>

          <h1 className='uppercase text-2xl font-semibold md:text-5xl '>tech for the future</h1>
          <p className='text-xl text-[#929292] w-365 md:w-469 md:text-3xl '>we are focused on building products for the future</p>
          <button className='uppercase bg-green w-56 h-10 text-xs md:w-360 md:h-16 md:text-2xl'>see what we are about</button>
    
        </div>
      </section>
      <section className='space-y-10 p-4 pb-28  px-16 lg:px-120px' id='about'>
       <DividerTitle title={"about us"}/>
        <MissionAndVssion para={aboutUs1}/>
        <MissionAndVssion para={aboutUs2}/>
        <SubTitle subTitle={"our mission and vission"}/>
        <MissionAndVssion title={"our mission"} para={ouMissionPara}/>
        <SubTitle subTitle={"our mission and vission"}/>
        <MissionAndVssion title={"our vission"} para={ourVissionPara}/>
      </section>
      <section className='h-auto md:p-12  lg:px-120px'>
        <div className='flex flex-col bg-[#5C2BF5] px-6 pt-12 pb-16 lg:p-12 space-y-16  rounded-2xl'>
          <h1 className='uppercase text-center text-2xl'>what we do for our clients</h1>
          <div className='flex justify-around flex-col md:pb-10  lg:flex-row '>
            <Product title={uiux.title} para={uiux.para}/>
            <Product title={uiux.title} para={uiux.para}/>
            <Product title={uiux.title} para={uiux.para}/>
          </div>
        </div>
       
        <DividerTitle title={motivatedProductTitle} isBothSide={true}/>
      </section>
      <section className=' pt-20 space-y-24 ' id='works'>
          <div className='mb-40 px-10 '>
            <ul className="flex justify-center  flex-wrap text-2xl uppercase">
            <li className=" mx-2 md:mx-20 mb-5">web3</li>
            <li className="mx-2 md:mx-20 mb-5">fintech</li>
            <li className=" mx-2 md:mx-20 mb-5">lifestyle & fashion</li>
            <li className="mx-2 md:mx-20 mb-5">agrotech</li>
            </ul>
          </div>
          <div className='p-120px'>
          <SubTitle subTitle={"some of our works"}/>
          </div>
          <div className='bg-[#564C923B] overflow-auto'>
          <ul className="flex justify-center space-x-20 text-2xl uppercase py-20">
            <li className="">ICE-BUILDING TOOL</li>
            <li className="">LIB-SYSTEM</li>
            <li className="">500BOXX</li>
            <li className="">SMARTSOM</li>
            </ul>
          </div>
        
          <div className='p-120px'>
          <DividerTitle title={"coming soon"}/>
          </div>
      </section>
      <section className='text-center'>
        <div className='flex justify-center flex-col lg:flex-row'>
        <SocialLink title={"novusui blog"} link={"blog.novusui.com"}/>
        <SocialLink title={"novusui youtube"} link={"youtube.novusui.com"}/>
        <SocialLink title={"novusui community"} link={"community.novusui.com"}/>
        <SocialLink title={"study materials"} link={"thenodenovice.novusui.com"}/>
        </div>
        <h1 className='uppercase mt-20 mb-6 text-2l md:text-3xl'>
          subscribe to our newsletter
        </h1>
        <div className='md:space-x-4 pb-48 flex justify-center items-center flex-col md:flex-row'>
          <input placeholder='your email' className='uppercase ps-12 h-12 rounded-2xl w-3/5 md:w-2/5 bg-[#67609438]'>
          </input>
          <button className='uppercase bg-green h-12 w-3/5 mt-4 md:mt-0 md:w-36 rounded-2xl'>submit</button> 
        </div>
        <nav className="h-1/6 p-4 flex justify-center items-center" >
          <div className="flex items-center space-x-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M30.7283 34.895H9.27165C8.16658 34.895 7.10677 34.456 6.32537 33.6746C5.54397 32.8932 5.10498 31.8334 5.10498 30.7283V9.27165C5.10498 8.16658 5.54397 7.10677 6.32537 6.32537C7.10677 5.54397 8.16658 5.10498 9.27165 5.10498H30.7283C31.8334 5.10498 32.8932 5.54397 33.6746 6.32537C34.456 7.10677 34.895 8.16658 34.895 9.27165V30.7283C34.895 31.8334 34.456 32.8932 33.6746 33.6746C32.8932 34.456 31.8334 34.895 30.7283 34.895ZM9.27165 6.77165C8.60861 6.77165 7.97272 7.03504 7.50388 7.50388C7.03504 7.97272 6.77165 8.60861 6.77165 9.27165V30.7283C6.77165 31.3914 7.03504 32.0272 7.50388 32.4961C7.97272 32.9649 8.60861 33.2283 9.27165 33.2283H30.7283C31.3914 33.2283 32.0272 32.9649 32.4961 32.4961C32.9649 32.0272 33.2283 31.3914 33.2283 30.7283V9.27165C33.2283 8.60861 32.9649 7.97272 32.4961 7.50388C32.0272 7.03504 31.3914 6.77165 30.7283 6.77165H9.27165Z" fill="white"/>
              <path d="M20.0001 27.6565C18.4857 27.6549 17.0058 27.2043 15.7475 26.3617C14.4891 25.5191 13.5088 24.3224 12.9305 22.9227C12.3522 21.5231 12.2018 19.9835 12.4984 18.4984C12.795 17.0133 13.5252 15.6495 14.5967 14.5794C15.6682 13.5093 17.033 12.7808 18.5185 12.4862C20.0039 12.1916 21.5434 12.3439 22.9422 12.9241C24.3411 13.5042 25.5366 14.4861 26.3775 15.7455C27.2184 17.005 27.6671 18.4855 27.6668 19.9998C27.6641 22.0314 26.8552 23.9789 25.4177 25.4145C23.9802 26.8501 22.0317 27.6565 20.0001 27.6565ZM20.0001 13.9998C18.8158 14.0015 17.6585 14.3541 16.6744 15.0131C15.6904 15.6721 14.9237 16.608 14.4713 17.7024C14.0188 18.7969 13.9009 20.001 14.1323 21.1625C14.3638 22.324 14.9342 23.3908 15.7717 24.2283C16.6091 25.0657 17.676 25.6362 18.8375 25.8676C19.999 26.0991 21.203 25.9811 22.2975 25.5287C23.392 25.0762 24.3278 24.3095 24.9869 23.3255C25.6459 22.3414 25.9985 21.1842 26.0001 19.9998C26.0001 18.4085 25.368 16.8824 24.2427 15.7572C23.1175 14.632 21.5914 13.9998 20.0001 13.9998Z" fill="white"/>
              <path d="M28.6667 13.1751C29.6562 13.1751 30.4583 12.373 30.4583 11.3835C30.4583 10.394 29.6562 9.5918 28.6667 9.5918C27.6772 9.5918 26.875 10.394 26.875 11.3835C26.875 12.373 27.6772 13.1751 28.6667 13.1751Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0356 5.57242C25.8828 5.42728 26.8316 5.37882 27.7246 5.52988C29.3195 5.79968 30.7925 6.5409 31.957 7.65217C32.7181 7.66938 33.4661 7.51943 34.128 7.30567C34.6881 7.12475 35.1615 6.90628 35.493 6.73357C35.6578 6.64768 35.7851 6.57442 35.868 6.52482C35.9093 6.50005 35.9395 6.48132 35.9573 6.47L35.9731 6.45988C36.4678 6.13035 37.1265 6.19448 37.548 6.61367C37.9695 7.03293 38.0375 7.69113 37.7103 8.18763C37.3641 8.71313 36.8835 9.64992 36.3451 10.6995C36.2605 10.8646 36.1743 11.0324 36.0871 11.2018C35.7783 11.8018 35.4616 12.4081 35.1665 12.9283C34.9811 13.255 34.783 13.5866 34.5831 13.8732V14.3295C34.5958 16.0055 34.4036 17.6728 34.0135 19.2948C33.768 20.3155 33.4441 21.3181 33.0438 22.2938C32.0065 24.8215 30.4758 27.1173 28.5413 29.0468C26.6066 30.9765 24.307 32.5011 21.7766 33.5321C19.2485 34.562 16.5405 35.0783 13.8108 35.051C9.85358 35.0545 5.97963 33.9143 2.6551 31.7678C2.16543 31.4516 1.95926 30.839 2.15816 30.2911C2.35705 29.7431 2.90821 29.4055 3.48666 29.4771C3.98726 29.5391 4.49128 29.5693 4.9957 29.5676C6.80811 29.5626 8.58601 29.1621 10.2091 28.4076C9.6932 28.1728 9.20065 27.8833 8.74038 27.542C7.38753 26.5388 6.38101 25.1388 5.8609 23.537C5.72573 23.1208 5.81813 22.6641 6.1045 22.3331C6.10961 22.3271 6.1148 22.3213 6.12003 22.3155C5.81415 22.0428 5.52793 21.7458 5.26443 21.4265C4.07891 19.9895 3.42611 18.187 3.41648 16.3241L3.41645 16.3176L3.41646 16.2343C3.41646 15.7912 3.65105 15.3812 4.03305 15.1567C4.1299 15.0997 4.23253 15.0569 4.33811 15.0282C3.77423 13.903 3.48098 12.6606 3.48313 11.4002C3.48246 9.97223 3.85546 8.56895 4.56506 7.32978C4.76991 6.97207 5.13796 6.73833 5.54885 6.70503C5.95971 6.67175 6.3606 6.84317 6.62036 7.16325C8.22463 9.13993 10.2268 10.757 12.4967 11.9095C13.6636 12.5019 14.8879 12.9647 16.1476 13.2921C16.8538 13.4757 17.5711 13.6166 18.2958 13.714C18.2638 12.5086 18.5018 11.3038 19.0015 10.1906C19.7343 8.55755 20.9883 7.21392 22.5671 6.37043C23.2356 6.01322 24.1231 5.7287 25.0356 5.57242ZM6.23858 18.1516C6.45466 18.7598 6.77611 19.3303 7.19286 19.8355C8.01175 20.828 9.14831 21.5073 10.4103 21.7583C10.9725 21.8701 11.3865 22.35 11.4149 22.9225C11.4433 23.4948 11.0787 24.0133 10.5304 24.1801C10.0762 24.3183 9.61093 24.4146 9.14035 24.4681C9.45131 24.869 9.81711 25.2281 10.2295 25.5338C11.1648 26.2273 12.293 26.6121 13.4572 26.6345C13.9854 26.6446 14.4502 26.9858 14.6182 27.4866C14.7862 27.9876 14.6213 28.54 14.2061 28.8666C12.4575 30.2426 10.4355 31.202 8.2929 31.6918C10.0687 32.2605 11.9311 32.5533 13.8149 32.551H13.8294C16.2295 32.5758 18.6105 32.1225 20.8333 31.2168C23.0563 30.3113 25.0763 28.9718 26.7758 27.2768C28.4751 25.5818 29.8196 23.5651 30.731 21.3446C31.0826 20.4875 31.3671 19.6068 31.5828 18.7103C31.9258 17.284 32.0946 15.8178 32.0831 14.3441V14.3343V13.451C32.0831 13.1479 32.1933 12.8551 32.393 12.6272C32.5085 12.4954 32.7105 12.1912 32.9921 11.6947C33.2598 11.2228 33.5561 10.6563 33.8643 10.0576C33.883 10.0214 33.9016 9.98502 33.9205 9.94847C33.1211 10.122 32.2151 10.213 31.2655 10.1104C30.9648 10.0779 30.686 9.9374 30.4808 9.715C29.6428 8.8061 28.5266 8.2011 27.3076 7.99485C26.7668 7.90335 26.1128 7.9243 25.4576 8.03652C24.7458 8.15847 24.1263 8.37182 23.7451 8.57543C22.6546 9.15805 21.7885 10.0861 21.2823 11.2141C20.7761 12.3421 20.6586 13.6062 20.9483 14.8081C21.0406 15.1913 20.947 15.5956 20.6953 15.899C20.4436 16.2023 20.0636 16.3693 19.67 16.3494C18.2643 16.2783 16.8735 16.0638 15.5187 15.7117C14.0855 15.3393 12.6926 14.8127 11.365 14.1386C9.41038 13.1463 7.6303 11.8511 6.0889 10.305C6.01858 10.6643 5.98288 11.0311 5.98313 11.4001V11.4033C5.98138 12.3212 6.20663 13.2252 6.63881 14.035C7.071 14.8447 7.6967 15.5351 8.46023 16.0445C8.9236 16.3537 9.12648 16.9321 8.95771 17.463C8.78896 17.9938 8.2893 18.349 7.73246 18.3338C7.22815 18.3201 6.72803 18.2588 6.23858 18.1516Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3097 13.9281C16.9235 13.6964 16.4425 13.6904 16.0506 13.9123C15.6587 14.1341 15.4165 14.5497 15.4165 15V25C15.4165 25.4503 15.6587 25.8658 16.0506 26.0877C16.4425 26.3097 16.9235 26.3035 17.3097 26.0718L25.643 21.0718C26.0195 20.846 26.2498 20.439 26.2498 20C26.2498 19.561 26.0195 19.154 25.643 18.9282L17.3097 13.9281ZM22.5703 20L17.9165 22.7923V17.2077L22.5703 20Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3845 7.73568C22.8034 7.29904 17.1967 7.29904 11.6157 7.73568L7.88117 8.02784C5.61024 8.20551 3.75242 9.90753 3.37702 12.1543C2.50909 17.3489 2.50909 22.6515 3.37702 27.8462C3.75242 30.0929 5.61024 31.7949 7.88117 31.9725L11.6157 32.2647C17.1967 32.7014 22.8034 32.7014 28.3845 32.2647L32.119 31.9725C34.3899 31.7949 36.2477 30.0929 36.6232 27.8462C37.491 22.6515 37.491 17.3489 36.6232 12.1543C36.2477 9.90753 34.3899 8.20551 32.119 8.02784L28.3845 7.73568ZM11.8107 10.2281C17.262 9.80158 22.7382 9.80158 28.1895 10.2281L31.924 10.5202C33.05 10.6083 33.9712 11.4522 34.1574 12.5663C34.9797 17.488 34.9797 22.5124 34.1574 27.4342C33.9712 28.5482 33.05 29.392 31.924 29.4802L28.1895 29.7724C22.7382 30.1989 17.2619 30.1989 11.8107 29.7724L8.07617 29.4802C6.95016 29.392 6.02897 28.5482 5.84284 27.4342C5.02049 22.5124 5.02049 17.488 5.84284 12.5663C6.02897 11.4522 6.95016 10.6083 8.07617 10.5202L11.8107 10.2281Z" fill="white"/>
            </svg>
          </div>
        </nav>
        <footer className='p-10 bg-[#14082E]'>
           <h1>Powered by NovusUI</h1>
        </footer>
      </section>
    </main>
  )
}
