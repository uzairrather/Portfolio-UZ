import React from 'react'
import SkillItems from '../ui/SkillItems'
import SkillLanguage from './SkillLanguage'

const Skill = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[2rem] bg-black'>
        <h1 className='heading'>Education &<span className='text-green-400'>Skill</span></h1>
        <div className='w-[80%] pt-[4rem] mx-auto md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
           <div>
            <SkillItems title="Full-Stack Developer " year="2022-2024"/>
            <SkillLanguage skill1="html" skill2="css" skill3="javascript" skill4="React" skill5="nodejs" level1="w-[90%]" level2="w-[90%]"level3="w-[90%]"level4="w-[90%]" level5="w-[85%]"/>
           </div>
           <div>
           <SkillItems title="Full-Stack Developer " year="2022-2024"/>
            <SkillLanguage skill1="nextjs" skill2="redux" skill3="typescript" skill4="mongodb" skill5="php" level1="w-[91%]" level2="w-[85%]" level3="w-[85%]"  level4="w-[100%]" level5="w-[90%]" />
           </div>
        </div>
    </div>
  )
}

export default Skill