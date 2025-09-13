import React from 'react'
import SectionHeading from '../component/SectionHeading'
import TestimonialSlider from '../component/TestimonialSlider'
import { useTranslation } from 'react-i18next'

function TestimonialSection() {
  const { t } = useTranslation();
  return (
    <>
        <section className='testimonial-section py-16 md:py-24 relative overflow-hidden'>
            <div className='max-w-screen-2xl mx-auto px-4'>
                <SectionHeading
                    title={t("Testimonial_title.title")} 
                    subtitle={t("Testimonial_title.subtitle.part1")} 
                    align='center'
                />
                <TestimonialSlider />
            </div>
        </section>
    </>
  )
}

export default TestimonialSection