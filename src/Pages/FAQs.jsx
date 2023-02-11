import React from 'react'
import Header from '../component/Header'
import Question from '../component/Question'
const FAQs = () => {

    /* state for showing and hiding answers  */
    const [visible , setVisible] = React.useState("hidden")
   const handleToggleVisibility = ()=>{
    if(visible === "hidden"){
        setVisible("visible")
    }else if(visible === "visible"){
        setVisible("hidden")
    }
    return
   }
    
  return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
   
        <Header title="Frequently asked questions" para="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."/>
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex flex-col max-w-screen-sm border-t mx-auto">
     {/*  <!-- questions- start --> */}
  <Question 
  question="What is the best breed you have "
  answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nostrum vero repellat voluptatum blanditiis, nam voluptate minus porro commodi eos optio. Minus corporis cumque atque aut quos iusto exercitationem placeat."
  visible={visible} 
  handleClick={handleToggleVisibility}/>
    {/*   <!-- questions - end --> */}
    </div>
  </div>
</div>
  )
}

export default FAQs