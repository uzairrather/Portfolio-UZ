import React from 'react'
import SkillItems from './Skillitems'
import SkillLanguage from './SkillLanguage'

const Skill = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-black'>
        <h1 className='heading'>Education &<span className='text-green-400'>Skill</span></h1>
        <div className='w-[80%] pt-[4rem] mx-auto md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
           <div>
            <SkillItems title="React Developer" year="208888"/>
            <SkillItems title="React Developer" year="208888"/>
            <SkillLanguage skill1="html" skill2="html" skill3="html" skill4="html" level1="w-[91%]" level2="w-[80%]"level3="w-[80%]"/>
           </div>
           <div>
            <SkillItems title="React Developer" year="208888"/>
            <SkillItems title="React Developer" year="208888"/>
            <SkillLanguage skill1="html" skill2="html" skill3="html" skill4="html" level1="w-[91%]" level2="w-[80%]"level3="w-[80%]"/>
           </div>
        </div>
    </div>
  )
}

export default Skill